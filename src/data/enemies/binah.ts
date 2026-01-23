import { Enemy } from '../../types';

export const binah: Enemy = {
  id: 'binah',
  name: 'ビナー',
  armorType: 'special',
  terrain: 'indoor',
  difficulty: 'TORMENT',
  phases: [
    {
      name: 'Phase 1',
      hp: 12000000,
      defense: 5000,
      critResist: 100,
      critDamageResist: 50,
      level: 90,
    },
  ],
  gimmicks: [
    {
      id: 'stability_debuff',
      name: '安定値デバフ',
      description: 'プレイヤーの安定値が50%減少',
      effect: {
        type: 'stabilityDebuff',
        value: 50,
      },
    },
  ],
};
