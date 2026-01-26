import { Character } from '../../types';

export const hinaDress: Character = {
  "id": "hina_dress",
  "name": "ヒナ（ドレス）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3467,
    "defense": 412,
    "hp": 17020,
    "criticalValue": 203,
    "criticalDamage": 200,
    "stability": 1372,
    "accuracy": 101,
    "evasion": 176,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "A",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "hina_dress_ex",
      "name": "開演：イシュ・ボシェテ",
      "description": "集中射撃体勢に転換（10秒間）/ 集中射撃体勢では通常攻撃と移動することはできない/ （CC状態になった場合、集中射撃体勢は解除される）",
      "type": "ex",
      "cost": 6,
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
      "id": "hina_dress_normal",
      "name": "抜かりない準備",
      "description": "戦闘開始時、爆発特効を64.91%加算、命中値を451増加（戦闘中に1回のみ）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 238,
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
              "value": 250,
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
              "value": 261,
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
              "value": 309,
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
              "value": 321,
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
              "value": 333,
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
              "value": 380,
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
              "value": 392,
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
              "value": 404,
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
              "value": 451,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "hina_dress_passive",
      "name": "演奏に臨む心",
      "description": "攻撃力を16.2%、会心値を16.2%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critRateFlat",
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
              "type": "attackPercent",
              "value": 11.48,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critRateFlat",
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
              "type": "attackPercent",
              "value": 11.76,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critRateFlat",
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
              "type": "attackPercent",
              "value": 12.88,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critRateFlat",
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
              "type": "attackPercent",
              "value": 13.16,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critRateFlat",
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
              "type": "attackPercent",
              "value": 13.44,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critRateFlat",
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
              "type": "attackPercent",
              "value": 14.56,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critRateFlat",
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
              "type": "attackPercent",
              "value": 14.84,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critRateFlat",
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
              "type": "attackPercent",
              "value": 15.12,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critRateFlat",
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
              "type": "attackPercent",
              "value": 16.24,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critRateFlat",
              "value": 16.24,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "hina_dress_sub",
      "name": "想いをここに",
      "description": "集中射撃体勢中、爆発特効を63.51%加算、挑発状態を無効化",
      "type": "sub",
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
        },
        {
          "level": 6
        },
        {
          "level": 7
        },
        {
          "level": 8
        },
        {
          "level": 9
        },
        {
          "level": 10
        }
      ]
    }
  }
};
