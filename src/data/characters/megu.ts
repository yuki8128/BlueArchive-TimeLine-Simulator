import { Character } from '../../types';

export const megu: Character = {
  "id": "megu",
  "name": "メグ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1726,
    "defense": 764,
    "hp": 29790,
    "criticalValue": 261,
    "criticalDamage": 200,
    "stability": 1336,
    "accuracy": 1044,
    "evasion": 191,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "megu_ex",
      "name": "熱いの好きだよね～！",
      "description": "扇形範囲内の敵に対して攻撃力の分のダメージ/ 自身のを増加、通常攻撃のディレイ無視（30秒間）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.5401,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.73,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 4.0705,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.73,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 5.1326,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.73,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 5.6636,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.73,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 6.1947,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.23,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "megu_normal",
      "name": "あっためてあげる！",
      "description": "40秒毎に、円形範囲内の敵に対して、攻撃力の分の持続ダメージを付与（10秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.1796,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.1883,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.1976,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.2336,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.2423,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.251,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.2871,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.2964,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.3051,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.3411,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "megu_passive",
      "name": "よゆ～よゆ～！",
      "description": "を、を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 11.2,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 11.48,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 11.48,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 11.76,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 11.76,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 12.88,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 12.88,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 13.16,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 13.16,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 13.44,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 13.44,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 14.56,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 14.56,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 14.84,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 14.84,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 15.12,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 15.12,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 16.24,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 16.24,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "megu_sub",
      "name": "あ～すっきりした！",
      "description": "50回敵を命中した時、治癒力の分の回復",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.3
        },
        {
          "level": 2,
          "healMultiplier": 0.315
        },
        {
          "level": 3,
          "healMultiplier": 0.33
        },
        {
          "level": 4,
          "healMultiplier": 0.39
        },
        {
          "level": 5,
          "healMultiplier": 0.405
        },
        {
          "level": 6,
          "healMultiplier": 0.42
        },
        {
          "level": 7,
          "healMultiplier": 0.48
        },
        {
          "level": 8,
          "healMultiplier": 0.495
        },
        {
          "level": 9,
          "healMultiplier": 0.51
        },
        {
          "level": 10,
          "healMultiplier": 0.57
        }
      ]
    }
  }
};
