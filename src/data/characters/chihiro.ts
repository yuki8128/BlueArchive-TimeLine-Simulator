import { Character } from '../../types';

export const chihiro: Character = {
  "id": "chihiro",
  "name": "チヒロ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2701,
    "defense": 118,
    "hp": 16595,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1587,
    "accuracy": 708,
    "evasion": 789,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "chihiro_ex",
      "name": "オーバーライド",
      "description": "敵1人に対して、攻撃力の412%分のダメージ その敵の防御タイプが重装甲の場合、さらに気絶状態を付与（7.5秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.5795,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.9666,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 3.3537,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 3.7401,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 4.1272,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "chihiro_normal",
      "name": "イントゥ・ザ・バックドア",
      "description": "30秒毎に、攻撃力が最も高い敵1人の攻撃力を32.2%減少（23秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -16.96,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -17.81,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.65,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -22.05,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -22.89,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -23.74,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -27.13,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -27.98,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -28.82,
              "duration": 23,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -32.22,
              "duration": 23,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "chihiro_passive",
      "name": "エクスプロイト",
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
      "id": "chihiro_sub",
      "name": "ファイアウォール構築",
      "description": "味方のCC強化力を17.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
