import { Character } from '../../types';

export const ui: Character = {
  id: 'ui',
  name: 'ウイ',
  nameEn: 'Ui',
  rarity: 3,
  attackType: 'mystic',
  role: 'special',
  position: 'back',
  baseStats: {
    attack: 3456,
    defense: 159,
    hp: 15234,
    criticalValue: 168,
    criticalDamage: 200,
    stability: 1234,
    accuracy: 245,
    evasion: 178,
    costRecovery: 900,
  },
  terrain: {
    urban: 'B',
    outdoor: 'A',
    indoor: 'S',
  },
  skills: {
    ex: {
      id: 'ui_ex',
      name: 'ミレニアムのお茶会',
      description: '味方1体の攻撃力増加、コスト回復',
      type: 'ex',
      cost: 3,
      levels: [
        {
          level: 1,
          buffEffects: [
            { type: 'attackPercent', value: 39.2, duration: 18 },
          ],
        },
        {
          level: 2,
          buffEffects: [
            { type: 'attackPercent', value: 42.5, duration: 18 },
          ],
        },
        {
          level: 3,
          buffEffects: [
            { type: 'attackPercent', value: 49.6, duration: 18 },
          ],
        },
        {
          level: 4,
          buffEffects: [
            { type: 'attackPercent', value: 52.3, duration: 18 },
          ],
        },
        {
          level: 5,
          buffEffects: [
            { type: 'attackPercent', value: 57.5, duration: 18 },
          ],
        },
      ],
    },
    normal: {
      id: 'ui_normal',
      name: 'お茶の時間',
      description: '味方の攻撃力増加',
      type: 'normal',
      levels: [
        { level: 1, buffEffects: [{ type: 'attackPercent', value: 16.9, duration: 30 }] },
        { level: 2, buffEffects: [{ type: 'attackPercent', value: 17.8, duration: 30 }] },
        { level: 3, buffEffects: [{ type: 'attackPercent', value: 18.6, duration: 30 }] },
        { level: 4, buffEffects: [{ type: 'attackPercent', value: 21.1, duration: 30 }] },
        { level: 5, buffEffects: [{ type: 'attackPercent', value: 21.9, duration: 30 }] },
        { level: 6, buffEffects: [{ type: 'attackPercent', value: 22.8, duration: 30 }] },
        { level: 7, buffEffects: [{ type: 'attackPercent', value: 25.3, duration: 30 }] },
        { level: 8, buffEffects: [{ type: 'attackPercent', value: 26.2, duration: 30 }] },
        { level: 9, buffEffects: [{ type: 'attackPercent', value: 27, duration: 30 }] },
        { level: 10, buffEffects: [{ type: 'attackPercent', value: 29.5, duration: 30 }] },
      ],
    },
    passive: {
      id: 'ui_passive',
      name: 'セミナーの主催者',
      description: 'コスト回復力増加',
      type: 'passive',
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
    sub: {
      id: 'ui_sub',
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
