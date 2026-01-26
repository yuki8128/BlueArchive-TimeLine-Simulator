import {
  Enemy,
  TimelineAction,
  SimulationState,
  DamageLogEntry,
  Formation,
  CharacterInFormation,
  ActiveBuff,
  BuffTarget,
} from '../types';
import { calculateDamage, getSkillLevelData } from './damage';
import {
  calculateCostRecoveryRate,
  calculateMaxCost,
  calculateCostAtTime,
} from './cost';
import { activateBuff, getActiveBuffsAtTime, removeExpiredBuffs, getBuffsForCharacter } from './buff';

/**
 * タイムラインを実行してダメージを計算
 */
export function runTimeline(
  formation: Formation,
  enemy: Enemy,
  phaseIndex: number,
  actions: TimelineAction[],
  startCost?: number
): SimulationState {
  const phase = enemy.phases[phaseIndex];
  const maxCost = calculateMaxCost(formation);
  const costRecoveryRate = calculateCostRecoveryRate(formation);
  const initialCost = startCost ?? maxCost;

  // キャラクターをIDでマップ化
  const characterMap = new Map<string, CharacterInFormation>();
  for (const c of formation.strikers) {
    if (c) characterMap.set(c.character.id, c);
  }
  for (const c of formation.specials) {
    if (c) characterMap.set(c.character.id, c);
  }

  // 全キャラクターIDのリスト
  const allCharacterIds = Array.from(characterMap.keys());

  // バフターゲットに基づいてtargetCharacterIdsを決定するヘルパー
  const resolveBuffTargets = (
    target: BuffTarget,
    sourceCharacterId: string,
    explicitTargetId?: string
  ): string[] | undefined => {
    switch (target) {
      case 'self':
        return [sourceCharacterId];
      case 'ally':
        // 単体バフ：明示的なターゲットがあればそれを使用、なければ全員に適用
        if (explicitTargetId) {
          return [explicitTargetId];
        }
        // デフォルトは全員に適用（UI改善まで）
        return allCharacterIds;
      case 'allAllies':
        return allCharacterIds;
      case 'enemy':
      case 'allEnemies':
        // 敵へのデバフは別途処理（targetCharacterIdsは設定しない）
        return undefined;
      default:
        return [sourceCharacterId];
    }
  };

  // アクションを時間順にソート
  const sortedActions = [...actions].sort((a, b) => a.time - b.time);

  // コスト使用履歴
  const costUsages: { time: number; cost: number }[] = [];

  // バフリスト
  let activeBuffs: ActiveBuff[] = [];

  // ダメージログ
  const damageLog: DamageLogEntry[] = [];

  // 合計ダメージ
  let totalDamage = 0;

  // 各アクションを処理
  for (const action of sortedActions) {
    const charInFormation = characterMap.get(action.characterId);
    if (!charInFormation) continue;

    const character = charInFormation.character;
    const skill = character.skills[action.skillType];
    const skillLevel =
      charInFormation.skillLevels[action.skillType] || action.skillLevel;

    // 期限切れバフを削除
    activeBuffs = removeExpiredBuffs(activeBuffs, action.time);

    // 現在アクティブなバフを取得
    const currentBuffs = getActiveBuffsAtTime(activeBuffs, action.time);

    // EXスキルの場合、コストを消費
    if (action.skillType === 'ex' && skill.cost) {
      costUsages.push({ time: action.time, cost: skill.cost });
    }

    // スキルのバフ効果を適用
    const skillData = getSkillLevelData(skill, skillLevel);
    if (skillData?.buffEffects) {
      for (const effect of skillData.buffEffects) {
        const buffTarget = effect.target ?? 'self';
        const targetCharacterIds = resolveBuffTargets(
          buffTarget,
          character.id,
          action.buffTargetCharacterId
        );

        const buff = activateBuff(
          {
            ...effect,
            target: buffTarget,
            slot: action.skillType,
            sourceCharacterId: character.id,
            sourceSkillId: skill.id,
          },
          action.time,
          targetCharacterIds
        );
        activeBuffs.push(buff);
      }
    }

    // ダメージ計算（ダメージスキルの場合）
    if (skillData?.damageMultiplier && skillData.damageMultiplier > 0) {
      // このキャラクターに適用されるバフのみをフィルタリング
      const buffsForCharacter = getBuffsForCharacter(currentBuffs, character.id);

      const damageResult = calculateDamage(
        character,
        skill,
        skillLevel,
        enemy,
        phase,
        buffsForCharacter,
        90 // 攻撃者レベル
      );

      damageLog.push({
        time: action.time,
        characterId: character.id,
        skillType: action.skillType,
        damage: damageResult,
        buffsActive: [...buffsForCharacter],
      });

      totalDamage += damageResult.expectedDamage;
    }
  }

  // 最終時間を計算
  const lastTime =
    sortedActions.length > 0
      ? Math.max(...sortedActions.map((a) => a.time))
      : 0;

  // 現在のコストを計算
  const currentCost = calculateCostAtTime(
    initialCost,
    maxCost,
    costRecoveryRate,
    lastTime,
    costUsages
  );

  return {
    currentTime: lastTime,
    currentCost,
    maxCost,
    costRecoveryRate,
    activeBuffs,
    timeline: sortedActions,
    damageLog,
    totalDamage,
  };
}

/**
 * タイムラインのバリデーション
 */
export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  actionIndex: number;
  time: number;
  message: string;
}

export function validateTimeline(
  formation: Formation,
  actions: TimelineAction[]
): ValidationResult {
  const errors: ValidationError[] = [];
  const maxCost = calculateMaxCost(formation);
  const costRecoveryRate = calculateCostRecoveryRate(formation);
  const sortedActions = [...actions].sort((a, b) => a.time - b.time);

  // キャラクターをIDでマップ化
  const characterMap = new Map<string, CharacterInFormation>();
  for (const c of formation.strikers) {
    if (c) characterMap.set(c.character.id, c);
  }
  for (const c of formation.specials) {
    if (c) characterMap.set(c.character.id, c);
  }

  // コスト使用履歴
  const costUsages: { time: number; cost: number }[] = [];

  for (let i = 0; i < sortedActions.length; i++) {
    const action = sortedActions[i];
    const originalIndex = actions.indexOf(action);

    // キャラクターが編成にいるか確認
    const charInFormation = characterMap.get(action.characterId);
    if (!charInFormation) {
      errors.push({
        actionIndex: originalIndex,
        time: action.time,
        message: `キャラクター(${action.characterId})が編成にいません`,
      });
      continue;
    }

    const skill = charInFormation.character.skills[action.skillType];

    // EXスキルのコストチェック
    if (action.skillType === 'ex' && skill.cost) {
      const currentCost = calculateCostAtTime(
        maxCost,
        maxCost,
        costRecoveryRate,
        action.time,
        costUsages
      );

      if (currentCost < skill.cost) {
        errors.push({
          actionIndex: originalIndex,
          time: action.time,
          message: `コスト不足: 必要${skill.cost}、現在${currentCost.toFixed(1)}`,
        });
      }

      costUsages.push({ time: action.time, cost: skill.cost });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * ダメージログを累計ダメージ系列に変換（グラフ用）
 */
export function generateCumulativeDamageSeries(
  damageLog: DamageLogEntry[]
): { time: number; damage: number }[] {
  const sorted = [...damageLog].sort((a, b) => a.time - b.time);
  const series: { time: number; damage: number }[] = [{ time: 0, damage: 0 }];

  let cumulative = 0;
  for (const entry of sorted) {
    cumulative += entry.damage.expectedDamage;
    series.push({ time: entry.time, damage: cumulative });
  }

  return series;
}
