import { Character } from '../../types';

export const azusa: Character = {
  "id": "azusa",
  "name": "アズサ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1894,
    "defense": 118,
    "hp": 22280,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 1384,
    "accuracy": 706,
    "evasion": 792,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "azusa_ex",
      "name": "intulit mortem",
      "description": "敵1人に対して、攻撃力の2023%分のダメージ",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 10.6601,
          "hitCount": 13
        },
        {
          "level": 2,
          "damageMultiplier": 12.2545,
          "hitCount": 13
        },
        {
          "level": 3,
          "damageMultiplier": 15.4562,
          "hitCount": 13
        },
        {
          "level": 4,
          "damageMultiplier": 17.0506,
          "hitCount": 13
        },
        {
          "level": 5,
          "damageMultiplier": 20.2405,
          "hitCount": 13
        }
      ]
    },
    "normal": {
      "id": "azusa_normal",
      "name": "sagitta mortis",
      "description": "30秒毎に、敵1人に対して攻撃力の468%分のダメージ/ 防御力を24.6%減少（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.9267,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 3.0739,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 3.2199,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 3.5121,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.89,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 3.6582,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.89,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 3.8053,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.89,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 4.0974,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -22.79,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 4.2435,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -22.79,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 4.3906,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -22.79,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 4.6828,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -24.69,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "azusa_passive",
      "name": "過酷な訓練",
      "description": "会心値を26.6%増加",
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
      "id": "azusa_sub",
      "name": "弱点を狙う",
      "description": "弱体状態の敵への攻撃時に、攻撃力の88.5%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.4662,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.4901,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.5129,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.6061,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.6299,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.6527,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.746,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.7698,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.7926,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.8858,
          "hitCount": 1
        }
      ]
    }
  }
};
