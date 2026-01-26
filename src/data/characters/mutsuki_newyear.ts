import { Character } from '../../types';

export const mutsukiNewyear: Character = {
  "id": "mutsuki_newyear",
  "name": "ムツキ（正月）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3725,
    "defense": 456,
    "hp": 18540,
    "criticalValue": 209,
    "criticalDamage": 200,
    "stability": 1328,
    "accuracy": 104,
    "evasion": 190,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "mutsuki_newyear_ex",
      "name": "迎春のシンフォニー",
      "description": "アーチ型範囲内の敵に対して、攻撃力の302%分のダメージ",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.5935,
          "hitCount": 5
        },
        {
          "level": 2,
          "damageMultiplier": 1.835,
          "hitCount": 5
        },
        {
          "level": 3,
          "damageMultiplier": 2.311,
          "hitCount": 5
        },
        {
          "level": 4,
          "damageMultiplier": 2.552,
          "hitCount": 5
        },
        {
          "level": 5,
          "damageMultiplier": 3.0285,
          "hitCount": 5
        }
      ]
    },
    "normal": {
      "id": "mutsuki_newyear_normal",
      "name": "小悪魔のコーラス",
      "description": "50秒毎に、直線範囲内の敵に対して攻撃力の315%分のダメージ。保有している「小悪魔」が6個の場合、169%分の追加ダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.1745,
          "hitCount": 9
        },
        {
          "level": 2,
          "damageMultiplier": 2.2292,
          "hitCount": 9
        },
        {
          "level": 3,
          "damageMultiplier": 2.2833,
          "hitCount": 9
        },
        {
          "level": 4,
          "damageMultiplier": 2.5008,
          "hitCount": 9
        },
        {
          "level": 5,
          "damageMultiplier": 2.5555,
          "hitCount": 9
        },
        {
          "level": 6,
          "damageMultiplier": 2.6096,
          "hitCount": 9
        },
        {
          "level": 7,
          "damageMultiplier": 2.8272,
          "hitCount": 9
        },
        {
          "level": 8,
          "damageMultiplier": 2.8812,
          "hitCount": 9
        },
        {
          "level": 9,
          "damageMultiplier": 2.9359,
          "hitCount": 9
        },
        {
          "level": 10,
          "damageMultiplier": 3.1529,
          "hitCount": 9
        }
      ]
    },
    "passive": {
      "id": "mutsuki_newyear_passive",
      "name": "もっと楽しい遊び方！",
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
      "id": "mutsuki_newyear_sub",
      "name": "小悪魔のキュートな企み",
      "description": "自身のEXスキルで対象にダメージを3回与える度に、「小悪魔」を1個獲得（56秒間）（「小悪魔」は最大6個分まで保有が可能で、効果が重複）。「小悪魔」1個につき、会心ダメージ率を4.1%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 2.16,
              "duration": 56,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 2.27,
              "duration": 56,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 2.38,
              "duration": 56,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 2.81,
              "duration": 56,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 2.92,
              "duration": 56,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 3.02,
              "duration": 56,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 3.46,
              "duration": 56,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 3.56,
              "duration": 56,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 3.67,
              "duration": 56,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 4.1,
              "duration": 56,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
