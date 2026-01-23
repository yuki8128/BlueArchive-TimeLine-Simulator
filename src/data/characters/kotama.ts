import { Character } from '../../types';

export const kotama: Character = {
  id: 'kotama',
  name: 'コタマ',
  nameEn: 'Kotama',
  rarity: 2,
  attackType: 'mystic',
  role: 'special',
  position: 'back',
  baseStats: {
    attack: 2789,
    defense: 130,
    hp: 14672,
    criticalValue: 152,
    criticalDamage: 200,
    stability: 1145,
    accuracy: 208,
    evasion: 159,
    costRecovery: 700,
  },
  terrain: {
    urban: 'B',
    outdoor: 'D',
    indoor: 'A',
  },
  skills: {
    ex: {
      id: 'kotama_ex',
      name: '最強応援団',
      description: '味方全体の攻撃力を増加',
      type: 'ex',
      cost: 4,
      levels: [
        {
          level: 1,
          buffEffects: [
            { type: 'attackPercent', value: 33.9, duration: 20 },
          ],
        },
        {
          level: 2,
          buffEffects: [
            { type: 'attackPercent', value: 36.7, duration: 20 },
          ],
        },
        {
          level: 3,
          buffEffects: [
            { type: 'attackPercent', value: 42.9, duration: 20 },
          ],
        },
        {
          level: 4,
          buffEffects: [
            { type: 'attackPercent', value: 45.2, duration: 20 },
          ],
        },
        {
          level: 5,
          buffEffects: [
            { type: 'attackPercent', value: 49.7, duration: 20 },
          ],
        },
      ],
    },
    normal: {
      id: 'kotama_normal',
      name: 'ファイト！',
      description: '味方の攻撃力増加',
      type: 'normal',
      levels: [
        { level: 1, buffEffects: [{ type: 'attackPercent', value: 11.2, duration: 30 }] },
        { level: 2, buffEffects: [{ type: 'attackPercent', value: 11.8, duration: 30 }] },
        { level: 3, buffEffects: [{ type: 'attackPercent', value: 12.4, duration: 30 }] },
        { level: 4, buffEffects: [{ type: 'attackPercent', value: 14, duration: 30 }] },
        { level: 5, buffEffects: [{ type: 'attackPercent', value: 14.6, duration: 30 }] },
        { level: 6, buffEffects: [{ type: 'attackPercent', value: 15.2, duration: 30 }] },
        { level: 7, buffEffects: [{ type: 'attackPercent', value: 16.8, duration: 30 }] },
        { level: 8, buffEffects: [{ type: 'attackPercent', value: 17.4, duration: 30 }] },
        { level: 9, buffEffects: [{ type: 'attackPercent', value: 18, duration: 30 }] },
        { level: 10, buffEffects: [{ type: 'attackPercent', value: 19.6, duration: 30 }] },
      ],
    },
    passive: {
      id: 'kotama_passive',
      name: '一緒に頑張ろう',
      description: '味方の攻撃力増加',
      type: 'passive',
      levels: [
        { level: 1, buffEffects: [{ type: 'attackPercent', value: 8.4, duration: 999 }] },
        { level: 2, buffEffects: [{ type: 'attackPercent', value: 8.8, duration: 999 }] },
        { level: 3, buffEffects: [{ type: 'attackPercent', value: 9.2, duration: 999 }] },
        { level: 4, buffEffects: [{ type: 'attackPercent', value: 10.5, duration: 999 }] },
        { level: 5, buffEffects: [{ type: 'attackPercent', value: 10.9, duration: 999 }] },
        { level: 6, buffEffects: [{ type: 'attackPercent', value: 11.3, duration: 999 }] },
        { level: 7, buffEffects: [{ type: 'attackPercent', value: 12.6, duration: 999 }] },
        { level: 8, buffEffects: [{ type: 'attackPercent', value: 13, duration: 999 }] },
        { level: 9, buffEffects: [{ type: 'attackPercent', value: 13.4, duration: 999 }] },
        { level: 10, buffEffects: [{ type: 'attackPercent', value: 14.7, duration: 999 }] },
      ],
    },
    sub: {
      id: 'kotama_sub',
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
