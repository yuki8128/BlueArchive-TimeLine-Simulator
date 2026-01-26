import { Character } from '../../types';

export const miyako: Character = {
  "id": "miyako",
  "name": "ミヤコ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1299,
    "defense": 164,
    "hp": 45680,
    "criticalValue": 217,
    "criticalDamage": 200,
    "stability": 1272,
    "accuracy": 108,
    "evasion": 1312,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "miyako_ex",
      "name": "自走式閃光ドローン",
      "description": "敵1人に対して、攻撃力の分のダメージ さらにを付与（間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.4081,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.9201,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.4311,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 4.9421,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.4531,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "miyako_normal",
      "name": "クレイモア",
      "description": "40秒毎に小型クレイモアから5つの破片が飛散し、それぞれ攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.8424,
          "hitCount": 5
        },
        {
          "level": 2,
          "damageMultiplier": 0.8845,
          "hitCount": 5
        },
        {
          "level": 3,
          "damageMultiplier": 0.9266,
          "hitCount": 5
        },
        {
          "level": 4,
          "damageMultiplier": 1.0951,
          "hitCount": 5
        },
        {
          "level": 5,
          "damageMultiplier": 1.137,
          "hitCount": 5
        },
        {
          "level": 6,
          "damageMultiplier": 1.1791,
          "hitCount": 5
        },
        {
          "level": 7,
          "damageMultiplier": 1.3476,
          "hitCount": 5
        },
        {
          "level": 8,
          "damageMultiplier": 1.3897,
          "hitCount": 5
        },
        {
          "level": 9,
          "damageMultiplier": 1.4318,
          "hitCount": 5
        },
        {
          "level": 10,
          "damageMultiplier": 1.6003,
          "hitCount": 5
        }
      ]
    },
    "passive": {
      "id": "miyako_passive",
      "name": "特殊防弾プレート",
      "description": "を増加",
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
      "id": "miyako_sub",
      "name": "攪乱作戦",
      "description": "EXスキルの使用時、を減少（16秒間）",
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
