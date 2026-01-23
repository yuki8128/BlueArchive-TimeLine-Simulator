import {
  AttackType,
  ArmorType,
  TerrainRank,
  Character,
  Enemy,
  EnemyPhase,
  DamageResult,
  ActiveBuff,
  Skill,
  SkillLevel,
  TerrainType,
} from '../types';

// 装甲タイプ相性表
const ARMOR_MULTIPLIERS: Record<AttackType, Record<ArmorType, number>> = {
  explosive: {
    light: 2.0,
    heavy: 0.5,
    special: 0.5,
    elastic: 0.5,
    structure: 0.5,
  },
  piercing: {
    light: 0.5,
    heavy: 2.0,
    special: 1.0,
    elastic: 1.0,
    structure: 0.5,
  },
  mystic: {
    light: 1.0,
    heavy: 0.5,
    special: 2.0,
    elastic: 1.0,
    structure: 0.5,
  },
  sonic: {
    light: 1.0,
    heavy: 0.5,
    special: 1.5,
    elastic: 2.0,
    structure: 0.5,
  },
  normal: {
    light: 1.0,
    heavy: 1.0,
    special: 1.0,
    elastic: 1.0,
    structure: 0.5,
  },
};

// 地形適性倍率
const TERRAIN_MULTIPLIERS: Record<TerrainRank, number> = {
  SS: 1.3,
  S: 1.2,
  A: 1.1,
  B: 1.0,
  C: 0.9,
  D: 0.8,
};

/**
 * 防御倍率を計算
 * 防御倍率 = (1666.666 + 防御力) / 1666.666
 */
export function calculateDefenseMultiplier(defense: number): number {
  const BASE_DEFENSE_CONSTANT = 1666.666;
  return (BASE_DEFENSE_CONSTANT + defense) / BASE_DEFENSE_CONSTANT;
}

/**
 * 防御力低下適用後の防御力を計算
 * 上限80%
 */
export function applyDefenseDebuff(
  baseDefense: number,
  debuffPercent: number
): number {
  const effectiveDebuff = Math.min(debuffPercent, 80);
  return baseDefense * (1 - effectiveDebuff / 100);
}

/**
 * 装甲タイプ相性倍率を取得
 */
export function getArmorMultiplier(
  attackType: AttackType,
  armorType: ArmorType
): number {
  return ARMOR_MULTIPLIERS[attackType][armorType];
}

/**
 * 地形適性倍率を取得
 */
export function getTerrainMultiplier(
  character: Character,
  terrain: TerrainType
): number {
  const rank = character.terrain[terrain];
  return TERRAIN_MULTIPLIERS[rank];
}

/**
 * 会心率を計算
 * 会心率 = (会心値 - 会心抵抗値) / (会心値 - 会心抵抗値 + 650)
 * 上限80%
 */
export function calculateCritRate(
  critValue: number,
  critResist: number
): number {
  const effectiveCrit = critValue - critResist;
  if (effectiveCrit <= 0) return 0;
  const rate = effectiveCrit / (effectiveCrit + 650);
  return Math.min(rate, 0.8); // 80%上限
}

/**
 * 会心ダメージ倍率を計算
 * 会心ダメージ倍率 = 会心ダメージ率 × (1 + 会心ダメージ率%バフ) - 会心ダメージ抵抗率
 */
export function calculateCritDamageMultiplier(
  baseCritDamage: number, // % (例: 200)
  critDamageBuffPercent: number, // % (例: 50)
  critDamageResist: number // % (例: 50)
): number {
  const buffedCritDamage =
    (baseCritDamage / 100) * (1 + critDamageBuffPercent / 100);
  return buffedCritDamage - critDamageResist / 100;
}

/**
 * レベル補正を計算
 * 攻撃側レベル < 敵レベル の場合、レベル差1につき -2%、最大60%減少
 */
export function calculateLevelCorrection(
  attackerLevel: number,
  enemyLevel: number
): number {
  if (attackerLevel >= enemyLevel) return 1.0;
  const levelDiff = enemyLevel - attackerLevel;
  const penalty = Math.min(levelDiff * 0.02, 0.6);
  return 1 - penalty;
}

/**
 * 安定値から乱数範囲を計算
 * 最小倍率 = (安定値 / (安定値 + 1000)) + 0.2
 * 最大倍率 = 1.0
 */
export function calculateStabilityRange(stability: number): {
  min: number;
  max: number;
} {
  const minMultiplier = stability / (stability + 1000) + 0.2;
  return {
    min: Math.min(minMultiplier, 1.0),
    max: 1.0,
  };
}

/**
 * バフを適用した攻撃力を計算
 */
export function applyAttackBuffs(
  baseAttack: number,
  buffs: ActiveBuff[]
): number {
  // %バフと固定値バフを分離
  const percentBuffs = buffs.filter((b) => b.type === 'attackPercent');
  const flatBuffs = buffs.filter((b) => b.type === 'attackFlat');

  // 同じ枠のバフは重複しない（最大値を採用）
  const percentBySlot = new Map<string, number>();
  for (const buff of percentBuffs) {
    const key = `${buff.slot}-${buff.sourceCharacterId}`;
    const current = percentBySlot.get(key) || 0;
    percentBySlot.set(key, Math.max(current, buff.value));
  }

  // %バフは乗算
  let percentMultiplier = 1;
  for (const value of percentBySlot.values()) {
    percentMultiplier *= 1 + value / 100;
  }

  // 固定値バフは加算
  const flatBonus = flatBuffs.reduce((sum, b) => sum + b.value, 0);

  return baseAttack * percentMultiplier + flatBonus;
}

/**
 * 与ダメージ倍率を計算
 */
export function calculateDamageDealtMultiplier(buffs: ActiveBuff[]): number {
  const damageDealtBuffs = buffs.filter(
    (b) => b.type === 'damageDealtPercent'
  );

  // 与ダメージバフは乗算
  let multiplier = 1;
  for (const buff of damageDealtBuffs) {
    multiplier *= 1 + buff.value / 100;
  }

  return multiplier;
}

/**
 * 被ダメージ倍率を計算（敵へのデバフ）
 */
export function calculateDamageTakenMultiplier(buffs: ActiveBuff[]): number {
  const damageTakenBuffs = buffs.filter(
    (b) => b.type === 'damageTakenPercent'
  );

  // 被ダメージ増加は乗算
  let multiplier = 1;
  for (const buff of damageTakenBuffs) {
    multiplier *= 1 + buff.value / 100;
  }

  return multiplier;
}

/**
 * 防御力低下の合計を計算
 */
export function calculateDefenseDebuffTotal(buffs: ActiveBuff[]): number {
  const defenseDownBuffs = buffs.filter(
    (b) => b.type === 'defenseDownPercent'
  );

  // 防御低下は加算（上限80%）
  const total = defenseDownBuffs.reduce((sum, b) => sum + b.value, 0);
  return Math.min(total, 80);
}

/**
 * 会心ダメージ率バフの合計を計算
 */
export function calculateCritDamageBuffTotal(buffs: ActiveBuff[]): number {
  const critDamageBuffs = buffs.filter(
    (b) => b.type === 'critDamagePercent'
  );

  // 同じ枠のバフは重複しない
  const bySlot = new Map<string, number>();
  for (const buff of critDamageBuffs) {
    const key = `${buff.slot}-${buff.sourceCharacterId}`;
    const current = bySlot.get(key) || 0;
    bySlot.set(key, Math.max(current, buff.value));
  }

  // 異なる枠は乗算...ではなく加算として扱う（ゲームの仕様による）
  let total = 0;
  for (const value of bySlot.values()) {
    total += value;
  }

  return total;
}

/**
 * スキルレベルのデータを取得
 */
export function getSkillLevelData(
  skill: Skill,
  level: number
): SkillLevel | undefined {
  return skill.levels.find((l) => l.level === level);
}

/**
 * ダメージを計算
 */
export function calculateDamage(
  character: Character,
  skill: Skill,
  skillLevel: number,
  enemy: Enemy,
  phase: EnemyPhase,
  activeBuffs: ActiveBuff[] = [],
  attackerLevel: number = 90
): DamageResult {
  const skillData = getSkillLevelData(skill, skillLevel);
  if (!skillData) {
    throw new Error(`Skill level ${skillLevel} not found`);
  }

  const baseAttack = character.baseStats.attack;
  const attackAfterBuffs = applyAttackBuffs(baseAttack, activeBuffs);

  // 防御力低下を適用
  const defenseDebuff = calculateDefenseDebuffTotal(activeBuffs);
  const effectiveDefense = applyDefenseDebuff(phase.defense, defenseDebuff);
  const defenseMultiplier = calculateDefenseMultiplier(effectiveDefense);

  // 各種倍率
  const armorMultiplier = getArmorMultiplier(
    character.attackType,
    enemy.armorType
  );
  const terrainMultiplier = getTerrainMultiplier(character, enemy.terrain);
  const levelCorrection = calculateLevelCorrection(attackerLevel, phase.level);

  // 会心関連
  const critRate = calculateCritRate(
    character.baseStats.criticalValue,
    phase.critResist
  );
  const critDamageBuffTotal = calculateCritDamageBuffTotal(activeBuffs);
  const critDamageMultiplier = calculateCritDamageMultiplier(
    character.baseStats.criticalDamage,
    critDamageBuffTotal,
    phase.critDamageResist
  );

  // 与ダメ・被ダメ倍率
  const damageDealtMultiplier = calculateDamageDealtMultiplier(activeBuffs);
  const damageTakenMultiplier = calculateDamageTakenMultiplier(activeBuffs);

  // 敵のダウン時などの被ダメ増加
  const enemyDamageMultiplier = phase.damageMultiplier || 1;

  // スキル倍率とヒット数
  const skillMultiplier = skillData.damageMultiplier || 1;
  const hitCount = skillData.hitCount || 1;

  // 安定値による乱数範囲
  const stabilityRange = calculateStabilityRange(
    character.baseStats.stability
  );

  // 基本ダメージ計算（会心なし、乱数最小/最大）
  const calculateBaseDamage = (randomMultiplier: number, isCrit: boolean) => {
    let damage =
      (attackAfterBuffs * skillMultiplier * randomMultiplier * armorMultiplier *
        terrainMultiplier * levelCorrection) /
      defenseMultiplier;

    // 会心ダメージ
    if (isCrit) {
      damage *= critDamageMultiplier;
    }

    // 与ダメ・被ダメ倍率
    damage *= damageDealtMultiplier * damageTakenMultiplier * enemyDamageMultiplier;

    // ヒット数
    damage *= hitCount;

    // ダメージ上限（1ヒットあたり4,000,000）
    const damagePerHit = Math.min(damage / hitCount, 4000000);
    return Math.floor(damagePerHit * hitCount);
  };

  const minDamageNoCrit = calculateBaseDamage(stabilityRange.min, false);
  const maxDamageNoCrit = calculateBaseDamage(stabilityRange.max, false);
  const minDamageCrit = calculateBaseDamage(stabilityRange.min, true);
  const maxDamageCrit = calculateBaseDamage(stabilityRange.max, true);

  // 期待値計算
  const avgNoCrit = (minDamageNoCrit + maxDamageNoCrit) / 2;
  const avgCrit = (minDamageCrit + maxDamageCrit) / 2;
  const expectedDamage = avgNoCrit * (1 - critRate) + avgCrit * critRate;

  return {
    minDamage: minDamageNoCrit,
    maxDamage: maxDamageCrit,
    averageDamage: (minDamageNoCrit + maxDamageCrit) / 2,
    critRate,
    expectedDamage: Math.floor(expectedDamage),
    breakdown: {
      baseAttack,
      attackAfterBuffs,
      defenseMultiplier,
      armorMultiplier,
      terrainMultiplier,
      critDamageMultiplier,
      damageDealtMultiplier,
      damageTakenMultiplier,
      skillMultiplier,
      hitCount,
      stabilityRange,
    },
  };
}
