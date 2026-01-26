import { Character } from '../../types';

export const ioriSwimsuit: Character = {
  "id": "iori_swimsuit",
  "name": "イオリ（水着）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3511,
    "defense": 107,
    "hp": 17430,
    "criticalValue": 221,
    "criticalDamage": 200,
    "stability": 1784,
    "accuracy": 995,
    "evasion": 178,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "iori_swimsuit_ex",
      "name": "疾風怒濤",
      "description": "円形範囲内の敵に対して、攻撃力の880%分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.6337,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 5.3285,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 6.7189,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 7.4137,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 8.8041,
          "hitCount": 3
        }
      ]
    },
    "normal": {
      "id": "iori_swimsuit_normal",
      "name": "快刀乱麻",
      "description": "25秒毎に敵1人に対して、攻撃力の297%分のダメージ/ さらに攻撃力の66.3%分の悪寒持続ダメージを付与（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.8609,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.9537,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.0471,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.2326,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.3261,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.4189,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.6051,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.6978,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.7913,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.9768,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "iori_swimsuit_passive",
      "name": "精密射撃",
      "description": "攻撃力を26.6%増加",
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
      "id": "iori_swimsuit_sub",
      "name": "スペシャリストの威圧",
      "description": "攻撃時、25%の確率で攻撃力の64.8%分の悪寒持続ダメージを付与（20秒間）（クールタイム10秒）",
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
