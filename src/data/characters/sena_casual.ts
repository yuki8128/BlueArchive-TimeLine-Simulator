import { Character } from '../../types';

export const senaCasual: Character = {
  "id": "sena_casual",
  "name": "セナ（私服）",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 3798,
    "defense": 146,
    "hp": 24360,
    "criticalValue": 205,
    "criticalDamage": 200,
    "stability": 972,
    "accuracy": 102,
    "evasion": 136,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "sena_casual_ex",
      "name": "救急対応",
      "description": "円形範囲内の味方に対して、治癒力の53%分の持続回復を付与（32秒間）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1
        },
        {
          "level": 2
        },
        {
          "level": 3
        },
        {
          "level": 4
        },
        {
          "level": 5
        }
      ]
    },
    "normal": {
      "id": "sena_casual_normal",
      "name": "救急医学部長の務め",
      "description": "40秒毎に、治癒力を35.3%増加、攻撃速度を35.3%増加（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 18.61,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 19.54,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 20.47,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 24.2,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 25.12,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 26.05,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 29.78,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 30.71,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 31.64,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 35.35,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "sena_casual_passive",
      "name": "休日対応",
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
      "id": "sena_casual_sub",
      "name": "あふれる好奇心",
      "description": "通常攻撃の範囲の半径が2倍に増加し、攻撃力の83.8%分のダメージを与えるように変更",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.6167,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.629,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.6414,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.6909,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.7033,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.7157,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.7644,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.7768,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.7892,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.8387,
          "hitCount": 1
        }
      ]
    }
  }
};
