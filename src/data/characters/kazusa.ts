import { Character } from '../../types';

export const kazusa: Character = {
  "id": "kazusa",
  "name": "カズサ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2415,
    "defense": 475,
    "hp": 19340,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 1388,
    "accuracy": 100,
    "evasion": 198,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "kazusa_ex",
      "name": "スイート・ファイア",
      "description": "スキル発動後すぐにリロード/ 敵1人に対して攻撃力の1773%分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 9.3328,
          "hitCount": 13
        },
        {
          "level": 2,
          "damageMultiplier": 10.7329,
          "hitCount": 13
        },
        {
          "level": 3,
          "damageMultiplier": 13.533,
          "hitCount": 13
        },
        {
          "level": 4,
          "damageMultiplier": 14.9331,
          "hitCount": 13
        },
        {
          "level": 5,
          "damageMultiplier": 17.7324,
          "hitCount": 13
        }
      ]
    },
    "normal": {
      "id": "kazusa_normal",
      "name": "しみついたクセ",
      "description": "30秒毎に、攻撃力を43.8%増加（25秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 23.06,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.22,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.37,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.98,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 31.13,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.29,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 36.89,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 38.05,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 39.2,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 43.82,
              "duration": 25,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "kazusa_passive",
      "name": "シュガー・ハイ",
      "description": "攻撃力を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.7,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.4,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.2,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.9,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.6,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.4,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 23.1,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 23.8,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "kazusa_sub",
      "name": "つまみ食い",
      "description": "リロード時、攻撃速度が16.3%減少する代わりに攻撃力を49.6%増加（15秒間）（最大で2回分まで効果が重複）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.14,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.44,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 28.75,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.97,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 35.28,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 36.59,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 41.81,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 43.12,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 44.43,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 49.65,
              "duration": 15,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
