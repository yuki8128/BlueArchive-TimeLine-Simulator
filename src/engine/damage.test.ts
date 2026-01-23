/**
 * ダメージ計算のテストユーティリティ
 *
 * 検証例（計画書より）:
 * - 攻撃力10000、防御力1000の場合:
 *   - 防御倍率 = (1666.666 + 1000) / 1666.666 ≒ 1.6
 *   - 基礎ダメージ = 10000 / 1.6 ≒ 6250
 * - 地形適性S(1.2x)、装甲有利(2.0x)の場合:
 *   - 最終ダメージ ≒ 6250 × 1.2 × 2.0 = 15000
 */

import {
  calculateDefenseMultiplier,
  calculateCritRate,
  calculateStabilityRange,
  getArmorMultiplier,
} from './damage';

// テスト関数
export function runDamageTests(): void {
  console.log('=== ダメージ計算テスト ===\n');

  // 防御倍率テスト
  console.log('1. 防御倍率テスト');
  const defenseMultiplier1000 = calculateDefenseMultiplier(1000);
  console.log(`  防御力1000 → 防御倍率: ${defenseMultiplier1000.toFixed(4)}`);
  console.log(`  期待値: 1.6, 誤差: ${Math.abs(defenseMultiplier1000 - 1.6).toFixed(6)}`);
  console.log(`  被ダメ軽減率: ${((1 - 1 / defenseMultiplier1000) * 100).toFixed(1)}%`);

  const defenseMultiplier4000 = calculateDefenseMultiplier(4000);
  console.log(`  防御力4000 → 防御倍率: ${defenseMultiplier4000.toFixed(4)}`);
  console.log(`  被ダメ軽減率: ${((1 - 1 / defenseMultiplier4000) * 100).toFixed(1)}%`);
  console.log();

  // 会心率テスト
  console.log('2. 会心率テスト');
  const critRate800 = calculateCritRate(800, 100);
  console.log(`  会心値800, 会心抵抗100 → 会心率: ${(critRate800 * 100).toFixed(1)}%`);
  console.log(`  期待値: 51.8%, 誤差: ${Math.abs(critRate800 * 100 - 51.85).toFixed(2)}%`);

  const critRateHigh = calculateCritRate(2000, 100);
  console.log(`  会心値2000, 会心抵抗100 → 会心率: ${(critRateHigh * 100).toFixed(1)}% (上限80%適用)`);
  console.log();

  // 安定値テスト
  console.log('3. 安定値テスト');
  const stability1000 = calculateStabilityRange(1000);
  console.log(`  安定値1000 → 範囲: ${(stability1000.min * 100).toFixed(1)}% ~ ${(stability1000.max * 100).toFixed(1)}%`);
  console.log(`  期待値: 70% ~ 100%`);

  const stability1376 = calculateStabilityRange(1376);
  console.log(`  安定値1376（ミカ） → 範囲: ${(stability1376.min * 100).toFixed(1)}% ~ ${(stability1376.max * 100).toFixed(1)}%`);

  const stability2000 = calculateStabilityRange(2000);
  console.log(`  安定値2000 → 範囲: ${(stability2000.min * 100).toFixed(1)}% ~ ${(stability2000.max * 100).toFixed(1)}%`);
  console.log();

  // 装甲相性テスト
  console.log('4. 装甲タイプ相性テスト');
  console.log(`  神秘 vs 特殊装甲: ×${getArmorMultiplier('mystic', 'special')}`);
  console.log(`  神秘 vs 重装甲: ×${getArmorMultiplier('mystic', 'heavy')}`);
  console.log(`  爆発 vs 軽装備: ×${getArmorMultiplier('explosive', 'light')}`);
  console.log(`  貫通 vs 重装甲: ×${getArmorMultiplier('piercing', 'heavy')}`);
  console.log();

  // 総合計算例
  console.log('5. 総合計算例');
  const attack = 10000;
  const defense = 1000;
  const defMultiplier = calculateDefenseMultiplier(defense);
  const baseDamage = attack / defMultiplier;
  console.log(`  攻撃力${attack}, 防御力${defense}`);
  console.log(`  基礎ダメージ: ${baseDamage.toFixed(0)}`);

  const terrainMultiplier = 1.2; // S rank
  const armorMultiplier = 2.0; // 有利
  const finalDamage = baseDamage * terrainMultiplier * armorMultiplier;
  console.log(`  地形S(×1.2) + 装甲有利(×2.0) 後: ${finalDamage.toFixed(0)}`);
  console.log(`  期待値: 15000`);
  console.log();

  console.log('=== テスト完了 ===');
}

// 直接実行用
if (typeof window !== 'undefined') {
  (window as unknown as { runDamageTests: typeof runDamageTests }).runDamageTests = runDamageTests;
}
