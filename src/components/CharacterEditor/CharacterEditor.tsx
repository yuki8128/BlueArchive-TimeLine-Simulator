import { useState } from 'react';
import {
  CharacterInFormation,
  SkillType,
  BaseStats,
  BuffType,
  SkillBuffEffect,
} from '../../types';

interface CharacterEditorProps {
  character: CharacterInFormation;
  onChange: (updated: CharacterInFormation) => void;
  onClose: () => void;
}

const STAT_LABELS: Record<keyof BaseStats, string> = {
  attack: '攻撃力',
  defense: '防御力',
  hp: 'HP',
  criticalValue: '会心値',
  criticalDamage: '会心ダメージ率',
  stability: '安定値',
  accuracy: '命中値',
  evasion: '回避値',
  costRecovery: 'コスト回復力',
};

const BUFF_TYPE_LABELS: Record<BuffType, string> = {
  attackPercent: '攻撃力%',
  attackFlat: '攻撃力(固定)',
  defensePercent: '防御力%',
  defenseFlat: '防御力(固定)',
  defenseDownPercent: '防御力減少%',
  defenseDownFlat: '防御力減少(固定)',
  critDamagePercent: '会心ダメ%',
  critValueFlat: '会心値(固定)',
  critRateFlat: '会心率%',
  damageDealtPercent: '与ダメ%',
  damageTakenPercent: '被ダメ%',
  hpPercent: 'HP%',
  hpFlat: 'HP(固定)',
  accuracyFlat: '命中(固定)',
  evasionFlat: '回避(固定)',
  stabilityFlat: '安定値(固定)',
  costRecoveryFlat: 'コスト回復(固定)',
  costRecoveryPercent: 'コスト回復%',
  healPowerPercent: '回復力%',
  ccStrengthFlat: 'CC強化力',
  ccResistFlat: 'CC抵抗力',
};

const SKILL_TYPE_LABELS: Record<SkillType, string> = {
  ex: 'EXスキル',
  normal: 'ノーマルスキル',
  passive: 'パッシブスキル',
  sub: 'サブスキル',
};

export function CharacterEditor({ character, onChange, onClose }: CharacterEditorProps) {
  const [activeTab, setActiveTab] = useState<'stats' | 'skills'>('stats');
  const [activeSkill, setActiveSkill] = useState<SkillType>('ex');

  // 最終ステータスを計算（基本 + 補正）
  const getFinalStat = (statKey: keyof BaseStats): number => {
    const base = character.character.baseStats[statKey];
    const override = character.statOverrides?.[statKey] ?? 0;
    return base + override;
  };

  // ステータス補正を更新
  const handleStatOverride = (statKey: keyof BaseStats, value: number) => {
    const base = character.character.baseStats[statKey];
    const newOverride = value - base;
    onChange({
      ...character,
      statOverrides: {
        ...character.statOverrides,
        [statKey]: newOverride,
      },
    });
  };

  // スキルレベルを更新
  const handleSkillLevelChange = (skillType: SkillType, level: number) => {
    onChange({
      ...character,
      skillLevels: {
        ...character.skillLevels,
        [skillType]: level,
      },
    });
  };

  // 現在のスキルレベルデータを取得
  const getSkillLevelData = (skillType: SkillType) => {
    const skill = character.character.skills[skillType];
    const level = character.skillLevels[skillType];
    return skill.levels.find((l) => l.level === level) || skill.levels[0];
  };

  // スキル効果を更新
  const handleSkillEffectChange = (
    skillType: SkillType,
    field: 'damageMultiplier' | 'hitCount',
    value: number
  ) => {
    onChange({
      ...character,
      skillOverrides: {
        ...character.skillOverrides,
        [skillType]: {
          ...character.skillOverrides?.[skillType],
          [field]: value,
        },
      },
    });
  };

  // バフ効果を更新
  const handleBuffEffectChange = (
    skillType: SkillType,
    index: number,
    field: keyof SkillBuffEffect,
    value: number | BuffType
  ) => {
    const currentLevelData = getSkillLevelData(skillType);
    const currentBuffs = currentLevelData.buffEffects || [];
    const updatedBuffs = [...currentBuffs];

    if (updatedBuffs[index]) {
      updatedBuffs[index] = {
        ...updatedBuffs[index],
        [field]: value,
      };
    }

    onChange({
      ...character,
      skillOverrides: {
        ...character.skillOverrides,
        [skillType]: {
          ...character.skillOverrides?.[skillType],
          buffEffects: updatedBuffs,
        },
      },
    });
  };

  // スキルの実効値を取得（override優先）
  const getEffectiveSkillValue = (
    skillType: SkillType,
    field: 'damageMultiplier' | 'hitCount'
  ): number => {
    const override = character.skillOverrides?.[skillType]?.[field];
    if (override !== undefined) return override;

    const levelData = getSkillLevelData(skillType);
    return levelData[field] ?? (field === 'hitCount' ? 1 : 0);
  };

  // バフ効果の実効値を取得
  const getEffectiveBuffEffects = (skillType: SkillType): SkillBuffEffect[] => {
    const override = character.skillOverrides?.[skillType]?.buffEffects;
    if (override) return override;

    const levelData = getSkillLevelData(skillType);
    return levelData.buffEffects || [];
  };

  const currentSkill = character.character.skills[activeSkill];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* ヘッダー */}
        <div className="bg-gray-100 px-4 py-3 flex justify-between items-center border-b">
          <h2 className="text-lg font-medium">
            {character.character.name} - 詳細設定
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>

        {/* タブ */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'stats'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            ステータス
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'skills'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            スキル
          </button>
        </div>

        {/* コンテンツ */}
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-120px)]">
          {activeTab === 'stats' && (
            <div className="space-y-4">
              {/* 基本情報 */}
              <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">レベル</label>
                  <input
                    type="number"
                    min={1}
                    max={90}
                    value={character.level ?? 90}
                    onChange={(e) =>
                      onChange({ ...character, level: parseInt(e.target.value) || 90 })
                    }
                    className="w-full p-2 border border-gray-300 rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">星レベル</label>
                  <input
                    type="number"
                    min={1}
                    max={8}
                    value={character.starLevel ?? character.character.rarity}
                    onChange={(e) =>
                      onChange({ ...character, starLevel: parseInt(e.target.value) || 3 })
                    }
                    className="w-full p-2 border border-gray-300 rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">絆レベル</label>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={character.bond ?? 50}
                    onChange={(e) =>
                      onChange({ ...character, bond: parseInt(e.target.value) || 50 })
                    }
                    className="w-full p-2 border border-gray-300 rounded-sm"
                  />
                </div>
              </div>

              {/* ステータス編集 */}
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                ステータス（最終値を入力）
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {(Object.keys(STAT_LABELS) as (keyof BaseStats)[]).map((statKey) => (
                  <div key={statKey} className="flex items-center gap-2">
                    <label className="text-xs text-gray-600 w-24">
                      {STAT_LABELS[statKey]}
                    </label>
                    <input
                      type="number"
                      value={getFinalStat(statKey)}
                      onChange={(e) =>
                        handleStatOverride(statKey, parseFloat(e.target.value) || 0)
                      }
                      className="flex-1 p-1.5 text-sm border border-gray-300 rounded-sm text-right"
                    />
                    <span className="text-xs text-gray-400 w-16">
                      (基本: {character.character.baseStats[statKey]})
                    </span>
                  </div>
                ))}
              </div>

              {/* 補正リセット */}
              <button
                onClick={() => onChange({ ...character, statOverrides: {} })}
                className="text-sm text-red-500 hover:text-red-700"
              >
                補正をリセット
              </button>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-4">
              {/* スキル選択 */}
              <div className="flex gap-2">
                {(['ex', 'normal', 'passive', 'sub'] as SkillType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveSkill(type)}
                    className={`px-3 py-1.5 text-xs rounded-sm ${
                      activeSkill === type
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {SKILL_TYPE_LABELS[type]}
                  </button>
                ))}
              </div>

              {/* スキル情報 */}
              <div className="bg-gray-50 rounded-sm p-3">
                <h4 className="font-medium text-sm mb-1">{currentSkill.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{currentSkill.description}</p>

                {/* スキルレベル */}
                <div className="flex items-center gap-2 mb-3">
                  <label className="text-xs text-gray-500">スキルLv:</label>
                  <input
                    type="number"
                    min={1}
                    max={activeSkill === 'ex' ? 5 : 10}
                    value={character.skillLevels[activeSkill]}
                    onChange={(e) =>
                      handleSkillLevelChange(activeSkill, parseInt(e.target.value) || 1)
                    }
                    className="w-16 p-1 text-sm border border-gray-300 rounded-sm text-center"
                  />
                  {activeSkill === 'ex' && currentSkill.cost && (
                    <span className="text-xs text-gray-500">
                      コスト: {currentSkill.cost}
                    </span>
                  )}
                </div>

                {/* ダメージ倍率・ヒット数 */}
                {(activeSkill === 'ex' || activeSkill === 'normal') && (
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        スキル倍率 (×100%)
                      </label>
                      <input
                        type="number"
                        step={0.01}
                        value={getEffectiveSkillValue(activeSkill, 'damageMultiplier')}
                        onChange={(e) =>
                          handleSkillEffectChange(
                            activeSkill,
                            'damageMultiplier',
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="w-full p-1.5 text-sm border border-gray-300 rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        ヒット数
                      </label>
                      <input
                        type="number"
                        min={1}
                        value={getEffectiveSkillValue(activeSkill, 'hitCount')}
                        onChange={(e) =>
                          handleSkillEffectChange(
                            activeSkill,
                            'hitCount',
                            parseInt(e.target.value) || 1
                          )
                        }
                        className="w-full p-1.5 text-sm border border-gray-300 rounded-sm"
                      />
                    </div>
                  </div>
                )}

                {/* バフ効果 */}
                <div className="space-y-2">
                  <h5 className="text-xs font-medium text-gray-700">バフ/デバフ効果</h5>
                  {getEffectiveBuffEffects(activeSkill).map((buff, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2 p-2 bg-white rounded-sm border">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">種類</label>
                        <select
                          value={buff.type}
                          onChange={(e) =>
                            handleBuffEffectChange(
                              activeSkill,
                              index,
                              'type',
                              e.target.value as BuffType
                            )
                          }
                          className="w-full p-1 text-xs border border-gray-300 rounded-sm"
                        >
                          {Object.entries(BUFF_TYPE_LABELS).map(([key, label]) => (
                            <option key={key} value={key}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">値</label>
                        <input
                          type="number"
                          step={0.1}
                          value={buff.value}
                          onChange={(e) =>
                            handleBuffEffectChange(
                              activeSkill,
                              index,
                              'value',
                              parseFloat(e.target.value) || 0
                            )
                          }
                          className="w-full p-1 text-xs border border-gray-300 rounded-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">持続(秒)</label>
                        <input
                          type="number"
                          value={buff.duration}
                          onChange={(e) =>
                            handleBuffEffectChange(
                              activeSkill,
                              index,
                              'duration',
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-full p-1 text-xs border border-gray-300 rounded-sm"
                        />
                      </div>
                      <div className="flex items-end">
                        <span className="text-xs text-gray-400">
                          {buff.duration >= 999 ? '永続' : `${buff.duration}秒`}
                        </span>
                      </div>
                    </div>
                  ))}

                  {getEffectiveBuffEffects(activeSkill).length === 0 && (
                    <p className="text-xs text-gray-400 italic">
                      バフ効果なし（ダメージスキル）
                    </p>
                  )}
                </div>

                {/* 発動タイミング（ノーマル/パッシブ/サブ） */}
                {activeSkill !== 'ex' && currentSkill.activationTiming && (
                  <div className="mt-3 p-2 bg-blue-50 rounded-sm text-xs">
                    <span className="font-medium">発動:</span>{' '}
                    {currentSkill.activationTiming === 'periodic'
                      ? `${currentSkill.activationInterval}秒ごと`
                      : currentSkill.activationTiming === 'battleStart'
                      ? '戦闘開始時'
                      : '手動'}
                  </div>
                )}
              </div>

              {/* スキルオーバーライドリセット */}
              <button
                onClick={() =>
                  onChange({
                    ...character,
                    skillOverrides: {
                      ...character.skillOverrides,
                      [activeSkill]: undefined,
                    },
                  })
                }
                className="text-sm text-red-500 hover:text-red-700"
              >
                このスキルの編集をリセット
              </button>
            </div>
          )}
        </div>

        {/* フッター */}
        <div className="bg-gray-50 px-4 py-3 flex justify-end border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-sm text-sm hover:bg-blue-600"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
