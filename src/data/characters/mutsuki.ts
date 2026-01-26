import { Character } from '../../types';

export const mutsuki: Character = {
  "id": "mutsuki",
  "name": "ムツキ",
  "nameEn": "Mutsuki",
  "rarity": 2,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 1900,
    "defense": 482,
    "hp": 19590,
    "criticalValue": 199,
    "criticalDamage": 200,
    "stability": 1404,
    "accuracy": 99,
    "evasion": 199,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "A",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "mutsuki_ex",
      "name": "灼熱のセレナーデ",
      "description": "3つの円形範囲内の敵に攻撃力の分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.0972,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 4.712,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 5.9416,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 6.5564,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 7.7849,
          "hitCount": 3
        }
      ]
    },
    "normal": {
      "id": "mutsuki_normal",
      "name": "爆裂のアリア",
      "description": "攻撃力の分のダメージを与える地雷を、20秒毎に3つ設置（それぞれ15秒で消失）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.3459,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 3.513,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 3.6812,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 4.3495,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 4.5166,
          "hitCount": 3
        },
        {
          "level": 6,
          "damageMultiplier": 4.6847,
          "hitCount": 3
        },
        {
          "level": 7,
          "damageMultiplier": 5.353,
          "hitCount": 3
        },
        {
          "level": 8,
          "damageMultiplier": 5.5212,
          "hitCount": 3
        },
        {
          "level": 9,
          "damageMultiplier": 5.6883,
          "hitCount": 3
        },
        {
          "level": 10,
          "damageMultiplier": 6.3566,
          "hitCount": 3
        }
      ]
    },
    "passive": {
      "id": "mutsuki_passive",
      "name": "楽しく遊ぼう！",
      "description": "を増加",
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
      "id": "mutsuki_sub",
      "name": "楽しくいこっか？",
      "description": "通常攻撃時、25%の確率でを増加（30秒間）（クールタイム25秒）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 30.24,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 31.76,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 33.27,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 39.32,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 40.83,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 42.34,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 48.39,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 49.9,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 51.41,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 57.46,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
