import { Character } from '../../types';

export const harunaNewyear: Character = {
  "id": "haruna_newyear",
  "name": "ハルナ（正月）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3339,
    "defense": 114,
    "hp": 18610,
    "criticalValue": 209,
    "criticalDamage": 200,
    "stability": 1908,
    "accuracy": 941,
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
      "id": "haruna_newyear_ex",
      "name": "美食家の怒り",
      "description": "最大で敵5人に対して、順番にそれぞれ攻撃力の202%分のダメージを与え、周囲の円形範囲内の敵に対して、攻撃力の98.7%分のダメージ",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.0664,
          "hitCount": 5
        },
        {
          "level": 2,
          "damageMultiplier": 1.2265,
          "hitCount": 5
        },
        {
          "level": 3,
          "damageMultiplier": 1.5462,
          "hitCount": 5
        },
        {
          "level": 4,
          "damageMultiplier": 1.7063,
          "hitCount": 5
        },
        {
          "level": 5,
          "damageMultiplier": 2.026,
          "hitCount": 5
        }
      ]
    },
    "normal": {
      "id": "haruna_newyear_normal",
      "name": "美食家の信念",
      "description": "40秒毎に、攻撃力を30.3%増加（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.97,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.77,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.57,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.77,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.56,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.36,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.55,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.35,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.15,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 30.34,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "haruna_newyear_passive",
      "name": "新年のヴィアンド",
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
      "id": "haruna_newyear_sub",
      "name": "送別のデセール",
      "description": "攻撃時、20%の確率で防御力を14.8%減少（17秒間）（クールタイム5秒）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -7.81,
              "duration": 17,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -8.2,
              "duration": 17,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -8.59,
              "duration": 17,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.15,
              "duration": 17,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.54,
              "duration": 17,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.93,
              "duration": 17,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -12.49,
              "duration": 17,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -12.88,
              "duration": 17,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -13.27,
              "duration": 17,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -14.83,
              "duration": 17,
              "target": "enemy"
            }
          ]
        }
      ]
    }
  }
};
