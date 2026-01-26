import { Character } from '../../types';

export const kaho: Character = {
  "id": "kaho",
  "name": "カホ",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2446,
    "defense": 119,
    "hp": 22350,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 1388,
    "accuracy": 704,
    "evasion": 794,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "kaho_ex",
      "name": "ファンたるもの",
      "description": "敵1人に対して攻撃力の分のダメージ",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 7.4519,
          "hitCount": 16
        },
        {
          "level": 2,
          "damageMultiplier": 8.5693,
          "hitCount": 16
        },
        {
          "level": 3,
          "damageMultiplier": 10.8048,
          "hitCount": 16
        },
        {
          "level": 4,
          "damageMultiplier": 11.9229,
          "hitCount": 16
        },
        {
          "level": 5,
          "damageMultiplier": 14.1584,
          "hitCount": 16
        }
      ]
    },
    "normal": {
      "id": "kaho_normal",
      "name": "精神統一",
      "description": "50秒毎に、状態を付与、を増加（間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.45,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 28.62,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.78,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.06,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.31,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 34.56,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 36.27,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 37.56,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 38.85,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 39.72,
              "duration": 40,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "kaho_passive",
      "name": "ひたむきな情熱",
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
      "id": "kaho_sub",
      "name": "静かなる余裕",
      "description": "状態での攻撃時、攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0556,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.058,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0612,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0717,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0749,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0773,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0886,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.091,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0942,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.1047,
          "hitCount": 1
        }
      ]
    }
  }
};
