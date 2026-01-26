import { Character } from '../../types';

export const misaki: Character = {
  "id": "misaki",
  "name": "ミサキ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 5495,
    "defense": 119,
    "hp": 17060,
    "criticalValue": 252,
    "criticalDamage": 200,
    "stability": 988,
    "accuracy": 756,
    "evasion": 198,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "misaki_ex",
      "name": "虚しい世界",
      "description": "7つの円形範囲内の敵に4秒毎に攻撃力14.3%分のダメージ（48秒間） （EXスキル使用時、以前に使用したEXスキル効果の範囲が消えます）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0755,
          "hitCount": 7
        },
        {
          "level": 2,
          "damageMultiplier": 0.0868,
          "hitCount": 7
        },
        {
          "level": 3,
          "damageMultiplier": 0.1095,
          "hitCount": 7
        },
        {
          "level": 4,
          "damageMultiplier": 0.1208,
          "hitCount": 7
        },
        {
          "level": 5,
          "damageMultiplier": 0.1434,
          "hitCount": 7
        }
      ]
    },
    "normal": {
      "id": "misaki_normal",
      "name": "早く終わらせたい",
      "description": "50秒毎に、攻撃力を37.1%増加（40秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.57,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.54,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.52,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.44,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.42,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.39,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 31.3,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.28,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.26,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 37.17,
              "duration": 40,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "misaki_passive",
      "name": "無意味な技術",
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
      "id": "misaki_sub",
      "name": "等価交換",
      "description": "弱体状態の敵への攻撃時に、弱体状態の個数によって攻撃力の2.1%/4.1%/6.2%/8.3%/10.3%分の追加ダメージ （最大5つ）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.011,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0117,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0121,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0145,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0148,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0155,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0175,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0182,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0186,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.021,
          "hitCount": 1
        }
      ]
    }
  }
};
