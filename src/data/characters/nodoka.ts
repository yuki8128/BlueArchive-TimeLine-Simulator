import { Character } from '../../types';

export const nodoka: Character = {
  "id": "nodoka",
  "name": "ノドカ",
  "nameEn": "Nodoka",
  "rarity": 1,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 1658,
    "defense": 121,
    "hp": 17020,
    "criticalValue": 197,
    "criticalDamage": 200,
    "stability": 1628,
    "accuracy": 98,
    "evasion": 1215,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "B",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "nodoka_ex",
      "name": "観測支援",
      "description": "円形範囲内の味方に対して、命中値を47.9%増加（30秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 25.23,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 29.01,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 36.57,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 40.36,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 47.93,
              "duration": 30,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "nodoka_normal",
      "name": "頑なな視線",
      "description": "25秒毎に、敵1人に対して攻撃力の421%分のダメージ/ 回避値を33.7%減少（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.2176,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -17.75,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.3289,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -18.64,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.4395,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -19.52,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.8833,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -23.07,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.9939,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -23.96,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 3.1052,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -24.85,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 3.5483,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -28.4,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 3.6596,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -29.28,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 3.7702,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -30.17,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 4.214,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -33.72,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "nodoka_passive",
      "name": "美学に基づいた観測",
      "description": "命中値を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "nodoka_sub",
      "name": "特別クラスの絆",
      "description": "味方の命中値を17.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
