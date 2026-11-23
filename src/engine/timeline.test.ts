import { expect, test } from 'vitest';
import { akane } from '../data/characters/akane';
import { ako } from '../data/characters/ako';
import { binah } from '../data/enemies/binah';
import type { Formation, TimelineAction } from '../types';
import { generateCumulativeDamageSeries, runTimeline, validateTimeline } from './timeline';

const skillLevels = { ex: 5, normal: 1, passive: 1, sub: 1 };
const formation: Formation = {
  strikers: [{ character: akane, skillLevels }],
  specials: [],
};

function action(id: string, time: number, skillType: TimelineAction['skillType'] = 'ex'): TimelineAction {
  return { id, time, characterId: akane.id, skillType, skillLevel: skillLevels[skillType] };
}

test('sorts actions, applies and expires targeted buffs, and accumulates damage', () => {
  const buff = { ...action('buff', 0), characterId: ako.id, buffTargetCharacterId: akane.id };
  const actions = [action('late', 16, 'normal'), buff, action('early', 10, 'normal')];
  const result = runTimeline({ ...formation, specials: [{ character: ako, skillLevels }] }, binah, 0, actions, 4);
  const [early, late] = result.damageLog;

  expect(actions.map(({ id }) => id)).toEqual(['late', 'buff', 'early']);
  expect(result.timeline.map(({ id }) => id)).toEqual(['buff', 'early', 'late']);
  expect(result.currentTime).toBe(16);
  expect(result.currentCost).toBeCloseTo(4 - 3 + 16 * 0.14);
  expect(result.damageLog).toHaveLength(2);
  expect(early.buffsActive).toContainEqual(expect.objectContaining({ type: 'critDamagePercent', targetCharacterIds: [akane.id] }));
  expect(late.buffsActive).toEqual([]);
  expect(early.damage.expectedDamage).toBeGreaterThan(late.damage.expectedDamage);
  expect(late.damage.expectedDamage).toBeGreaterThan(0);
  expect(result.totalDamage).toBeCloseTo(early.damage.expectedDamage + late.damage.expectedDamage);
  expect(generateCumulativeDamageSeries([late, early])).toEqual([
    { time: 0, damage: 0 },
    { time: 10, damage: early.damage.expectedDamage },
    { time: 16, damage: result.totalDamage },
  ]);
});

test('reports missing characters and insufficient cost at the original action indices', () => {
  const missing = { ...action('missing', 2), characterId: 'not-in-formation' };
  const actions = [action('too-expensive', 1), ...Array.from({ length: 5 }, (_, i) => action(`ex-${i}`, 0)), missing];

  expect(validateTimeline(formation, actions.slice(1, 6))).toEqual({ valid: true, errors: [] });
  expect(validateTimeline(formation, actions)).toEqual({
    valid: false,
    errors: [
      { actionIndex: 0, time: 1, message: expect.stringContaining('コスト不足') },
      { actionIndex: 6, time: 2, message: expect.stringContaining('not-in-formation') },
    ],
  });
});
