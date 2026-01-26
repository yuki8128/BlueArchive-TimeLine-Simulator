import { Character } from '../../types';

export const nonomi: Character = {
  "id": "nonomi",
  "name": "ノノミ",
  "nameEn": "Nonomi",
  "rarity": 2,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2631,
    "defense": 483,
    "hp": 19630,
    "criticalValue": 198,
    "criticalDamage": 200,
    "stability": 1408,
    "accuracy": 99,
    "evasion": 198,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "A",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "nonomi_ex",
      "name": "お仕置きの時間です～♣",
      "description": "扇形範囲内の敵に対して、攻撃力の分のダメージ",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.3254,
          "hitCount": 2
        },
        {
          "level": 2,
          "damageMultiplier": 4.9737,
          "hitCount": 2
        },
        {
          "level": 3,
          "damageMultiplier": 6.2713,
          "hitCount": 2
        },
        {
          "level": 4,
          "damageMultiplier": 6.9204,
          "hitCount": 2
        },
        {
          "level": 5,
          "damageMultiplier": 8.2179,
          "hitCount": 2
        }
      ]
    },
    "normal": {
      "id": "nonomi_normal",
      "name": "じゃ～ん☆",
      "description": "30秒毎に、を増加（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.84,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.93,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.02,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 28.39,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.48,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 30.57,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 34.93,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 36.03,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 37.12,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 41.49,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "nonomi_passive",
      "name": "めっ、ですよ！",
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
      "id": "nonomi_sub",
      "name": "綺麗にお掃除します～♧",
      "description": "攻撃時、大型の敵に対して攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0675,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0714,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0745,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0879,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.091,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0949,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.1082,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.1114,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.1145,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.1286,
          "hitCount": 1
        }
      ]
    }
  }
};
