import { Character } from '../../types';

export const miyu: Character = {
  "id": "miyu",
  "name": "ミユ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2645,
    "defense": 113,
    "hp": 18450,
    "criticalValue": 210,
    "criticalDamage": 200,
    "stability": 1888,
    "accuracy": 948,
    "evasion": 189,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "miyu_ex",
      "name": "小心者の観測",
      "description": "敵1人に対してを付与（10秒間） の敵への攻撃時に、ミユの攻撃力の分の追加ダメージ （このダメージにおいては、会心が発動しません） （最大120発分まで適用されます）",
      "type": "ex",
      "cost": 3,
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
      "id": "miyu_normal",
      "name": "予期せぬ角度からの一撃",
      "description": "通常攻撃5回毎に、敵1人に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.4895,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.5641,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.6388,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.9363,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.011,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.0857,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.3832,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.4579,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.532,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.8301,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "miyu_passive",
      "name": "深呼吸",
      "description": "率を増加",
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
      "id": "miyu_sub",
      "name": "狙撃用の特殊弾",
      "description": "リロード時、率を増加（13秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 18.96,
              "duration": 13,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 19.91,
              "duration": 13,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 20.85,
              "duration": 13,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 24.64,
              "duration": 13,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 25.59,
              "duration": 13,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 26.54,
              "duration": 13,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 30.33,
              "duration": 13,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 31.27,
              "duration": 13,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 32.23,
              "duration": 13,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 36.01,
              "duration": 13,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
