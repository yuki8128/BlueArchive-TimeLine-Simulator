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

// バフタイプ（SchaleDB準拠）
export type BuffType =
  // 攻撃力
  | 'attackPercent'      // 攻撃力%増加
  | 'attackFlat'         // 攻撃力固定値増加
  // 防御力
  | 'defensePercent'     // 防御力%増加
  | 'defenseFlat'        // 防御力固定値増加
  | 'defenseDownPercent' // 防御力%減少（デバフ）
  | 'defenseDownFlat'    // 防御力固定値減少（デバフ）
  // 会心
  | 'critDamagePercent'  // 会心ダメージ率%増加
  | 'critValueFlat'      // 会心値固定値増加
  | 'critRateFlat'       // 会心率固定値増加（%）
  // ダメージ倍率
  | 'damageDealtPercent' // 与ダメージ%増加
  | 'damageTakenPercent' // 被ダメージ%増加（敵へのデバフ）
  // HP関連
  | 'hpPercent'          // 最大HP%増加
  | 'hpFlat'             // 最大HP固定値増加
  // 命中・回避
  | 'accuracyFlat'       // 命中値増加
  | 'evasionFlat'        // 回避値増加
  // 安定値
  | 'stabilityFlat'      // 安定値増加
  // コスト回復
  | 'costRecoveryFlat'   // コスト回復力増加
  | 'costRecoveryPercent'// コスト回復力%増加
  // 回復力
  | 'healPowerPercent'   // 回復力%増加
  // CC関連
  | 'ccStrengthFlat'     // CC強化力
  | 'ccResistFlat';      // CC抵抗力

// バフ対象
export type BuffTarget = 'self' | 'ally' | 'allAllies' | 'enemy' | 'allEnemies';

// バフ枠（重複判定用）
export type BuffSlot = 'ex' | 'normal' | 'passive' | 'sub';

// バフ効果
export interface BuffEffect {
  type: BuffType;
  value: number;
  slot: BuffSlot;
  duration: number; // 秒（999 = 永続）
  target: BuffTarget; // バフ対象
  sourceCharacterId: string;
  sourceSkillId: string;
}

// スキル効果（データ定義用）
export interface SkillBuffEffect {
  type: BuffType;
  value: number;
  duration: number; // 秒（999 = 永続）
  target?: BuffTarget; // デフォルト: self
}

// スキル発動タイミング
export type ActivationTiming = 'battleStart' | 'periodic' | 'manual';

// スキルレベルデータ
export interface SkillLevel {
  level: number;
  // ダメージ関連
  damageMultiplier?: number;  // スキル倍率（%/100）
  hitCount?: number;          // ヒット数
  // バフ/デバフ効果
  buffEffects?: SkillBuffEffect[];
  // 回復効果
  healMultiplier?: number;    // 回復倍率（攻撃力比）
  healFlat?: number;          // 固定回復値
  // コスト関連
  costReturn?: number;        // コスト返却量
}

// スキルデータ
export interface Skill {
  id: string;
  name: string;
  description: string;
  type: SkillType;
  cost?: number; // EXスキルのみ
  cooldown?: number;
  activationTiming?: ActivationTiming; // 発動タイミング（デフォルト: battleStart）
  activationInterval?: number; // 周期発動の間隔（秒）
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
  // ステータス補正（装備・絆等の合計）
  statOverrides?: Partial<BaseStats>;
  // スキル効果の手動調整
  skillOverrides?: {
    ex?: Partial<SkillLevel>;
    normal?: Partial<SkillLevel>;
    passive?: Partial<SkillLevel>;
    sub?: Partial<SkillLevel>;
  };
  bond?: number; // 絆レベル
  equipment?: Equipment;
  // キャラクターレベル
  level?: number;
  // 星レベル（固有武器）
  starLevel?: number;
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
