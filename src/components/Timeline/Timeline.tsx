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
  cost: number | null;
  currentCost: number;
  isAuto: boolean;
  damage?: number;
  buffDuration?: number; // バフの持続時間（秒）
  buffEndTime?: number; // バフの終了時間
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

  useEffect(() => {
    if (initialCost !== undefined) {
      setManualInitialCost(initialCost);
    }
  }, [initialCost]);

  const getCharacter = (characterId: string) => {
    return characters.find((c) => c.character.id === characterId);
  };

  // バフの持続時間を取得
  const getBuffDuration = (char: CharacterInFormation, skillType: SkillType): number | undefined => {
    const skill = char.character.skills[skillType];
    const skillLevel = char.skillLevels[skillType];
    const levelData = skill.levels.find(l => l.level === skillLevel);

    if (levelData?.buffEffects && levelData.buffEffects.length > 0) {
      // 最初のバフ効果の持続時間を返す（通常は全て同じ）
      const duration = levelData.buffEffects[0].duration;
      // 999秒以上は永続として扱う
      return duration >= 999 ? undefined : duration;
    }
    return undefined;
  };

  // パッシブ/サブスキルのエントリを生成（戦闘開始時 = 0秒）
  const autoEntries = useMemo<TimelineEntry[]>(() => {
    const entries: TimelineEntry[] = [];

    characters.forEach((char) => {
      // パッシブスキル
      const passiveSkill = char.character.skills.passive;
      if (passiveSkill) {
        const duration = getBuffDuration(char, 'passive');
        entries.push({
          id: `auto_passive_${char.character.id}`,
          time: 0,
          characterId: char.character.id,
          characterName: char.character.name,
          skillType: 'passive',
          skillName: passiveSkill.name,
          skillLevel: char.skillLevels.passive,
          cost: null,
          currentCost: 0,
          isAuto: true,
          buffDuration: duration,
          buffEndTime: duration ? duration : undefined,
        });
      }

      // サブスキル
      const subSkill = char.character.skills.sub;
      if (subSkill) {
        const duration = getBuffDuration(char, 'sub');
        entries.push({
          id: `auto_sub_${char.character.id}`,
          time: 0,
          characterId: char.character.id,
          characterName: char.character.name,
          skillType: 'sub',
          skillName: subSkill.name,
          skillLevel: char.skillLevels.sub,
          cost: null,
          currentCost: 0,
          isAuto: true,
          buffDuration: duration,
          buffEndTime: duration ? duration : undefined,
        });
      }
    });

    return entries;
  }, [characters]);

  // タイムラインエントリを構築
  const timelineEntries = useMemo<TimelineEntry[]>(() => {
    const manualEntries: TimelineEntry[] = actions.map((action) => {
      const char = getCharacter(action.characterId);
      const skill = char?.character.skills[action.skillType];
      const damageEntry = damageLog.find(
        (log) =>
          log.time === action.time &&
          log.characterId === action.characterId &&
          log.skillType === action.skillType
      );

      const buffDuration = char ? getBuffDuration(char, action.skillType) : undefined;

      return {
        id: action.id,
        time: action.time,
        characterId: action.characterId,
        characterName: char?.character.name || action.characterId,
        skillType: action.skillType,
        skillName: skill?.name || action.skillType,
        skillLevel: action.skillLevel,
        cost: action.skillType === 'ex' ? (skill?.cost || 0) : null,
        currentCost: 0,
        isAuto: false,
        damage: damageEntry?.damage.expectedDamage,
        buffDuration: buffDuration,
        buffEndTime: buffDuration ? action.time + buffDuration : undefined,
      };
    });

    // 全エントリを結合してソート
    const allEntries = [...autoEntries, ...manualEntries].sort(
      (a, b) => a.time - b.time || (a.isAuto ? -1 : 1)
    );

    // コスト計算
    let currentCost = manualInitialCost;
    let lastTime = 0;

    return allEntries.map((entry) => {
      const elapsed = entry.time - lastTime;
      currentCost = Math.min(currentCost + elapsed * costRecoveryRate, maxCost);

      if (costOverrides[entry.id] !== undefined) {
        currentCost = costOverrides[entry.id];
      }

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

  const skillTypeLabels: Record<SkillType, string> = {
    ex: 'EX',
    normal: 'NS',
    passive: 'PS',
    sub: 'SS',
  };

  const skillTypeColors: Record<SkillType, string> = {
    ex: 'bg-blue-500 text-white',
    normal: 'bg-green-500 text-white',
    passive: 'bg-purple-500 text-white',
    sub: 'bg-orange-500 text-white',
  };

  const skillTypeBgColors: Record<SkillType, string> = {
    ex: 'bg-blue-50 border-blue-200',
    normal: 'bg-green-50 border-green-200',
    passive: 'bg-purple-50 border-purple-200',
    sub: 'bg-orange-50 border-orange-200',
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
        {timelineEntries.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-4">
            キャラクターを編成してください
          </p>
        ) : (
          timelineEntries.map((entry) => {
            const isExSkill = entry.skillType === 'ex';
            const costAfterUse = isExSkill ? entry.currentCost - (entry.cost || 0) : null;
            const isInsufficient = isExSkill && entry.currentCost < (entry.cost || 0);

            return (
              <div
                key={entry.id}
                className={`flex items-center justify-between p-2 rounded border ${
                  isInsufficient
                    ? 'bg-red-50 border-red-300'
                    : skillTypeBgColors[entry.skillType]
                }`}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  {/* 時間 */}
                  <span className="text-sm font-mono text-gray-600 w-10">
                    {formatTime(entry.time)}
                  </span>

                  {/* スキルタイプバッジ */}
                  <span
                    className={`px-1.5 py-0.5 text-xs rounded font-medium ${
                      skillTypeColors[entry.skillType]
                    }`}
                  >
                    {skillTypeLabels[entry.skillType]}
                  </span>

                  {/* EXスキルのコスト表示 */}
                  {isExSkill && (
                    <div className="flex items-center gap-1 text-xs">
                      <input
                        type="number"
                        min={0}
                        max={maxCost}
                        step={0.5}
                        value={entry.currentCost.toFixed(1)}
                        onChange={(e) =>
                          handleCostOverride(entry.id, parseFloat(e.target.value) || 0)
                        }
                        className={`w-10 p-0.5 border rounded text-center ${
                          isInsufficient
                            ? 'border-red-400 bg-red-50'
                            : 'border-gray-300'
                        }`}
                        title="コストを手動で変更"
                      />
                      <span className="text-gray-400">→</span>
                      <span
                        className={`font-medium ${
                          isInsufficient ? 'text-red-600' : 'text-gray-600'
                        }`}
                      >
                        {costAfterUse?.toFixed(1)}
                      </span>
                      <span className="text-gray-400 ml-1">
                        (Cost:{entry.cost})
                      </span>
                    </div>
                  )}

                  {/* キャラ名・スキル名 */}
                  <span className="text-sm font-medium">{entry.characterName}</span>
                  <span className="text-xs text-gray-500">{entry.skillName}</span>

                  {/* バフ持続時間表示 */}
                  {entry.buffDuration && (
                    <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                      ~{formatTime(entry.buffEndTime!)} ({entry.buffDuration}秒)
                    </span>
                  )}

                  {/* 永続バフ表示 */}
                  {entry.skillType === 'passive' && !entry.buffDuration && (
                    <span className="text-xs text-purple-400 bg-purple-100 px-1.5 py-0.5 rounded">
                      永続
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {/* ダメージ */}
                  {entry.damage !== undefined && (
                    <span className="text-sm text-blue-600 font-medium">
                      {Math.floor(entry.damage).toLocaleString()}
                    </span>
                  )}
                  {/* 削除ボタン（手動追加のみ） */}
                  {!entry.isAuto && (
                    <button
                      onClick={() => onRemoveAction(entry.id)}
                      className="text-red-500 hover:text-red-700 text-lg leading-none"
                    >
                      ×
                    </button>
                  )}
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
