import { CharacterInFormation, Formation, SkillType, BuffTarget } from '../types';
import { getSkillLevelData } from './damage';

/**
 * バフの重複ルール:
 * 1. 異なる系統（攻撃バフ + 防御バフ）→ 重複OK
 * 2. 同系統 + 異なるスキル種類（EX + パッシブ）→ 重複OK
 * 3. 同系統 + 同スキル種類（サブ + サブ）→ 重複NG（後から上書き、最大値を採用）
 * 4. 自己バフ vs 他者バフ → 別枠として重複OK
 */

interface BuffEntry {
  type: string;
  slot: SkillType;
  target: BuffTarget;
  value: number;
  sourceCharacterId: string;
}

/**
 * バフの重複を考慮して有効なバフ値を計算
 * 同じスキルスロット + 同じターゲットタイプのバフは重複しない（最大値を採用）
 */
function calculateEffectiveBuffs(buffs: BuffEntry[]): number {
  // スロット + ターゲットタイプ別にグループ化
  const buffGroups = new Map<string, BuffEntry[]>();

  for (const buff of buffs) {
    // 自己バフ(self)と他者バフ(ally/allAllies)を区別
    const targetType = buff.target === 'self' ? 'self' : 'ally';
    const key = `${buff.slot}_${targetType}`;

    if (!buffGroups.has(key)) {
      buffGroups.set(key, []);
    }
    buffGroups.get(key)!.push(buff);
  }

  // 各グループから最大値を取得して合計
  let totalBonus = 0;
  for (const [, groupBuffs] of buffGroups) {
    // 同グループ内では最大値のみ適用
    const maxBuff = Math.max(...groupBuffs.map(b => b.value));
    totalBonus += maxBuff;
  }

  return totalBonus;
}

/**
 * コスト回復速度を計算
 * コスト回復速度 = (全員のコスト回復力の合計) × (1 + コスト回復%バフ合計/100) / 10000 [コスト/秒]
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

  // パッシブ・サブスキルからのコスト回復%バフを収集
  const costRecoveryBuffs: BuffEntry[] = [];

  for (const char of allCharacters) {
    // パッシブスキルのコスト回復バフ
    const passiveSkill = char.character.skills.passive;
    if (passiveSkill) {
      const skillLevel = char.skillLevels.passive;
      const levelData = getSkillLevelData(passiveSkill, skillLevel);
      if (levelData?.buffEffects) {
        for (const effect of levelData.buffEffects) {
          if (effect.type === 'costRecoveryPercent') {
            costRecoveryBuffs.push({
              type: 'costRecoveryPercent',
              slot: 'passive',
              target: effect.target ?? 'self',
              value: effect.value,
              sourceCharacterId: char.character.id,
            });
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
            costRecoveryBuffs.push({
              type: 'costRecoveryPercent',
              slot: 'sub',
              target: effect.target ?? 'self',
              value: effect.value,
              sourceCharacterId: char.character.id,
            });
          }
        }
      }
    }
  }

  // バフの重複ルールを適用して有効な%バフを計算
  const costRecoveryPercentBonus = calculateEffectiveBuffs(costRecoveryBuffs);

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
  buffDetails: { slot: string; target: string; value: number; source: string }[];
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

  // パッシブ・サブスキルからのコスト回復%バフを収集
  const costRecoveryBuffs: BuffEntry[] = [];

  for (const char of allCharacters) {
    // パッシブスキルのコスト回復バフ
    const passiveSkill = char.character.skills.passive;
    if (passiveSkill) {
      const skillLevel = char.skillLevels.passive;
      const levelData = getSkillLevelData(passiveSkill, skillLevel);
      if (levelData?.buffEffects) {
        for (const effect of levelData.buffEffects) {
          if (effect.type === 'costRecoveryPercent') {
            costRecoveryBuffs.push({
              type: 'costRecoveryPercent',
              slot: 'passive',
              target: effect.target ?? 'self',
              value: effect.value,
              sourceCharacterId: char.character.id,
            });
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
            costRecoveryBuffs.push({
              type: 'costRecoveryPercent',
              slot: 'sub',
              target: effect.target ?? 'self',
              value: effect.value,
              sourceCharacterId: char.character.id,
            });
          }
        }
      }
    }
  }

  // バフの重複ルールを適用して有効な%バフを計算
  const costRecoveryPercentBonus = calculateEffectiveBuffs(costRecoveryBuffs);

  // バフ詳細（どのバフが有効か）
  const buffDetails = costRecoveryBuffs.map(b => ({
    slot: b.slot,
    target: b.target,
    value: b.value,
    source: b.sourceCharacterId,
  }));

  const totalCostRecovery = baseCostRecovery * (1 + costRecoveryPercentBonus / 100);
  const costRecoveryRate = totalCostRecovery / 10000;

  return {
    baseCostRecovery,
    costRecoveryPercentBonus,
    buffDetails,
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
