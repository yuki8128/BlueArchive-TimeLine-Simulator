import { ActiveBuff, BuffEffect, BuffSlot } from '../types';

/**
 * バフをアクティブ化
 */
export function activateBuff(
  effect: BuffEffect,
  startTime: number,
  targetCharacterIds?: string[]
): ActiveBuff {
  return {
    ...effect,
    startTime,
    endTime: startTime + effect.duration,
    targetCharacterIds,
  };
}

/**
 * 特定の時間にアクティブなバフをフィルタリング
 */
export function getActiveBuffsAtTime(
  buffs: ActiveBuff[],
  time: number
): ActiveBuff[] {
  return buffs.filter((buff) => buff.startTime <= time && buff.endTime > time);
}

/**
 * 特定のキャラクターに適用されるバフをフィルタリング
 * - targetCharacterIds が undefined: 敵向けデバフ（味方には適用しない）
 * - targetCharacterIds に characterId が含まれる: 適用
 */
export function getBuffsForCharacter(
  buffs: ActiveBuff[],
  characterId: string
): ActiveBuff[] {
  return buffs.filter((buff) => {
    // targetCharacterIds が undefined の場合は敵向けデバフなので味方には適用しない
    // ただし、敵へのデバフ（defenseDown等）は別途処理
    if (!buff.targetCharacterIds) {
      // 敵向けバフ（damageTakenPercent, defenseDownPercent等）は全員に適用
      const enemyDebuffTypes = ['damageTakenPercent', 'defenseDownPercent', 'defenseDownFlat'];
      if (enemyDebuffTypes.includes(buff.type)) {
        return true;
      }
      return false;
    }
    return buff.targetCharacterIds.includes(characterId);
  });
}

/**
 * 同じ枠のバフを解決（後から発動したもので上書き）
 */
export function resolveBuffConflicts(buffs: ActiveBuff[]): ActiveBuff[] {
  const buffMap = new Map<string, ActiveBuff>();

  // 時間順にソート
  const sortedBuffs = [...buffs].sort((a, b) => a.startTime - b.startTime);

  for (const buff of sortedBuffs) {
    // 同じ枠・同じタイプ・同じキャラクターのバフはキーが同じ
    const key = `${buff.slot}-${buff.type}-${buff.sourceCharacterId}`;
    buffMap.set(key, buff);
  }

  return Array.from(buffMap.values());
}

/**
 * バフリストに新しいバフを追加（重複処理込み）
 */
export function addBuff(
  existingBuffs: ActiveBuff[],
  newBuff: ActiveBuff
): ActiveBuff[] {
  // 同じ枠の同種バフを探す
  const conflictIndex = existingBuffs.findIndex(
    (b) =>
      b.slot === newBuff.slot &&
      b.type === newBuff.type &&
      b.sourceCharacterId === newBuff.sourceCharacterId &&
      b.endTime > newBuff.startTime
  );

  if (conflictIndex >= 0) {
    // 既存のバフを上書き
    const updated = [...existingBuffs];
    updated[conflictIndex] = newBuff;
    return updated;
  }

  return [...existingBuffs, newBuff];
}

/**
 * 期限切れのバフを削除
 */
export function removeExpiredBuffs(
  buffs: ActiveBuff[],
  currentTime: number
): ActiveBuff[] {
  return buffs.filter((buff) => buff.endTime > currentTime);
}

/**
 * バフの効果をまとめて計算
 */
export interface BuffSummary {
  attackPercent: number;
  attackFlat: number;
  defensePercent: number;
  defenseFlat: number;
  critDamagePercent: number;
  critValueFlat: number;
  damageDealtPercent: number;
  damageTakenPercent: number;
  defenseDownPercent: number;
}

export function summarizeBuffs(buffs: ActiveBuff[]): BuffSummary {
  const summary: BuffSummary = {
    attackPercent: 0,
    attackFlat: 0,
    defensePercent: 0,
    defenseFlat: 0,
    critDamagePercent: 0,
    critValueFlat: 0,
    damageDealtPercent: 0,
    damageTakenPercent: 0,
    defenseDownPercent: 0,
  };

  // 枠ごとに最大値を保持
  const bySlotAndType = new Map<string, number>();

  for (const buff of buffs) {
    const key = `${buff.slot}-${buff.type}-${buff.sourceCharacterId}`;
    const current = bySlotAndType.get(key) || 0;
    bySlotAndType.set(key, Math.max(current, buff.value));
  }

  // 集計
  for (const [key, value] of bySlotAndType) {
    const [, type] = key.split('-');
    switch (type) {
      case 'attackPercent':
        summary.attackPercent += value;
        break;
      case 'attackFlat':
        summary.attackFlat += value;
        break;
      case 'defensePercent':
        summary.defensePercent += value;
        break;
      case 'defenseFlat':
        summary.defenseFlat += value;
        break;
      case 'critDamagePercent':
        summary.critDamagePercent += value;
        break;
      case 'critValueFlat':
        summary.critValueFlat += value;
        break;
      case 'damageDealtPercent':
        summary.damageDealtPercent += value;
        break;
      case 'damageTakenPercent':
        summary.damageTakenPercent += value;
        break;
      case 'defenseDownPercent':
        summary.defenseDownPercent += value;
        break;
    }
  }

  return summary;
}

/**
 * バフスロットの日本語名を取得
 */
export function getBuffSlotName(slot: BuffSlot): string {
  const names: Record<BuffSlot, string> = {
    ex: 'EXスキル',
    normal: 'ノーマルスキル',
    passive: 'パッシブスキル',
    sub: 'サブスキル',
  };
  return names[slot];
}
