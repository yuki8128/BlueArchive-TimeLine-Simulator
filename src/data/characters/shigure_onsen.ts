import { Character } from '../../types';

export const shigureOnsen: Character = {
  "id": "shigure_onsen",
  "name": "シグレ（温泉）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2521,
    "defense": 566,
    "hp": 21172,
    "criticalValue": 273,
    "criticalDamage": 200,
    "stability": 1040,
    "accuracy": 820,
    "evasion": 181,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "shigure_onsen_ex",
      "name": "シグレ特製フルーツ牛乳",
      "description": "円形範囲内の味方に対して4秒毎に、治癒力の40.4%分の回復（30秒間）",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.213
        },
        {
          "level": 2,
          "healMultiplier": 0.245
        },
        {
          "level": 3,
          "healMultiplier": 0.3088
        },
        {
          "level": 4,
          "healMultiplier": 0.3408
        },
        {
          "level": 5,
          "healMultiplier": 0.4045
        }
      ]
    },
    "normal": {
      "id": "shigure_onsen_normal",
      "name": "一口、どう？",
      "description": "50秒毎に、HPが最も低い味方4人に対して治癒力の128%分の回復",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.676
        },
        {
          "level": 2,
          "healMultiplier": 0.7098
        },
        {
          "level": 3,
          "healMultiplier": 0.7435
        },
        {
          "level": 4,
          "healMultiplier": 0.8788
        },
        {
          "level": 5,
          "healMultiplier": 0.9125
        },
        {
          "level": 6,
          "healMultiplier": 0.9465
        },
        {
          "level": 7,
          "healMultiplier": 1.0815
        },
        {
          "level": 8,
          "healMultiplier": 1.1153
        },
        {
          "level": 9,
          "healMultiplier": 1.1493
        },
        {
          "level": 10,
          "healMultiplier": 1.2843
        }
      ]
    },
    "passive": {
      "id": "shigure_onsen_passive",
      "name": "四畳半の温もり",
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
      "id": "shigure_onsen_sub",
      "name": "ピリッとした風味",
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
