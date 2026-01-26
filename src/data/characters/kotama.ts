import { Character } from '../../types';

export const kotama: Character = {
  "id": "kotama",
  "name": "コタマ",
  "nameEn": "Kotama",
  "rarity": 1,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 1402,
    "defense": 119,
    "hp": 16790,
    "criticalValue": 200,
    "criticalDamage": 200,
    "stability": 1145,
    "accuracy": 100,
    "evasion": 1101,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "C",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "kotama_ex",
      "name": "傍受開始",
      "description": "円形範囲内の味方の攻撃力を47.4%増加（30秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.97,
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
              "value": 28.71,
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
              "value": 36.2,
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
              "value": 39.95,
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
              "value": 47.44,
              "duration": 30,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "kotama_normal",
      "name": "弱点を盗聴",
      "description": "30秒毎に、敵1人に対して攻撃力の450%分のダメージ/ さらに攻撃力を18.9%減少（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.373,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.492,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.6103,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 3.0849,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 3.2039,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 3.3222,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 3.7968,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 3.9158,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 4.0341,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 4.5087,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.99,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "kotama_passive",
      "name": "集中解析",
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
      "id": "kotama_sub",
      "name": "電波拡散",
      "description": "味方の攻撃力を17.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
