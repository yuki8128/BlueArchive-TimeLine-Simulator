import { Character } from '../../types';

export const sakurakoIdol: Character = {
  "id": "sakurako_idol",
  "name": "サクラコ（アイドル）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1890,
    "defense": 119,
    "hp": 22470,
    "criticalValue": 200,
    "criticalDamage": 200,
    "stability": 1396,
    "accuracy": 700,
    "evasion": 799,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "sakurako_idol_ex",
      "name": "ギャップ萌え",
      "description": "自身とスペシャル生徒の会心値を24.2%増加、会心ダメージ率を45%増加（17秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 16.73,
              "duration": 17,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 31.07,
              "duration": 17,
              "target": "ally"
            },
            {
              "type": "critRateFlat",
              "value": 16.73,
              "duration": 17,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 31.07,
              "duration": 17,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 17.99,
              "duration": 17,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 33.39,
              "duration": 17,
              "target": "ally"
            },
            {
              "type": "critRateFlat",
              "value": 17.99,
              "duration": 17,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 33.39,
              "duration": 17,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 20.49,
              "duration": 17,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 38.06,
              "duration": 17,
              "target": "ally"
            },
            {
              "type": "critRateFlat",
              "value": 20.49,
              "duration": 17,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 38.06,
              "duration": 17,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 21.75,
              "duration": 17,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 40.39,
              "duration": 17,
              "target": "ally"
            },
            {
              "type": "critRateFlat",
              "value": 21.75,
              "duration": 17,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 40.39,
              "duration": 17,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 24.26,
              "duration": 17,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 45.04,
              "duration": 17,
              "target": "ally"
            },
            {
              "type": "critRateFlat",
              "value": 24.26,
              "duration": 17,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 45.04,
              "duration": 17,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "sakurako_idol_normal",
      "name": "あなたが一番",
      "description": "35秒毎に、攻撃力を30.1%増加、攻撃速度を30.1%増加（25秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.81,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.33,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.85,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 23.93,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.45,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.97,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.05,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.57,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 28.09,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 30.17,
              "duration": 25,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "sakurako_idol_passive",
      "name": "いつも見守っております",
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
      "id": "sakurako_idol_sub",
      "name": "皆に声援を",
      "description": "自身とスペシャル生徒の会心ダメージ率を30.6%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 16.11,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 16.92,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 17.73,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 20.95,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 21.75,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 22.56,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 25.78,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 26.58,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 27.39,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 30.61,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
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
