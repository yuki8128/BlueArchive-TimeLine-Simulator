import { Enemy } from '../../types';

export const perorodzilla: Enemy = {
  id: 'perorodzilla',
  name: 'ペロロジラ',
  armorType: 'heavy',
  terrain: 'outdoor',
  difficulty: 'INSANE',
  phases: [
    {
      name: 'Phase 1',
      hp: 8000000,
      defense: 4000,
      critResist: 100,
      critDamageResist: 50,
      level: 85,
    },
  ],
  gimmicks: [
    {
      id: 'down_bonus',
      name: 'ダウン時ダメージ増加',
      description: 'ダウン状態の時、受けるダメージが増加',
      effect: {
        type: 'damageMultiplier',
        value: 2.0,
      },
    },
  ],
};
