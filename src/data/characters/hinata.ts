import { Character } from '../../types';

export const hinata: Character = {
  "id": "hinata",
  "name": "ヒナタ",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1741,
    "defense": 118,
    "hp": 22220,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 984,
    "accuracy": 101,
    "evasion": 1086,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "hinata_ex",
      "name": "最終手段",
      "description": "5つの円形範囲内の敵に対して、攻撃力の分のダメージ",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.5083,
          "hitCount": 5
        },
        {
          "level": 2,
          "damageMultiplier": 2.8846,
          "hitCount": 5
        },
        {
          "level": 3,
          "damageMultiplier": 3.6372,
          "hitCount": 5
        },
        {
          "level": 4,
          "damageMultiplier": 4.0127,
          "hitCount": 5
        },
        {
          "level": 5,
          "damageMultiplier": 4.7654,
          "hitCount": 5
        }
      ]
    },
    "normal": {
      "id": "hinata_normal",
      "name": "まずはお話を……！",
      "description": "20秒毎に、HPが最も高い敵1人に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.2386,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 2.3504,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 2.4621,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 2.9098,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 3.0215,
          "hitCount": 3
        },
        {
          "level": 6,
          "damageMultiplier": 3.1341,
          "hitCount": 3
        },
        {
          "level": 7,
          "damageMultiplier": 3.581,
          "hitCount": 3
        },
        {
          "level": 8,
          "damageMultiplier": 3.6935,
          "hitCount": 3
        },
        {
          "level": 9,
          "damageMultiplier": 3.8052,
          "hitCount": 3
        },
        {
          "level": 10,
          "damageMultiplier": 4.253,
          "hitCount": 3
        }
      ]
    },
    "passive": {
      "id": "hinata_passive",
      "name": "思いがけない展開",
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
      "id": "hinata_sub",
      "name": "力仕事はお任せを！",
      "description": "攻撃時、中型の敵に対して攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.2184,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.2294,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.2403,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.284,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.2949,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.3058,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.3495,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.3604,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.3713,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.415,
          "hitCount": 1
        }
      ]
    }
  }
};
