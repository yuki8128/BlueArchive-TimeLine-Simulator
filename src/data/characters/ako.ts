import { Character } from '../../types';

export const ako: Character = {
  id: 'ako',
  name: 'アコ',
  nameEn: 'Ako',
  rarity: 3,
  attackType: 'mystic',
  role: 'special',
  position: 'back',
  baseStats: {
    attack: 3612,
    defense: 166,
    hp: 16875,
    criticalValue: 191,
    criticalDamage: 200,
    stability: 1376,
    accuracy: 262,
    evasion: 185,
    costRecovery: 700,
  },
  terrain: {
    urban: 'A',
    outdoor: 'B',
    indoor: 'S',
  },
  skills: {
    ex: {
      id: 'ako_ex',
      name: '生徒会の応援',
      description: '味方1体の会心ダメージ率と会心値を増加',
      type: 'ex',
      cost: 2,
      levels: [
        {
          level: 1,
          buffEffects: [
            { type: 'critDamagePercent', value: 63.8, duration: 25 },
            { type: 'critValueFlat', value: 532, duration: 25 },
          ],
        },
        {
          level: 2,
          buffEffects: [
            { type: 'critDamagePercent', value: 69.1, duration: 25 },
            { type: 'critValueFlat', value: 576, duration: 25 },
          ],
        },
        {
          level: 3,
          buffEffects: [
            { type: 'critDamagePercent', value: 80.7, duration: 25 },
            { type: 'critValueFlat', value: 672, duration: 25 },
          ],
        },
        {
          level: 4,
          buffEffects: [
            { type: 'critDamagePercent', value: 85.0, duration: 25 },
            { type: 'critValueFlat', value: 708, duration: 25 },
          ],
        },
        {
          level: 5,
          buffEffects: [
            { type: 'critDamagePercent', value: 93.5, duration: 25 },
            { type: 'critValueFlat', value: 779, duration: 25 },
          ],
        },
      ],
    },
    normal: {
      id: 'ako_normal',
      name: '生徒会の矜持',
      description: '味方の会心ダメージ率増加',
      type: 'normal',
      levels: [
        { level: 1, buffEffects: [{ type: 'critDamagePercent', value: 16.9, duration: 30 }] },
        { level: 2, buffEffects: [{ type: 'critDamagePercent', value: 17.8, duration: 30 }] },
        { level: 3, buffEffects: [{ type: 'critDamagePercent', value: 18.6, duration: 30 }] },
        { level: 4, buffEffects: [{ type: 'critDamagePercent', value: 21.1, duration: 30 }] },
        { level: 5, buffEffects: [{ type: 'critDamagePercent', value: 21.9, duration: 30 }] },
        { level: 6, buffEffects: [{ type: 'critDamagePercent', value: 22.8, duration: 30 }] },
        { level: 7, buffEffects: [{ type: 'critDamagePercent', value: 25.3, duration: 30 }] },
        { level: 8, buffEffects: [{ type: 'critDamagePercent', value: 26.2, duration: 30 }] },
        { level: 9, buffEffects: [{ type: 'critDamagePercent', value: 27, duration: 30 }] },
        { level: 10, buffEffects: [{ type: 'critDamagePercent', value: 29.5, duration: 30 }] },
      ],
    },
    passive: {
      id: 'ako_passive',
      name: '私のサポート',
      description: '味方の攻撃力増加',
      type: 'passive',
      levels: [
        { level: 1, buffEffects: [{ type: 'attackPercent', value: 11.2, duration: 999 }] },
        { level: 2, buffEffects: [{ type: 'attackPercent', value: 11.8, duration: 999 }] },
        { level: 3, buffEffects: [{ type: 'attackPercent', value: 12.4, duration: 999 }] },
        { level: 4, buffEffects: [{ type: 'attackPercent', value: 14, duration: 999 }] },
        { level: 5, buffEffects: [{ type: 'attackPercent', value: 14.6, duration: 999 }] },
        { level: 6, buffEffects: [{ type: 'attackPercent', value: 15.2, duration: 999 }] },
        { level: 7, buffEffects: [{ type: 'attackPercent', value: 16.8, duration: 999 }] },
        { level: 8, buffEffects: [{ type: 'attackPercent', value: 17.4, duration: 999 }] },
        { level: 9, buffEffects: [{ type: 'attackPercent', value: 18, duration: 999 }] },
        { level: 10, buffEffects: [{ type: 'attackPercent', value: 19.6, duration: 999 }] },
      ],
    },
    sub: {
      id: 'ako_sub',
      name: 'コスト回復強化',
      description: 'コスト回復力増加',
      type: 'sub',
      levels: [
        { level: 1, buffEffects: [] },
        { level: 2, buffEffects: [] },
        { level: 3, buffEffects: [] },
        { level: 4, buffEffects: [] },
        { level: 5, buffEffects: [] },
        { level: 6, buffEffects: [] },
        { level: 7, buffEffects: [] },
        { level: 8, buffEffects: [] },
        { level: 9, buffEffects: [] },
        { level: 10, buffEffects: [] },
      ],
    },
  },
};
