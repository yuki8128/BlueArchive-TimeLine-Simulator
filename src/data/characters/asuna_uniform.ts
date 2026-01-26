import { Character } from '../../types';

export const asunaUniform: Character = {
  "id": "asuna_uniform",
  "name": "アスナ（制服）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2363,
    "defense": 106,
    "hp": 20310,
    "criticalValue": 196,
    "criticalDamage": 200,
    "stability": 1420,
    "accuracy": 688,
    "evasion": 812,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "asuna_uniform_ex",
      "name": "こっち、こっち！",
      "description": "自身とスペシャル生徒の攻撃力を63.5%増加（19秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.44,
              "duration": 19,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 33.44,
              "duration": 19,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 38.46,
              "duration": 19,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 38.46,
              "duration": 19,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 48.49,
              "duration": 19,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 48.49,
              "duration": 19,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 53.51,
              "duration": 19,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 53.51,
              "duration": 19,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 63.54,
              "duration": 19,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 63.54,
              "duration": 19,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "asuna_uniform_normal",
      "name": "はい、チーズ！",
      "description": "40秒毎に、自身を除く円形範囲内の味方に対して治癒力の98.2%分の回復",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.517
        },
        {
          "level": 2,
          "healMultiplier": 0.5428
        },
        {
          "level": 3,
          "healMultiplier": 0.5685
        },
        {
          "level": 4,
          "healMultiplier": 0.672
        },
        {
          "level": 5,
          "healMultiplier": 0.6978
        },
        {
          "level": 6,
          "healMultiplier": 0.7235
        },
        {
          "level": 7,
          "healMultiplier": 0.827
        },
        {
          "level": 8,
          "healMultiplier": 0.8528
        },
        {
          "level": 9,
          "healMultiplier": 0.8788
        },
        {
          "level": 10,
          "healMultiplier": 0.982
        }
      ]
    },
    "passive": {
      "id": "asuna_uniform_passive",
      "name": "頑張ってこー！",
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
      "id": "asuna_uniform_sub",
      "name": "こっち行くよ！",
      "description": "自身とスペシャル生徒の攻撃力を30.6%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.11,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 16.11,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.92,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 16.92,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.73,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 17.73,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.95,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 20.95,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.75,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 21.75,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.56,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 22.56,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.78,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 25.78,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.58,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 26.58,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.39,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 27.39,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 30.61,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 30.61,
              "duration": 999,
              "target": "ally"
            }
          ]
        }
      ]
    }
  }
};
