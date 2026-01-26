import { Character } from '../../types';

export const himari: Character = {
  "id": "himari",
  "name": "ヒマリ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2197,
    "defense": 654,
    "hp": 24449,
    "criticalValue": 238,
    "criticalDamage": 200,
    "stability": 1201,
    "accuracy": 714,
    "evasion": 1151,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "himari_ex",
      "name": "実力をお見せしましょう",
      "description": "味方1人に対して、攻撃力を105%増加（13秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 55.28,
              "duration": 13,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 63.57,
              "duration": 13,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 80.15,
              "duration": 13,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 88.44,
              "duration": 13,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 105.03,
              "duration": 13,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "himari_normal",
      "name": "少し驚くかもしれませんね",
      "description": "30秒毎に、HPが最も低い敵1人に対して攻撃力の241%分のダメージ/ 回避値を27.1%減少（23秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.8592,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -16.96,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 1.8592,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -17.81,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 1.8592,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -18.65,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.0447,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -20.35,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.0447,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -21.2,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 2.0447,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -22.05,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 2.2309,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -23.74,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 2.2309,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -24.59,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 2.2309,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -25.44,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 2.4164,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -27.13,
              "duration": 23,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "himari_passive",
      "name": "清楚な高嶺の花",
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
      "id": "himari_sub",
      "name": "超天才清楚系病弱美少女の真骨頂",
      "description": "味方のコスト回復力を20.2%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 10.68,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 11.21,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 11.75,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 13.89,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 14.42,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 14.95,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 17.09,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 17.62,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 18.15,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 20.29,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
