/**
 * SchaleDBからキャラクターデータを取得し、プロジェクト形式に変換するスクリプト
 *
 * 実行方法: npx tsx scripts/fetch-characters.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// =============================================================================
// SchaleDB型定義
// =============================================================================

interface SchaleDBStudent {
  Id: number;
  IsReleased: boolean[];
  PathName: string;
  DevName: string;
  Name: string;
  StarGrade: number;
  SquadType: 'Main' | 'Support';
  TacticRole: string;
  Position: 'Front' | 'Middle' | 'Back';
  BulletType: string;
  ArmorType: string;
  StreetBattleAdaptation: number;
  OutdoorBattleAdaptation: number;
  IndoorBattleAdaptation: number;
  AttackPower100: number;
  DefensePower100: number;
  MaxHP100: number;
  CriticalPoint: number;
  CriticalDamageRate: number;
  StabilityPoint: number;
  AccuracyPoint: number;
  DodgePoint: number;
  RegenCost: number;
  Skills: {
    Ex?: SchaleDBSkill;
    Public?: SchaleDBSkill;
    Passive?: SchaleDBSkill;
    ExtraPassive?: SchaleDBSkill;
    Normal?: SchaleDBSkill;
  };
}

interface SchaleDBSkill {
  Name?: string;
  Desc?: string;
  Parameters?: string[][];
  Cost?: number[];
  Effects?: SchaleDBEffect[];
}

interface SchaleDBEffect {
  Type: 'Damage' | 'Buff' | 'Heal' | string;
  Hits?: number[];
  Scale?: number[];
  Target?: string[];
  Stat?: string;
  Value?: number[][];
  Duration?: number;
  Channel?: number;
}

interface LocalizationData {
  BuffName: Record<string, string>;
}

// ローカライゼーションデータ（グローバルに保持）
let localizationData: LocalizationData | null = null;

async function fetchLocalization(): Promise<LocalizationData> {
  if (localizationData) return localizationData;

  const response = await fetch('https://schaledb.com/data/jp/localization.json');
  localizationData = await response.json();
  return localizationData!;
}

function formatSkillDescription(
  desc: string | undefined,
  parameters: string[][] | undefined,
  skillType: 'ex' | 'normal' | 'passive' | 'sub'
): string {
  if (!desc) return '';

  let result = desc;

  // パラメータの最大レベルを取得（EXは5レベル、それ以外は10レベル）
  const maxLevelIndex = skillType === 'ex' ? 4 : 9;

  // <?N> をパラメータ値に置換
  if (parameters) {
    result = result.replace(/<\?(\d+)>/g, (_, num) => {
      const paramIndex = parseInt(num) - 1;
      if (parameters[paramIndex] && parameters[paramIndex][maxLevelIndex] !== undefined) {
        return parameters[paramIndex][maxLevelIndex];
      }
      return '';
    });
  }

  // 明示的な値を持つタグを先に処理: <X:YYY='VALUE'> → VALUE
  result = result.replace(/<[a-z]+:\w+='([^']+)'>/g, (_, value) => value);

  if (localizationData) {
    // <b:XXX> をバフ名に置換
    result = result.replace(/<b:(\w+)>/g, (_, key) => {
      return localizationData!.BuffName[`Buff_${key}`] || key;
    });

    // <d:XXX> をデバフ名に置換
    result = result.replace(/<d:(\w+)>/g, (_, key) => {
      return localizationData!.BuffName[`Debuff_${key}`] || key;
    });

    // <c:XXX> をCC名に置換
    result = result.replace(/<c:(\w+)>/g, (_, key) => {
      return localizationData!.BuffName[`CC_${key}`] || key;
    });

    // <s:XXX> をSpecial名に置換
    result = result.replace(/<s:(\w+)>/g, (_, key) => {
      return localizationData!.BuffName[`Special_${key}`] || key;
    });
  }

  // <kb:N> を空文字に置換（テキストはタグの後ろに既に存在する）
  result = result.replace(/<kb:\d+>/g, '');

  // 残りの未知のタグを削除
  result = result.replace(/<[^>]+>/g, '');

  // 改行を空白に
  result = result.replace(/\n/g, ' ');

  return result;
}

// =============================================================================
// プロジェクト型定義（変換先）
// =============================================================================

type AttackType = 'explosive' | 'piercing' | 'mystic' | 'sonic' | 'normal';
type Role = 'striker' | 'special';
type Position = 'front' | 'middle' | 'back';
type TerrainRank = 'SS' | 'S' | 'A' | 'B' | 'C' | 'D';
type BuffType =
  | 'attackPercent'
  | 'attackFlat'
  | 'defensePercent'
  | 'defenseFlat'
  | 'defenseDownPercent'
  | 'defenseDownFlat'
  | 'critDamagePercent'
  | 'critValueFlat'
  | 'critRateFlat'
  | 'damageDealtPercent'
  | 'damageTakenPercent'
  | 'hpPercent'
  | 'hpFlat'
  | 'accuracyFlat'
  | 'evasionFlat'
  | 'stabilityFlat'
  | 'costRecoveryFlat'
  | 'costRecoveryPercent'
  | 'healPowerPercent'
  | 'ccStrengthFlat'
  | 'ccResistFlat';

type BuffTarget = 'self' | 'ally' | 'allAllies' | 'enemy' | 'allEnemies';

interface SkillBuffEffect {
  type: BuffType;
  value: number;
  duration: number;
  target?: BuffTarget;
}

interface SkillLevel {
  level: number;
  damageMultiplier?: number;
  hitCount?: number;
  buffEffects?: SkillBuffEffect[];
  healMultiplier?: number;
  healFlat?: number;
  costReturn?: number;
}

// =============================================================================
// 変換関数
// =============================================================================

function convertAttackType(bulletType: string): AttackType {
  const map: Record<string, AttackType> = {
    Explosion: 'explosive',
    Pierce: 'piercing',
    Piercing: 'piercing',
    Mystic: 'mystic',
    Sonic: 'sonic',
    Normal: 'normal',
  };
  return map[bulletType] || 'normal';
}

function convertRole(squadType: string): Role {
  return squadType === 'Main' ? 'striker' : 'special';
}

function convertPosition(position: string): Position {
  return position.toLowerCase() as Position;
}

function convertTerrainRank(value: number): TerrainRank {
  const ranks: TerrainRank[] = ['D', 'C', 'B', 'A', 'S', 'SS'];
  return ranks[Math.min(value, 5)] || 'D';
}

function convertBuffStat(stat: string): { type: BuffType; isPercent: boolean } | null {
  const map: Record<string, { type: BuffType; isPercent: boolean }> = {
    // 攻撃力
    AttackPower_Base: { type: 'attackFlat', isPercent: false },
    AttackPower_Coefficient: { type: 'attackPercent', isPercent: true },
    // 防御力
    DefensePower_Base: { type: 'defenseFlat', isPercent: false },
    DefensePower_Coefficient: { type: 'defensePercent', isPercent: true },
    // 会心
    CriticalDamageRate_Base: { type: 'critDamagePercent', isPercent: true },
    CriticalDamageRate_Coefficient: { type: 'critDamagePercent', isPercent: true },
    CriticalPoint_Base: { type: 'critValueFlat', isPercent: false },
    CriticalPoint_Coefficient: { type: 'critRateFlat', isPercent: true },
    CriticalChance_Base: { type: 'critRateFlat', isPercent: true },
    // HP
    MaxHP_Base: { type: 'hpFlat', isPercent: false },
    MaxHP_Coefficient: { type: 'hpPercent', isPercent: true },
    // 命中・回避
    AccuracyPoint_Base: { type: 'accuracyFlat', isPercent: false },
    AccuracyPoint_Coefficient: { type: 'accuracyFlat', isPercent: true },
    DodgePoint_Base: { type: 'evasionFlat', isPercent: false },
    DodgePoint_Coefficient: { type: 'evasionFlat', isPercent: true },
    // 安定値
    StabilityPoint_Base: { type: 'stabilityFlat', isPercent: false },
    StabilityPoint_Coefficient: { type: 'stabilityFlat', isPercent: true },
    // コスト回復
    RegenCost_Base: { type: 'costRecoveryFlat', isPercent: false },
    RegenCost_Coefficient: { type: 'costRecoveryPercent', isPercent: true },
    // ダメージ倍率
    DamagedRatio_Base: { type: 'damageTakenPercent', isPercent: true },
    DamagedRatio_Coefficient: { type: 'damageTakenPercent', isPercent: true },
    OppressionPower_Base: { type: 'damageDealtPercent', isPercent: true },
    OppressionPower_Coefficient: { type: 'damageDealtPercent', isPercent: true },
    // 回復力
    HealPower_Base: { type: 'healPowerPercent', isPercent: false },
    HealPower_Coefficient: { type: 'healPowerPercent', isPercent: true },
  };
  return map[stat] || null;
}

function convertBuffTarget(targets: string[]): BuffTarget {
  if (targets.includes('Enemy')) return 'enemy';
  if (targets.includes('AllEnemy')) return 'allEnemies';
  if (targets.includes('AllyMain') && targets.includes('AllySupport')) return 'allAllies';
  if (targets.includes('AllyMain') || targets.includes('AllySupport') || targets.includes('Ally')) return 'ally';
  return 'self';
}

function convertSkill(
  skill: SchaleDBSkill | undefined,
  skillType: 'ex' | 'normal' | 'passive' | 'sub',
  characterId: string
): {
  id: string;
  name: string;
  description: string;
  type: 'ex' | 'normal' | 'passive' | 'sub';
  cost?: number;
  levels: SkillLevel[];
} {
  const defaultSkill = {
    id: `${characterId}_${skillType}`,
    name: skillType === 'ex' ? 'EXスキル' : skillType === 'normal' ? 'ノーマルスキル' : skillType === 'passive' ? 'パッシブスキル' : 'サブスキル',
    description: '',
    type: skillType,
    levels: Array.from({ length: skillType === 'ex' ? 5 : 10 }, (_, i) => ({ level: i + 1 })),
  };

  if (!skill) return defaultSkill;

  const levelCount = skillType === 'ex' ? 5 : 10;
  const levels: SkillLevel[] = [];

  for (let i = 0; i < levelCount; i++) {
    const level: SkillLevel = { level: i + 1 };

    // ダメージ効果の抽出
    if (skill.Effects) {
      const damageEffects = skill.Effects.filter((e) => e.Type === 'Damage' && e.Scale);
      if (damageEffects.length > 0) {
        // 最初のダメージ効果のスケールを使用
        const primaryDamage = damageEffects[0];
        if (primaryDamage.Scale && primaryDamage.Scale[i] !== undefined) {
          level.damageMultiplier = primaryDamage.Scale[i] / 10000;
        }
        if (primaryDamage.Hits && primaryDamage.Hits[0]) {
          level.hitCount = primaryDamage.Hits.length > 1 ? primaryDamage.Hits.length : Math.round(primaryDamage.Hits[0] / 10000);
        }
      }

      // バフ効果の抽出
      const buffEffects = skill.Effects.filter((e) => e.Type === 'Buff' && e.Stat && e.Value);
      if (buffEffects.length > 0) {
        level.buffEffects = [];
        for (const buff of buffEffects) {
          const statMapping = convertBuffStat(buff.Stat!);
          if (statMapping && buff.Value && buff.Value[0] && buff.Value[0][i] !== undefined) {
            const rawValue = buff.Value[0][i];
            // バフ値の変換: 1400 -> 14% (isPercent=true) または固定値
            const value = statMapping.isPercent ? rawValue / 100 : rawValue;

            level.buffEffects.push({
              type: statMapping.type,
              value: value,
              duration: buff.Duration ? buff.Duration / 1000 : 999,
              target: buff.Target ? convertBuffTarget(buff.Target) : 'self',
            });
          }
        }
        if (level.buffEffects.length === 0) {
          delete level.buffEffects;
        }
      }

      // 回復効果の抽出
      const healEffects = skill.Effects.filter((e) => e.Type === 'Heal' && e.Scale);
      if (healEffects.length > 0 && healEffects[0].Scale) {
        const healScale = healEffects[0].Scale[i];
        if (healScale !== undefined) {
          level.healMultiplier = healScale / 10000;
        }
      }
    }

    levels.push(level);
  }

  return {
    id: `${characterId}_${skillType}`,
    name: skill.Name || defaultSkill.name,
    description: formatSkillDescription(skill.Desc, skill.Parameters, skillType),
    type: skillType,
    ...(skillType === 'ex' && skill.Cost ? { cost: skill.Cost[0] } : {}),
    levels,
  };
}

function pathNameToVariableName(pathName: string): string {
  // hoshino_swimsuit -> hoshinoSwimsuit
  return pathName
    .split('_')
    .map((part, index) => (index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join('');
}

function generateCharacterFile(student: SchaleDBStudent): string {
  const characterId = student.PathName;
  const variableName = pathNameToVariableName(student.PathName);

  const character = {
    id: characterId,
    name: student.Name,
    nameEn: student.DevName.includes('CH') ? undefined : student.DevName,
    rarity: student.StarGrade,
    attackType: convertAttackType(student.BulletType),
    role: convertRole(student.SquadType),
    position: convertPosition(student.Position),
    baseStats: {
      attack: student.AttackPower100,
      defense: student.DefensePower100,
      hp: student.MaxHP100,
      criticalValue: student.CriticalPoint,
      criticalDamage: Math.round(student.CriticalDamageRate / 100),
      stability: student.StabilityPoint,
      accuracy: student.AccuracyPoint,
      evasion: student.DodgePoint,
      costRecovery: student.RegenCost,
    },
    terrain: {
      urban: convertTerrainRank(student.StreetBattleAdaptation),
      outdoor: convertTerrainRank(student.OutdoorBattleAdaptation),
      indoor: convertTerrainRank(student.IndoorBattleAdaptation),
    },
    skills: {
      ex: convertSkill(student.Skills.Ex, 'ex', characterId),
      normal: convertSkill(student.Skills.Public, 'normal', characterId),
      passive: convertSkill(student.Skills.Passive, 'passive', characterId),
      sub: convertSkill(student.Skills.ExtraPassive, 'sub', characterId),
    },
  };

  // TypeScriptファイルの生成
  const content = `import { Character } from '../../types';

export const ${variableName}: Character = ${JSON.stringify(character, null, 2)};
`;

  return content;
}

function generateIndexFile(students: SchaleDBStudent[]): string {
  const imports: string[] = [];
  const exports: string[] = [];
  const characterArray: string[] = [];
  const characterMapEntries: string[] = [];

  for (const student of students) {
    const variableName = pathNameToVariableName(student.PathName);
    const fileName = student.PathName;

    imports.push(`import { ${variableName} } from './${fileName}';`);
    exports.push(variableName);
    characterArray.push(variableName);

    // マップエントリ（変数名とキー名が異なる場合のみキーを明示）
    if (variableName !== student.PathName) {
      characterMapEntries.push(`  ${student.PathName}: ${variableName},`);
    } else {
      characterMapEntries.push(`  ${variableName},`);
    }
  }

  return `import { Character } from '../../types';

${imports.join('\n')}

export const characters: Character[] = [
  ${characterArray.join(',\n  ')},
];

export const characterMap: Record<string, Character> = {
${characterMapEntries.join('\n')}
};

export {
  ${exports.join(',\n  ')},
};
`;
}

// =============================================================================
// メイン処理
// =============================================================================

async function main() {
  console.log('SchaleDBからキャラクターデータを取得中...');

  // ローカライゼーションデータを先に取得
  console.log('ローカライゼーションデータを取得中...');
  await fetchLocalization();

  const response = await fetch('https://schaledb.com/data/jp/students.json');
  const data: Record<string, SchaleDBStudent> = await response.json();

  const students = Object.values(data)
    // 日本でリリース済みのキャラクターのみ
    .filter((s) => s.IsReleased[0])
    // 五十音順でソート
    .sort((a, b) => a.Name.localeCompare(b.Name, 'ja'));

  console.log(`${students.length}人のキャラクターを処理中...`);

  const outputDir = path.join(process.cwd(), 'src', 'data', 'characters');

  // 既存ファイルを保持するかどうか（false = 上書き）
  const keepExisting = false;

  // 各キャラクターのファイルを生成
  for (const student of students) {
    const filePath = path.join(outputDir, `${student.PathName}.ts`);

    if (keepExisting && fs.existsSync(filePath)) {
      console.log(`  スキップ: ${student.Name} (既存ファイルあり)`);
      continue;
    }

    const content = generateCharacterFile(student);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  生成: ${student.Name} -> ${student.PathName}.ts`);
  }

  // index.tsを生成
  const indexContent = generateIndexFile(students);
  fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent, 'utf-8');
  console.log('\nindex.tsを更新しました');

  console.log('\n完了！');
  console.log(`合計 ${students.length} キャラクターを生成しました`);
}

main().catch(console.error);
