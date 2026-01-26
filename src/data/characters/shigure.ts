import { Character } from '../../types';

export const shigure: Character = {
  "id": "shigure",
  "name": "シグレ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2702,
    "defense": 112,
    "hp": 21170,
    "criticalValue": 211,
    "criticalDamage": 200,
    "stability": 940,
    "accuracy": 105,
    "evasion": 188,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "shigure_ex",
      "name": "シグレ特製ボトルグレネード",
      "description": "直線範囲内の敵に対して、攻撃力の分のダメージ/ 攻撃力の分の持続ダメージを付与（20秒間）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.2596,
          "hitCount": 4
        },
        {
          "level": 2,
          "damageMultiplier": 4.8988,
          "hitCount": 4
        },
        {
          "level": 3,
          "damageMultiplier": 5.5372,
          "hitCount": 4
        },
        {
          "level": 4,
          "damageMultiplier": 6.1764,
          "hitCount": 4
        },
        {
          "level": 5,
          "damageMultiplier": 6.8156,
          "hitCount": 4
        }
      ]
    },
    "normal": {
      "id": "shigure_normal",
      "name": "一杯、どう？",
      "description": "60秒毎に、自身を除く攻撃力が最も高い味方1人のを増加、を27.5%減少（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.44,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "accuracyFlat",
              "value": -27.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.77,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "accuracyFlat",
              "value": -27.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.08,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "accuracyFlat",
              "value": -27.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 34.37,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "accuracyFlat",
              "value": -27.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 35.69,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "accuracyFlat",
              "value": -27.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 37.01,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "accuracyFlat",
              "value": -27.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 42.31,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "accuracyFlat",
              "value": -27.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 43.62,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "accuracyFlat",
              "value": -27.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 44.94,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "accuracyFlat",
              "value": -27.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 50.23,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "accuracyFlat",
              "value": -27.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "shigure_passive",
      "name": "甘い発酵",
      "description": "を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "shigure_sub",
      "name": "野生の勘",
      "description": "通常攻撃の範囲の半径が倍に増加し、攻撃力の分のダメージを与えるように変更",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.6167,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.629,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.6414,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.6909,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.7033,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.7157,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.7644,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.7768,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.7892,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.8387,
          "hitCount": 1
        }
      ]
    }
  }
};
