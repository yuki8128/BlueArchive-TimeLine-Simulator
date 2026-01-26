import { Character } from '../../types';

export const harunaTrack: Character = {
  "id": "haruna_track",
  "name": "ハルナ（体操服）",
  "rarity": 3,
  "attackType": "sonic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2492,
    "defense": 574,
    "hp": 21459,
    "criticalValue": 270,
    "criticalDamage": 200,
    "stability": 2111,
    "accuracy": 540,
    "evasion": 183,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "haruna_track_ex",
      "name": "美食家のオススメ",
      "description": "円形範囲内の味方4人を指定した位置に移動させた後、治癒力の119%分の回復",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.6303
        },
        {
          "level": 2,
          "healMultiplier": 0.7248
        },
        {
          "level": 3,
          "healMultiplier": 0.9138
        },
        {
          "level": 4,
          "healMultiplier": 1.0083
        },
        {
          "level": 5,
          "healMultiplier": 1.1973
        }
      ]
    },
    "normal": {
      "id": "haruna_track_normal",
      "name": "美食家のアプローチ",
      "description": "40秒毎に、敵6人に対して攻撃力の306%分のダメージ/ 防御力を11%減少（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.6149,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -5.83,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 1.6954,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -6.12,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 1.7766,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -6.41,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.0993,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -7.58,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.1798,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -7.87,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 2.261,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -8.16,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 2.5837,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -9.32,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 2.6642,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -9.62,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 2.7454,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -9.9,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 3.0681,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -11.07,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "haruna_track_passive",
      "name": "癒やしのスイーツ",
      "description": "治癒力を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "haruna_track_sub",
      "name": "スポーツ正餐",
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
