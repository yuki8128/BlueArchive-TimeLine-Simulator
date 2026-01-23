/**
 * 数値をフォーマット（3桁区切り）
 */
export function formatNumber(num: number): string {
  return Math.floor(num).toLocaleString();
}

/**
 * パーセント表示
 */
export function formatPercent(num: number, decimals: number = 1): string {
  return `${(num * 100).toFixed(decimals)}%`;
}

/**
 * 時間を分:秒形式でフォーマット
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * 攻撃タイプの日本語名
 */
export const attackTypeLabels: Record<string, string> = {
  explosive: '爆発',
  piercing: '貫通',
  mystic: '神秘',
  sonic: '振動',
  normal: 'ノーマル',
};

/**
 * 装甲タイプの日本語名
 */
export const armorTypeLabels: Record<string, string> = {
  light: '軽装備',
  heavy: '重装甲',
  special: '特殊装甲',
  elastic: '弾力装甲',
  structure: '構造物',
};

/**
 * 地形の日本語名
 */
export const terrainLabels: Record<string, string> = {
  urban: '市街地',
  outdoor: '屋外',
  indoor: '屋内',
};

/**
 * スキルタイプの日本語名
 */
export const skillTypeLabels: Record<string, string> = {
  ex: 'EXスキル',
  normal: 'ノーマルスキル',
  passive: 'パッシブスキル',
  sub: 'サブスキル',
};
