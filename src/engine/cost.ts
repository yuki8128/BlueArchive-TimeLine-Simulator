import { CharacterInFormation, Formation } from '../types';
import { getSkillLevelData } from './damage';

/**
 * コスト回復速度を計算
 * コスト回復速度 = (全員のコスト回復力の合計) × (1 + コスト回復%バフ合計) / 10000 [コスト/秒]
 */
export function calculateCostRecoveryRate(formation: Formation): number {
  const allCharacters: CharacterInFormation[] = [
    ...formation.strikers.filter((c): c is CharacterInFormation => c !== null),
    ...formation.specials.filter((c): c is CharacterInFormation => c !== null),
  ];

  // 基本コスト回復力の合計
  const baseCostRecovery = allCharacters.reduce((sum, c) => {
    const baseValue = c.character.baseStats.costRecovery;
    const override = c.statOverrides?.costRecovery ?? 0;
    return sum + baseValue + override;
  }, 0);

  // パッシブ・サブスキルからのコスト回復%バフを計算
  let costRecoveryPercentBonus = 0;
  for (const char of allCharacters) {
    // パッシブスキルのコスト回復バフ
    const passiveSkill = char.character.skills.passive;
    if (passiveSkill) {
      const skillLevel = char.skillLevels.passive;
      const levelData = getSkillLevelData(passiveSkill, skillLevel);
      if (levelData?.buffEffects) {
        for (const effect of levelData.buffEffects) {
          if (effect.type === 'costRecoveryPercent') {
            costRecoveryPercentBonus += effect.value;
          }
        }
      }
    }

    // サブスキルのコスト回復バフ
    const subSkill = char.character.skills.sub;
    if (subSkill) {
      const skillLevel = char.skillLevels.sub;
      const levelData = getSkillLevelData(subSkill, skillLevel);
      if (levelData?.buffEffects) {
        for (const effect of levelData.buffEffects) {
          if (effect.type === 'costRecoveryPercent') {
            costRecoveryPercentBonus += effect.value;
          }
        }
      }
    }
  }

  // 最終コスト回復速度 = 基本値 × (1 + %バフ/100) / 10000
  const totalCostRecovery = baseCostRecovery * (1 + costRecoveryPercentBonus / 100);

  return totalCostRecovery / 10000;
}

/**
 * コスト回復の内訳を取得（UI表示用）
 */
export function getCostRecoveryBreakdown(formation: Formation): {
  baseCostRecovery: number;
  costRecoveryPercentBonus: number;
  totalCostRecovery: number;
  costRecoveryRate: number;
} {
  const allCharacters: CharacterInFormation[] = [
    ...formation.strikers.filter((c): c is CharacterInFormation => c !== null),
    ...formation.specials.filter((c): c is CharacterInFormation => c !== null),
  ];

  // 基本コスト回復力の合計
  const baseCostRecovery = allCharacters.reduce((sum, c) => {
    const baseValue = c.character.baseStats.costRecovery;
    const override = c.statOverrides?.costRecovery ?? 0;
    return sum + baseValue + override;
  }, 0);

  // パッシブ・サブスキルからのコスト回復%バフを計算
  let costRecoveryPercentBonus = 0;
  for (const char of allCharacters) {
    // パッシブスキルのコスト回復バフ
    const passiveSkill = char.character.skills.passive;
    if (passiveSkill) {
      const skillLevel = char.skillLevels.passive;
      const levelData = getSkillLevelData(passiveSkill, skillLevel);
      if (levelData?.buffEffects) {
        for (const effect of levelData.buffEffects) {
          if (effect.type === 'costRecoveryPercent') {
            costRecoveryPercentBonus += effect.value;
          }
        }
      }
    }

    // サブスキルのコスト回復バフ
    const subSkill = char.character.skills.sub;
    if (subSkill) {
      const skillLevel = char.skillLevels.sub;
      const levelData = getSkillLevelData(subSkill, skillLevel);
      if (levelData?.buffEffects) {
        for (const effect of levelData.buffEffects) {
          if (effect.type === 'costRecoveryPercent') {
            costRecoveryPercentBonus += effect.value;
          }
        }
      }
    }
  }

  const totalCostRecovery = baseCostRecovery * (1 + costRecoveryPercentBonus / 100);
  const costRecoveryRate = totalCostRecovery / 10000;

  return {
    baseCostRecovery,
    costRecoveryPercentBonus,
    totalCostRecovery,
    costRecoveryRate,
  };
}

/**
 * 最大コストを計算
 * 基本10 + スペシャル枠1人につき0.5
 */
export function calculateMaxCost(formation: Formation): number {
  const specialCount = formation.specials.filter((c) => c !== null).length;
  return 10 + specialCount * 0.5;
}

/**
 * 特定の時間におけるコストを計算
 */
export function calculateCostAtTime(
  startCost: number,
  maxCost: number,
  costRecoveryRate: number,
  elapsedTime: number,
  usedCosts: { time: number; cost: number }[] = []
): number {
  // 時間順にソート
  const sortedCosts = [...usedCosts].sort((a, b) => a.time - b.time);

  let currentCost = startCost;
  let lastTime = 0;

  for (const usage of sortedCosts) {
    if (usage.time > elapsedTime) break;

    // 前回からの経過時間で回復
    const recovered = (usage.time - lastTime) * costRecoveryRate;
    currentCost = Math.min(currentCost + recovered, maxCost);

    // コスト消費
    currentCost -= usage.cost;
    lastTime = usage.time;
  }

  // 最後のイベントから現在までの回復
  const finalRecovered = (elapsedTime - lastTime) * costRecoveryRate;
  currentCost = Math.min(currentCost + finalRecovered, maxCost);

  return Math.max(currentCost, 0);
}

/**
 * 次にスキルが使用可能になる時間を計算
 */
export function calculateNextSkillAvailableTime(
  currentCost: number,
  _maxCost: number,
  costRecoveryRate: number,
  requiredCost: number,
  currentTime: number
): number {
  if (currentCost >= requiredCost) {
    return currentTime;
  }

  const costNeeded = requiredCost - currentCost;
  const timeNeeded = costNeeded / costRecoveryRate;

  return currentTime + timeNeeded;
}

/**
 * コスト推移を生成（グラフ用）
 */
export function generateCostTimeline(
  maxCost: number,
  costRecoveryRate: number,
  usedCosts: { time: number; cost: number }[],
  duration: number,
  startCost: number = maxCost,
  interval: number = 0.5
): { time: number; cost: number }[] {
  const timeline: { time: number; cost: number }[] = [];

  for (let t = 0; t <= duration; t += interval) {
    const cost = calculateCostAtTime(
      startCost,
      maxCost,
      costRecoveryRate,
      t,
      usedCosts
    );
    timeline.push({ time: t, cost });
  }

  return timeline;
}

/**
 * スキル使用がコスト的に可能かチェック
 */
export function canUseSkill(
  currentCost: number,
  skillCost: number
): boolean {
  return currentCost >= skillCost;
}
