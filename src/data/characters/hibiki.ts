import { Character } from '../../types';

export const hibiki: Character = {
  "id": "hibiki",
  "name": "ヒビキ",
  "nameEn": "Hibiki",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2463,
    "defense": 477,
    "hp": 16721,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 1141,
    "accuracy": 100,
    "evasion": 201,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "hibiki_ex",
      "name": "これは高確率で痛いよ",
      "description": "5つの円形範囲内の敵に対して、攻撃力の591%分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.1143,
          "hitCount": 5
        },
        {
          "level": 2,
          "damageMultiplier": 3.5812,
          "hitCount": 5
        },
        {
          "level": 3,
          "damageMultiplier": 4.515,
          "hitCount": 5
        },
        {
          "level": 4,
          "damageMultiplier": 4.9819,
          "hitCount": 5
        },
        {
          "level": 5,
          "damageMultiplier": 5.9164,
          "hitCount": 5
        }
      ]
    },
    "normal": {
      "id": "hibiki_normal",
      "name": "火力は十分",
      "description": "20秒毎に、HPが最も低い敵を中心にした円形範囲内の敵に攻撃力の275%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.449,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.5218,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.5939,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.8837,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.9565,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.0286,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.3184,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.3912,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.4633,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.7531,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "hibiki_passive",
      "name": "これは危険だよ",
      "description": "会心ダメージ率を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "hibiki_sub",
      "name": "役に立つといいけど",
      "description": "味方の会心ダメージ率を17.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 9.12,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 9.57,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 10.03,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 11.86,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 12.31,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 12.77,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 14.59,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.04,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.5,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 17.32,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
