import { useState, useMemo, useEffect } from 'react';
import {
  TimelineAction,
  CharacterInFormation,
  SkillType,
  DamageLogEntry,
} from '../../types';

interface TimelineEntry {
  id: string;
  time: number;
  characterId: string;
  characterName: string;
  skillType: SkillType;
  skillName: string;
  skillLevel: number;
  cost: number | null; // EXスキルのコスト、それ以外はnull
  currentCost: number; // この時点での残りコスト
  isAuto: boolean; // 自動発動（パッシブ/サブ）かどうか
  damage?: number;
}

interface TimelineProps {
  actions: TimelineAction[];
  characters: CharacterInFormation[];
  damageLog: DamageLogEntry[];
  totalDamage: number;
  maxCost: number;
  costRecoveryRate: number;
  onAddAction: (action: Omit<TimelineAction, 'id'>) => void;
  onRemoveAction: (actionId: string) => void;
  onClearActions: () => void;
  initialCost?: number;
  onInitialCostChange?: (cost: number) => void;
}

export function Timeline({
  actions,
  characters,
  damageLog,
  totalDamage,
  maxCost,
  costRecoveryRate,
  onAddAction,
  onRemoveAction,
  onClearActions,
  initialCost,
  onInitialCostChange,
}: TimelineProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [selectedSkillType, setSelectedSkillType] = useState<SkillType>('ex');
  const [time, setTime] = useState<number>(0);
  const [manualInitialCost, setManualInitialCost] = useState<number>(initialCost ?? maxCost);
  const [costOverrides, setCostOverrides] = useState<Record<string, number>>({});

  // 初期コストが変更されたら同期
  useEffect(() => {
    if (initialCost !== undefined) {
      setManualInitialCost(initialCost);
    }
  }, [initialCost]);

  // キャラクター情報を取得するヘルパー
  const getCharacter = (characterId: string) => {
    return characters.find((c) => c.character.id === characterId);
  };

  // パッシブ/サブスキルの自動エントリを生成
  const autoEntries = useMemo<TimelineEntry[]>(() => {
    const entries: TimelineEntry[] = [];

    characters.forEach((char) => {
      // パッシブスキル（戦闘開始時から有効）
      const passiveSkill = char.character.skills.passive;
      if (passiveSkill) {
        entries.push({
          id: `auto_passive_${char.character.id}`,
          time: 0,
          characterId: char.character.id,
          characterName: char.character.name,
          skillType: 'passive',
          skillName: passiveSkill.name,
          skillLevel: char.skillLevels.passive,
          cost: null,
          currentCost: 0, // 後で計算
          isAuto: true,
        });
      }

      // サブスキル（戦闘開始時から有効）
      const subSkill = char.character.skills.sub;
      if (subSkill) {
        entries.push({
          id: `auto_sub_${char.character.id}`,
          time: 0,
          characterId: char.character.id,
          characterName: char.character.name,
          skillType: 'sub',
          skillName: subSkill.name,
          skillLevel: char.skillLevels.sub,
          cost: null,
          currentCost: 0, // 後で計算
          isAuto: true,
        });
      }
    });

    return entries;
  }, [characters]);

  // タイムラインエントリを構築（コスト計算含む）
  const timelineEntries = useMemo<TimelineEntry[]>(() => {
    // 手動アクションをエントリに変換
    const manualEntries: TimelineEntry[] = actions.map((action) => {
      const char = getCharacter(action.characterId);
      const skill = char?.character.skills[action.skillType];
      const damageEntry = damageLog.find(
        (log) =>
          log.time === action.time &&
          log.characterId === action.characterId &&
          log.skillType === action.skillType
      );

      return {
        id: action.id,
        time: action.time,
        characterId: action.characterId,
        characterName: char?.character.name || action.characterId,
        skillType: action.skillType,
        skillName: skill?.name || action.skillType,
        skillLevel: action.skillLevel,
        cost: action.skillType === 'ex' ? (skill?.cost || 0) : null,
        currentCost: 0, // 後で計算
        isAuto: false,
        damage: damageEntry?.damage.expectedDamage,
      };
    });

    // 全エントリを時間順にソート
    const allEntries = [...autoEntries, ...manualEntries].sort(
      (a, b) => a.time - b.time || (a.isAuto ? -1 : 1)
    );

    // コストを順番に計算
    let currentCost = manualInitialCost;
    let lastTime = 0;

    return allEntries.map((entry) => {
      // 時間経過によるコスト回復
      const elapsed = entry.time - lastTime;
      currentCost = Math.min(currentCost + elapsed * costRecoveryRate, maxCost);

      // オーバーライドがあれば適用
      if (costOverrides[entry.id] !== undefined) {
        currentCost = costOverrides[entry.id];
      }

      // EXスキルならコスト消費
      if (entry.skillType === 'ex' && entry.cost) {
        const costBeforeUse = currentCost;
        currentCost = Math.max(0, currentCost - entry.cost);
        lastTime = entry.time;
        return { ...entry, currentCost: costBeforeUse };
      }

      lastTime = entry.time;
      return { ...entry, currentCost };
    });
  }, [actions, autoEntries, damageLog, manualInitialCost, costRecoveryRate, maxCost, costOverrides]);

  // EXスキルのみのエントリ（手動追加分）
  const exSkillEntries = timelineEntries.filter(
    (e) => e.skillType === 'ex' && !e.isAuto
  );


  const handleAddAction = () => {
    if (!selectedCharacter) return;

    const char = characters.find((c) => c.character.id === selectedCharacter);
    if (!char) return;

    onAddAction({
      time,
      characterId: selectedCharacter,
      skillType: selectedSkillType,
      skillLevel: char.skillLevels[selectedSkillType],
    });
  };

  const handleInitialCostChange = (newCost: number) => {
    setManualInitialCost(newCost);
    onInitialCostChange?.(newCost);
  };

  const handleCostOverride = (entryId: string, newCost: number) => {
    setCostOverrides((prev) => ({
      ...prev,
      [entryId]: newCost,
    }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const secsStr = Number.isInteger(secs) ? secs.toString() : secs.toFixed(1);
    return `${mins}:${secsStr.padStart(mins > 0 ? 2 : 1, '0')}`;
  };

  const skillTypeColors: Record<SkillType, string> = {
    ex: 'bg-blue-500 text-white',
    normal: 'bg-green-500 text-white',
    passive: 'bg-purple-200 text-purple-800',
    sub: 'bg-gray-200 text-gray-700',
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">タイムライン</h3>
        {actions.length > 0 && (
          <button
            onClick={onClearActions}
            className="text-sm text-red-600 hover:text-red-800"
          >
            クリア
          </button>
        )}
      </div>

      {/* コスト情報 */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div>
            <label className="block text-xs text-gray-500 mb-1">初期コスト</label>
            <input
              type="number"
              min={0}
              max={maxCost}
              step={0.5}
              value={manualInitialCost}
              onChange={(e) => handleInitialCostChange(parseFloat(e.target.value) || 0)}
              className="w-full p-1.5 border border-gray-300 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">最大コスト</label>
            <div className="p-1.5 bg-gray-100 rounded text-sm font-medium">
              {maxCost.toFixed(1)}
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">回復速度</label>
            <div className="p-1.5 bg-gray-100 rounded text-sm">
              {costRecoveryRate.toFixed(3)}/秒
            </div>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          1コスト回復: {(1 / costRecoveryRate).toFixed(2)}秒
        </div>
      </div>

      {/* アクション追加フォーム */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">時間(秒)</label>
          <input
            type="number"
            min={0}
            step={0.5}
            value={time}
            onChange={(e) => setTime(parseFloat(e.target.value) || 0)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">キャラ</label>
          <select
            value={selectedCharacter}
            onChange={(e) => setSelectedCharacter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
          >
            <option value="">選択</option>
            {characters.map((char) => (
              <option key={char.character.id} value={char.character.id}>
                {char.character.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">スキル</label>
          <select
            value={selectedSkillType}
            onChange={(e) => setSelectedSkillType(e.target.value as SkillType)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
          >
            <option value="ex">EX</option>
            <option value="normal">Normal</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleAddAction}
            disabled={!selectedCharacter}
            className="w-full p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            追加
          </button>
        </div>
      </div>

      {/* タイムライン表示 */}
      <div className="space-y-1 max-h-96 overflow-y-auto">
        {/* パッシブ/サブスキル（自動） */}
        {autoEntries.length > 0 && (
          <div className="mb-2">
            <div className="text-xs text-gray-500 mb-1 font-medium">
              常時効果（パッシブ/サブスキル）
            </div>
            {autoEntries.map((entry) => (
              <div
                key={entry.id}
                className="flex items-center justify-between bg-gray-50 p-2 rounded text-sm opacity-70"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`px-1.5 py-0.5 text-xs rounded ${
                      skillTypeColors[entry.skillType]
                    }`}
                  >
                    {entry.skillType === 'passive' ? 'PS' : 'SS'}
                  </span>
                  <span className="font-medium">{entry.characterName}</span>
                  <span className="text-gray-500">{entry.skillName}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EXスキルタイムライン */}
        <div className="text-xs text-gray-500 mb-1 font-medium">
          EXスキルタイムライン
        </div>
        {exSkillEntries.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-4">
            EXスキルを追加してください
          </p>
        ) : (
          exSkillEntries.map((entry) => {
            const costAfterUse = entry.currentCost - (entry.cost || 0);
            const isInsufficient = entry.currentCost < (entry.cost || 0);

            return (
              <div
                key={entry.id}
                className={`flex items-center justify-between p-2 rounded border ${
                  isInsufficient
                    ? 'bg-red-50 border-red-300'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  {/* 時間 */}
                  <span className="text-sm font-mono text-gray-600 w-12">
                    {formatTime(entry.time)}
                  </span>

                  {/* コスト表示（編集可能） */}
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      min={0}
                      max={maxCost}
                      step={0.5}
                      value={entry.currentCost.toFixed(1)}
                      onChange={(e) =>
                        handleCostOverride(entry.id, parseFloat(e.target.value) || 0)
                      }
                      className={`w-12 p-0.5 text-xs border rounded text-center ${
                        isInsufficient
                          ? 'border-red-400 bg-red-50'
                          : 'border-gray-300'
                      }`}
                      title="コストを手動で変更"
                    />
                    <span className="text-gray-400">→</span>
                    <span
                      className={`text-xs font-medium ${
                        isInsufficient ? 'text-red-600' : 'text-gray-600'
                      }`}
                    >
                      {costAfterUse.toFixed(1)}
                    </span>
                  </div>

                  {/* キャラ/スキル */}
                  <span
                    className={`px-1.5 py-0.5 text-xs rounded ${
                      skillTypeColors[entry.skillType]
                    }`}
                  >
                    {entry.cost}
                  </span>
                  <span className="text-sm font-medium">{entry.characterName}</span>
                  <span className="text-xs text-gray-500">{entry.skillName}</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* ダメージ */}
                  {entry.damage !== undefined && (
                    <span className="text-sm text-blue-600 font-medium">
                      {Math.floor(entry.damage).toLocaleString()}
                    </span>
                  )}
                  {/* 削除 */}
                  <button
                    onClick={() => onRemoveAction(entry.id)}
                    className="text-red-500 hover:text-red-700 text-lg leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 合計ダメージ */}
      {totalDamage > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">合計ダメージ</span>
            <span className="text-xl font-bold text-blue-600">
              {Math.floor(totalDamage).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
