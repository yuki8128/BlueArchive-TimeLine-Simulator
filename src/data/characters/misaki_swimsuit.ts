import { Character } from '../../types';

export const misakiSwimsuit: Character = {
  "id": "misaki_swimsuit",
  "name": "ミサキ（水着）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 3168,
    "defense": 377,
    "hp": 14088,
    "criticalValue": 264,
    "criticalDamage": 200,
    "stability": 1081,
    "accuracy": 792,
    "evasion": 188,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "misaki_swimsuit_ex",
      "name": "虚しくないもの",
      "description": "円形範囲内の敵に対して、対象の弱体状態の個数によって攻撃力分のダメージ 1個以下：攻撃力の553%分のダメージ 2個～3個：攻撃力の1106%分のダメージ 4個以上：攻撃力の1653%分のダメージ",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.912,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 3.3488,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 4.2224,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 4.6592,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 5.5328,
          "hitCount": 3
        }
      ]
    },
    "normal": {
      "id": "misaki_swimsuit_normal",
      "name": "見ててあげる、少しだけ",
      "description": "35秒毎に、円形範囲内の敵に対して攻撃力の174%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.9191,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.9653,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.0115,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.1949,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.2411,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.2873,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 1.4707,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 1.5169,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 1.5624,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 1.7465,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "misaki_swimsuit_passive",
      "name": "慣れない習慣",
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
      "id": "misaki_swimsuit_sub",
      "name": "Interest",
      "description": "味方の爆発特効を30.2%加算",
      "type": "sub",
      "levels": [
        {
          "level": 1
        },
        {
          "level": 2
        },
        {
          "level": 3
        },
        {
          "level": 4
        },
        {
          "level": 5
        },
        {
          "level": 6
        },
        {
          "level": 7
        },
        {
          "level": 8
        },
        {
          "level": 9
        },
        {
          "level": 10
        }
      ]
    }
  }
};
