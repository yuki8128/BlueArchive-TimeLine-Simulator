import { Character } from '../../types';

export const atsuko: Character = {
  "id": "atsuko",
  "name": "アツコ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1368,
    "defense": 165,
    "hp": 46000,
    "criticalValue": 216,
    "criticalDamage": 200,
    "stability": 1284,
    "accuracy": 108,
    "evasion": 1321,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "atsuko_ex",
      "name": "これも私の力……？",
      "description": "自身を中心とした円形範囲内の味方を5秒毎に、治癒力の53.9%分の回復（30秒間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.284
        },
        {
          "level": 2,
          "healMultiplier": 0.3265
        },
        {
          "level": 3,
          "healMultiplier": 0.4118
        },
        {
          "level": 4,
          "healMultiplier": 0.4543
        },
        {
          "level": 5,
          "healMultiplier": 0.5395
        }
      ]
    },
    "normal": {
      "id": "atsuko_normal",
      "name": "隠れるよ",
      "description": "30秒毎に、自身の位置に煙幕を張る、範囲内の味方の回避値を39.1%増加（20秒間）（範囲内にいる間だけ効果を維持）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 20.58,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 21.61,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 22.64,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 26.76,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 27.79,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 28.82,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 32.93,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 33.95,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 34.98,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 39.1,
              "duration": 999,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "atsuko_passive",
      "name": "教えられた事",
      "description": "回避値を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "atsuko_sub",
      "name": "痛いのは慣れてる",
      "description": "HPが30%以下の時、回避値を45.9%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 24.2,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 25.41,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 26.62,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 31.46,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 32.67,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 33.88,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 38.71,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 39.93,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 41.14,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 45.97,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
