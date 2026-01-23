import { CharacterInFormation, Formation } from '../types';

/**
 * コスト回復速度を計算
 * コスト回復速度 = 全員のコスト回復力の合計 / 10000 [コスト/秒]
 */
export function calculateCostRecoveryRate(formation: Formation): number {
  const allCharacters: CharacterInFormation[] = [
    ...formation.strikers.filter((c): c is CharacterInFormation => c !== null),
    ...formation.specials.filter((c): c is CharacterInFormation => c !== null),
  ];

  const totalCostRecovery = allCharacters.reduce(
    (sum, c) => sum + c.character.baseStats.costRecovery,
    0
  );

  return totalCostRecovery / 10000;
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
