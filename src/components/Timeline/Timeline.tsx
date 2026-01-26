import { useState, useMemo, useEffect } from 'react';
import {
  TimelineAction,
  CharacterInFormation,
  SkillType,
  Enemy,
  Formation,
} from '../../types';
import { runTimeline } from '../../engine/timeline';

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
  isEditable: boolean; // 時間を編集可能か
  damage?: number;
  buffDuration?: number; // バフの持続時間（秒）
  buffEndTime?: number; // バフの終了時間
  activationInfo?: string; // 発動条件の説明
}

interface TimelineProps {
  actions: TimelineAction[];
  characters: CharacterInFormation[];
  maxCost: number;
  costRecoveryRate: number;
  onAddAction: (action: Omit<TimelineAction, 'id'>) => void;
  onRemoveAction: (actionId: string) => void;
  onClearActions: () => void;
  initialCost?: number;
  onInitialCostChange?: (cost: number) => void;
  // タイムライン用敵選択
  enemy: Enemy | null;
  phaseIndex: number;
  enemies: Enemy[];
  useSharedEnemy: boolean;
  onUseSharedEnemyChange: (value: boolean) => void;
  timelineEnemy: Enemy | null;
  timelinePhase: number;
  onTimelineEnemyChange: (enemy: Enemy | null) => void;
  onTimelinePhaseChange: (phase: number) => void;
  formation: Formation;
}

// シミュレーション時間（秒）
const SIMULATION_DURATION = 180;

export function Timeline({
  actions,
  characters,
  maxCost,
  costRecoveryRate,
  onAddAction,
  onRemoveAction,
  onClearActions,
  initialCost,
  onInitialCostChange,
  enemy,
  phaseIndex,
  enemies,
  useSharedEnemy,
  onUseSharedEnemyChange,
  timelineEnemy,
  timelinePhase,
  onTimelineEnemyChange,
  onTimelinePhaseChange,
  formation,
}: TimelineProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [selectedSkillType, setSelectedSkillType] = useState<SkillType>('ex');
  const [time, setTime] = useState<number>(0);
  const [manualInitialCost, setManualInitialCost] = useState<number>(initialCost ?? maxCost);
  const [costOverrides, setCostOverrides] = useState<Record<string, number>>({});
  const [timeOverrides, setTimeOverrides] = useState<Record<string, number>>({});
  const [simulationDuration, setSimulationDuration] = useState<number>(SIMULATION_DURATION);
  const [buffTargetCharacter, setBuffTargetCharacter] = useState<string>('');

  useEffect(() => {
    if (initialCost !== undefined) {
      setManualInitialCost(initialCost);
    }
  }, [initialCost]);

  const getCharacter = (characterId: string) => {
    return characters.find((c) => c.character.id === characterId);
  };

  // スキルが単体味方バフを持つか確認
  const hasSingleAllyBuff = (characterId: string, skillType: SkillType): boolean => {
    const char = getCharacter(characterId);
    if (!char) return false;

    const skill = char.character.skills[skillType];
    const skillLevel = char.skillLevels[skillType];
    const levelData = skill.levels.find(l => l.level === skillLevel);

    if (!levelData?.buffEffects) return false;

    return levelData.buffEffects.some(effect => effect.target === 'ally');
  };

  // 選択中のスキルが単体味方バフかどうか
  const selectedSkillHasSingleAllyBuff = selectedCharacter
    ? hasSingleAllyBuff(selectedCharacter, selectedSkillType)
    : false;

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

  // 自動発動スキルをTimelineAction形式で生成
  const autoActions = useMemo<(TimelineAction & { activationInfo?: string })[]>(() => {
    const actions: (TimelineAction & { activationInfo?: string })[] = [];

    characters.forEach((char) => {
      // パッシブスキル（戦闘開始時）
      const passiveSkill = char.character.skills.passive;
      if (passiveSkill) {
        const actionId = `auto_passive_${char.character.id}`;
        const baseTime = 0;
        const actualTime = timeOverrides[actionId] ?? baseTime;
        actions.push({
          id: actionId,
          time: actualTime,
          characterId: char.character.id,
          skillType: 'passive',
          skillLevel: char.skillLevels.passive,
          activationInfo: '戦闘開始時',
        });
      }

      // サブスキル（戦闘開始時）
      const subSkill = char.character.skills.sub;
      if (subSkill) {
        const actionId = `auto_sub_${char.character.id}`;
        const baseTime = 0;
        const actualTime = timeOverrides[actionId] ?? baseTime;
        actions.push({
          id: actionId,
          time: actualTime,
          characterId: char.character.id,
          skillType: 'sub',
          skillLevel: char.skillLevels.sub,
          activationInfo: '戦闘開始時',
        });
      }

      // ノーマルスキル
      const normalSkill = char.character.skills.normal;
      if (normalSkill) {
        const timing = normalSkill.activationTiming;

        if (timing === 'periodic' && normalSkill.activationInterval) {
          const interval = normalSkill.activationInterval;
          for (let i = 0; i * interval <= simulationDuration; i++) {
            const actionId = `auto_normal_${char.character.id}_${i}`;
            const baseTime = i * interval;
            const actualTime = timeOverrides[actionId] ?? baseTime;
            actions.push({
              id: actionId,
              time: actualTime,
              characterId: char.character.id,
              skillType: 'normal',
              skillLevel: char.skillLevels.normal,
              activationInfo: `${interval}秒ごと`,
            });
          }
        } else if (timing === 'attackCount' && normalSkill.activationCount) {
          const count = normalSkill.activationCount;
          const actionId = `auto_normal_${char.character.id}_0`;
          const baseTime = 0;
          const actualTime = timeOverrides[actionId] ?? baseTime;
          actions.push({
            id: actionId,
            time: actualTime,
            characterId: char.character.id,
            skillType: 'normal',
            skillLevel: char.skillLevels.normal,
            activationInfo: `通常攻撃${count}回ごと`,
          });
        }
      }
    });

    return actions;
  }, [characters, simulationDuration, timeOverrides]);

  // 全アクション（自動 + 手動）を結合してシミュレーション実行
  const allActionsSimulation = useMemo(() => {
    if (!enemy || characters.length === 0) return null;

    // 自動アクションと手動アクションを結合
    const allActions: TimelineAction[] = [
      ...autoActions.map(({ activationInfo, ...action }) => action),
      ...actions,
    ];

    return runTimeline(
      formation,
      enemy,
      phaseIndex,
      allActions,
      manualInitialCost
    );
  }, [enemy, phaseIndex, formation, autoActions, actions, manualInitialCost, characters.length]);

  // ダメージログをIDでマップ化
  const damageByActionKey = useMemo(() => {
    const map = new Map<string, number>();
    if (!allActionsSimulation) return map;

    for (const entry of allActionsSimulation.damageLog) {
      // 同じ時間・キャラ・スキルタイプの組み合わせでマッチング
      const key = `${entry.time}_${entry.characterId}_${entry.skillType}`;
      map.set(key, entry.damage.expectedDamage);
    }
    return map;
  }, [allActionsSimulation]);

  // 合計ダメージを再計算（自動スキル含む）
  const calculatedTotalDamage = useMemo(() => {
    return allActionsSimulation?.totalDamage ?? 0;
  }, [allActionsSimulation]);

  // タイムラインエントリを構築
  const timelineEntries = useMemo<TimelineEntry[]>(() => {
    // 自動アクションをTimelineEntry形式に変換
    const autoEntries: TimelineEntry[] = autoActions.map((action) => {
      const char = getCharacter(action.characterId);
      const skill = char?.character.skills[action.skillType];
      const damageKey = `${action.time}_${action.characterId}_${action.skillType}`;
      const damage = damageByActionKey.get(damageKey);
      const buffDuration = char ? getBuffDuration(char, action.skillType) : undefined;

      return {
        id: action.id,
        time: action.time,
        characterId: action.characterId,
        characterName: char?.character.name || action.characterId,
        skillType: action.skillType,
        skillName: skill?.name || action.skillType,
        skillLevel: action.skillLevel,
        cost: null,
        currentCost: 0,
        isAuto: true,
        isEditable: true,
        damage,
        buffDuration,
        buffEndTime: buffDuration ? action.time + buffDuration : undefined,
        activationInfo: action.activationInfo,
      };
    });

    // 手動アクションをTimelineEntry形式に変換
    const manualEntries: TimelineEntry[] = actions.map((action) => {
      const char = getCharacter(action.characterId);
      const skill = char?.character.skills[action.skillType];
      const damageKey = `${action.time}_${action.characterId}_${action.skillType}`;
      const damage = damageByActionKey.get(damageKey);
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
        isEditable: false,
        damage,
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
  }, [actions, autoActions, damageByActionKey, manualInitialCost, costRecoveryRate, maxCost, costOverrides, characters]);

  const handleAddAction = () => {
    if (!selectedCharacter) return;

    const char = characters.find((c) => c.character.id === selectedCharacter);
    if (!char) return;

    onAddAction({
      time,
      characterId: selectedCharacter,
      skillType: selectedSkillType,
      skillLevel: char.skillLevels[selectedSkillType],
      // 単体味方バフの場合、ターゲットを指定
      buffTargetCharacterId: selectedSkillHasSingleAllyBuff ? buffTargetCharacter || undefined : undefined,
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

  const handleTimeOverride = (entryId: string, newTime: number) => {
    setTimeOverrides((prev) => ({
      ...prev,
      [entryId]: Math.max(0, newTime),
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

      {/* タイムライン用敵設定 */}
      <div className="bg-yellow-50 rounded-lg p-3 mb-4 border border-yellow-200">
        <div className="flex items-center gap-4 mb-2">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={useSharedEnemy}
              onChange={(e) => onUseSharedEnemyChange(e.target.checked)}
              className="rounded border-gray-300"
            />
            <span className="text-gray-700">単発計算と同じ敵を使用</span>
          </label>
        </div>

        {!useSharedEnemy && (
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">タイムライン用敵</label>
              <select
                value={timelineEnemy?.id || ''}
                onChange={(e) => {
                  const enemy = enemies.find((en) => en.id === e.target.value) || null;
                  onTimelineEnemyChange(enemy);
                  onTimelinePhaseChange(0);
                }}
                className="w-full p-1.5 border border-gray-300 rounded text-sm"
              >
                <option value="">選択してください</option>
                {enemies.map((en) => (
                  <option key={en.id} value={en.id}>
                    {en.name} ({en.difficulty})
                  </option>
                ))}
              </select>
            </div>
            {timelineEnemy && timelineEnemy.phases.length > 1 && (
              <div>
                <label className="block text-xs text-gray-500 mb-1">フェーズ</label>
                <select
                  value={timelinePhase}
                  onChange={(e) => onTimelinePhaseChange(parseInt(e.target.value))}
                  className="w-full p-1.5 border border-gray-300 rounded text-sm"
                >
                  {timelineEnemy.phases.map((phase, idx) => (
                    <option key={idx} value={idx}>
                      {phase.name || `フェーズ${idx + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {/* 現在の敵情報を表示 */}
        {enemy && (
          <div className="mt-2 text-xs text-gray-600">
            <span className="font-medium">対象:</span> {enemy.name} - 防御力: {enemy.phases[phaseIndex]?.defense?.toLocaleString()}
          </div>
        )}
      </div>

      {/* コスト情報 */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="grid grid-cols-4 gap-2 text-sm">
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
          <div>
            <label className="block text-xs text-gray-500 mb-1">シミュ時間(秒)</label>
            <input
              type="number"
              min={30}
              max={600}
              step={30}
              value={simulationDuration}
              onChange={(e) => setSimulationDuration(parseInt(e.target.value) || SIMULATION_DURATION)}
              className="w-full p-1.5 border border-gray-300 rounded text-sm"
            />
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

      {/* 単体味方バフのターゲット選択 */}
      {selectedSkillHasSingleAllyBuff && (
        <div className="bg-purple-50 rounded-lg p-3 mb-4 border border-purple-200">
          <label className="block text-xs text-gray-600 mb-1">
            バフ対象キャラクター（単体味方バフ）
          </label>
          <select
            value={buffTargetCharacter}
            onChange={(e) => setBuffTargetCharacter(e.target.value)}
            className="w-full p-2 border border-purple-300 rounded text-sm"
          >
            <option value="">全員に適用（デフォルト）</option>
            {characters
              .filter((c) => c.character.id !== selectedCharacter)
              .map((char) => (
                <option key={char.character.id} value={char.character.id}>
                  {char.character.name}
                </option>
              ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            アコやキサキのEXスキルなど、味方1人を対象とするバフの対象を指定
          </p>
        </div>
      )}

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
                  {/* 時間（編集可能な場合は入力フィールド） */}
                  {entry.isEditable ? (
                    <input
                      type="number"
                      min={0}
                      step={0.5}
                      value={entry.time}
                      onChange={(e) =>
                        handleTimeOverride(entry.id, parseFloat(e.target.value) || 0)
                      }
                      className="w-14 p-0.5 text-sm font-mono text-gray-600 border border-gray-300 rounded text-center"
                      title="発動時間を手動で変更"
                    />
                  ) : (
                    <span className="text-sm font-mono text-gray-600 w-10">
                      {formatTime(entry.time)}
                    </span>
                  )}

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

                  {/* 発動条件表示 */}
                  {entry.activationInfo && (
                    <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                      {entry.activationInfo}
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
      {calculatedTotalDamage > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">合計ダメージ</span>
            <span className="text-xl font-bold text-blue-600">
              {Math.floor(calculatedTotalDamage).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
