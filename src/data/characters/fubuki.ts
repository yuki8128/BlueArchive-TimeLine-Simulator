import { Character } from '../../types';

export const fubuki: Character = {
  "id": "fubuki",
  "name": "フブキ",
  "rarity": 1,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2476,
    "defense": 118,
    "hp": 19330,
    "criticalValue": 252,
    "criticalDamage": 200,
    "stability": 1980,
    "accuracy": 908,
    "evasion": 198,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "B",
    "indoor": "C"
  },
  "skills": {
    "ex": {
      "id": "fubuki_ex",
      "name": "まずは甘い休息から",
      "description": "攻撃力を69.4%増加（46秒間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 36.57,
              "duration": 46,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 42.05,
              "duration": 46,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 53.02,
              "duration": 46,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 58.5,
              "duration": 46,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 69.47,
              "duration": 46,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "fubuki_normal",
      "name": "最後のひと口！",
      "description": "弾薬が3以下になる毎に、敵1人に対して攻撃力の361%分のダメージ さらに気絶状態を付与（2.5秒間） 弾薬数が3減少",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.2582,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 2.3716,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 2.4843,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 2.7104,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 2.8231,
          "hitCount": 3
        },
        {
          "level": 6,
          "damageMultiplier": 2.9358,
          "hitCount": 3
        },
        {
          "level": 7,
          "damageMultiplier": 3.1619,
          "hitCount": 3
        },
        {
          "level": 8,
          "damageMultiplier": 3.2746,
          "hitCount": 3
        },
        {
          "level": 9,
          "damageMultiplier": 3.3872,
          "hitCount": 3
        },
        {
          "level": 10,
          "damageMultiplier": 3.6134,
          "hitCount": 3
        }
      ]
    },
    "passive": {
      "id": "fubuki_passive",
      "name": "交通整理",
      "description": "CC強化力を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "fubuki_sub",
      "name": "便乗させてもらおっかな",
      "description": "自身を除く味方のEXスキルの使用開始時、攻撃力を33.5%増加（10秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.64,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.53,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.41,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.94,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 23.82,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.7,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 28.23,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.11,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.99,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.52,
              "duration": 10,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
