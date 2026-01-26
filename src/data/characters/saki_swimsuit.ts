import { Character } from '../../types';

export const sakiSwimsuit: Character = {
  "id": "saki_swimsuit",
  "name": "サキ（水着）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2839,
    "defense": 298,
    "hp": 16440,
    "criticalValue": 210,
    "criticalDamage": 200,
    "stability": 1324,
    "accuracy": 420,
    "evasion": 189,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "saki_swimsuit_ex",
      "name": "シグナルフレア、投擲！",
      "description": "敵1人に対して、攻撃力の分のダメージ/ さらに、、を減少（50秒間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.9057,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.98,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "attackPercent",
              "value": -10.98,
              "duration": 50,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 3.3418,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -12.63,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "attackPercent",
              "value": -12.63,
              "duration": 50,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 4.2134,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -15.92,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "attackPercent",
              "value": -15.92,
              "duration": 50,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 4.6495,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -17.56,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "attackPercent",
              "value": -17.56,
              "duration": 50,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 5.5211,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.85,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "attackPercent",
              "value": -20.85,
              "duration": 50,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "saki_swimsuit_normal",
      "name": "援護射撃",
      "description": "通常攻撃15回毎に、扇形範囲内の敵に対して、攻撃力の分のダメージ/ 中型の敵に対して攻撃力の分の追加ダメージ ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.955,
          "hitCount": 15
        },
        {
          "level": 2,
          "damageMultiplier": 2.0528,
          "hitCount": 15
        },
        {
          "level": 3,
          "damageMultiplier": 2.1506,
          "hitCount": 15
        },
        {
          "level": 4,
          "damageMultiplier": 2.5413,
          "hitCount": 15
        },
        {
          "level": 5,
          "damageMultiplier": 2.6391,
          "hitCount": 15
        },
        {
          "level": 6,
          "damageMultiplier": 2.7369,
          "hitCount": 15
        },
        {
          "level": 7,
          "damageMultiplier": 3.1281,
          "hitCount": 15
        },
        {
          "level": 8,
          "damageMultiplier": 3.2253,
          "hitCount": 15
        },
        {
          "level": 9,
          "damageMultiplier": 3.3231,
          "hitCount": 15
        },
        {
          "level": 10,
          "damageMultiplier": 3.7144,
          "hitCount": 15
        }
      ]
    },
    "passive": {
      "id": "saki_swimsuit_passive",
      "name": "丁寧な整備",
      "description": "を増加",
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
      "id": "saki_swimsuit_sub",
      "name": "戦友への愛",
      "description": "自身とスペシャル生徒のを増加",
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
