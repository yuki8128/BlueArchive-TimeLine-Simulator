import { Character } from '../../types';

export const haruna: Character = {
  "id": "haruna",
  "name": "ハルナ",
  "nameEn": "Haruna",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3747,
    "defense": 116,
    "hp": 18970,
    "criticalValue": 205,
    "criticalDamage": 200,
    "stability": 1944,
    "accuracy": 924,
    "evasion": 205,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "haruna_ex",
      "name": "貫くエレガンス",
      "description": "直線範囲内の敵に対して、攻撃力の887%分のダメージ/ 敵を貫通する度にダメージが10%減少（最少で30%ダメージまで）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.0696,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 5.8299,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 7.3506,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 8.1116,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 8.8719,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "haruna_normal",
      "name": "爆発するエキゾチック",
      "description": "30秒毎に、敵1人に対して攻撃力の380%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.0021,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.1025,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.2028,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.6031,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.7029,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.8033,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.2036,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.304,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.4038,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 3.8041,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "haruna_passive",
      "name": "美食家の気品",
      "description": "HPを26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "haruna_sub",
      "name": "美食家の冷静さ",
      "description": "移動していない時、攻撃力を19.1%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 10.08,
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
              "value": 10.59,
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
              "value": 11.09,
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
              "value": 13.11,
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
              "value": 13.61,
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
              "value": 14.12,
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
              "value": 16.13,
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
              "value": 16.64,
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
              "value": 17.14,
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
              "value": 19.16,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
