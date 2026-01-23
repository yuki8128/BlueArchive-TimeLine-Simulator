// 攻撃タイプ
export type AttackType = 'explosive' | 'piercing' | 'mystic' | 'sonic' | 'normal';

// 装甲タイプ
export type ArmorType = 'light' | 'heavy' | 'special' | 'elastic' | 'structure';

// 地形タイプ
export type TerrainType = 'urban' | 'outdoor' | 'indoor';

// 地形適性ランク
export type TerrainRank = 'SS' | 'S' | 'A' | 'B' | 'C' | 'D';

// ロール
export type Role = 'striker' | 'special';

// ポジション
export type Position = 'front' | 'middle' | 'back';

// スキルタイプ
export type SkillType = 'ex' | 'normal' | 'passive' | 'sub';

// バフタイプ
export type BuffType =
  | 'attackPercent'
  | 'attackFlat'
  | 'defensePercent'
  | 'defenseFlat'
  | 'critDamagePercent'
  | 'critValueFlat'
  | 'damageDealtPercent'
  | 'damageTakenPercent'
  | 'defenseDownPercent';

// バフ枠（重複判定用）
export type BuffSlot = 'ex' | 'normal' | 'passive' | 'sub';

// バフ効果
export interface BuffEffect {
  type: BuffType;
  value: number;
  slot: BuffSlot;
  duration: number; // 秒
  sourceCharacterId: string;
  sourceSkillId: string;
}

// スキルレベルデータ
export interface SkillLevel {
  level: number;
  damageMultiplier?: number;
  buffEffects?: Omit<BuffEffect, 'slot' | 'sourceCharacterId' | 'sourceSkillId'>[];
  duration?: number;
  hitCount?: number;
}

// スキルデータ
export interface Skill {
  id: string;
  name: string;
  description: string;
  type: SkillType;
  cost?: number; // EXスキルのみ
  cooldown?: number;
  levels: SkillLevel[];
}

// 基本ステータス
export interface BaseStats {
  attack: number;
  defense: number;
  hp: number;
  criticalValue: number;
  criticalDamage: number; // % (例: 200 = 200%)
  stability: number;
  accuracy: number;
  evasion: number;
  costRecovery: number;
}

// キャラクターデータ
export interface Character {
  id: string;
  name: string;
  nameEn?: string;
  rarity: number;
  attackType: AttackType;
  role: Role;
  position: Position;
  baseStats: BaseStats;
  terrain: {
    urban: TerrainRank;
    outdoor: TerrainRank;
    indoor: TerrainRank;
  };
  skills: {
    ex: Skill;
    normal: Skill;
    passive: Skill;
    sub: Skill;
  };
}

// 敵のフェーズデータ
export interface EnemyPhase {
  name?: string;
  hp: number;
  defense: number;
  critResist: number; // 会心抵抗値
  critDamageResist: number; // 会心ダメージ抵抗率 (例: 50 = 50%)
  level: number;
  damageMultiplier?: number; // ダウン時などの被ダメ増加
}

// 敵ギミック
export interface Gimmick {
  id: string;
  name: string;
  description: string;
  effect: {
    type: 'damageMultiplier' | 'stabilityDebuff' | 'other';
    value?: number;
  };
}

// 敵データ
export interface Enemy {
  id: string;
  name: string;
  armorType: ArmorType;
  terrain: TerrainType;
  difficulty: string;
  phases: EnemyPhase[];
  gimmicks?: Gimmick[];
}

// タイムラインアクション
export interface TimelineAction {
  id: string;
  time: number; // 秒
  characterId: string;
  skillType: SkillType;
  skillLevel: number;
}

// ダメージ計算結果
export interface DamageResult {
  minDamage: number;
  maxDamage: number;
  averageDamage: number;
  critRate: number;
  expectedDamage: number; // 会心期待値込み
  breakdown: {
    baseAttack: number;
    attackAfterBuffs: number;
    defenseMultiplier: number;
    armorMultiplier: number;
    terrainMultiplier: number;
    critDamageMultiplier: number;
    damageDealtMultiplier: number;
    damageTakenMultiplier: number;
    skillMultiplier: number;
    hitCount: number;
    stabilityRange: { min: number; max: number };
  };
}

// 編成データ
export interface Formation {
  strikers: (CharacterInFormation | null)[];
  specials: (CharacterInFormation | null)[];
}

// 編成中のキャラクター
export interface CharacterInFormation {
  character: Character;
  skillLevels: {
    ex: number;
    normal: number;
    passive: number;
    sub: number;
  };
  bond?: number; // 絆レベル
  equipment?: Equipment;
}

// 装備
export interface Equipment {
  tier: number; // 装備ティア (1-8)
  level: number;
  statBonuses: Partial<BaseStats>;
}

// シミュレーション状態
export interface SimulationState {
  currentTime: number;
  currentCost: number;
  maxCost: number;
  costRecoveryRate: number;
  activeBuffs: ActiveBuff[];
  timeline: TimelineAction[];
  damageLog: DamageLogEntry[];
  totalDamage: number;
}

// アクティブバフ
export interface ActiveBuff extends BuffEffect {
  startTime: number;
  endTime: number;
}

// ダメージログ
export interface DamageLogEntry {
  time: number;
  characterId: string;
  skillType: SkillType;
  damage: DamageResult;
  buffsActive: ActiveBuff[];
}
