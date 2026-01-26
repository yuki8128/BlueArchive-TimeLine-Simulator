import { Character } from '../../types';

export const maki: Character = {
  "id": "maki",
  "name": "マキ",
  "nameEn": "Maki",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2265,
    "defense": 488,
    "hp": 19840,
    "criticalValue": 245,
    "criticalDamage": 200,
    "stability": 1424,
    "accuracy": 98,
    "evasion": 196,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "C",
    "outdoor": "S",
    "indoor": "C"
  },
  "skills": {
    "ex": {
      "id": "maki_ex",
      "name": "世界をもっと色鮮やかに！",
      "description": "敵1人に対して、攻撃力の1081%分のダメージ/ 攻撃力を54.5%増加（30秒間）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 6.7617,
          "hitCount": 11,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 41.94,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 7.7767,
          "hitCount": 11,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 41.94,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 8.7908,
          "hitCount": 11,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 48.23,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 9.8048,
          "hitCount": 11,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 48.23,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 10.8189,
          "hitCount": 11,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 54.52,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "maki_normal",
      "name": "くらえ、ペイントボール！",
      "description": "25秒毎に、敵1人の防御力を34.8%減少、マーク状態を付与（15秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.37,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -19.29,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.21,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -23.88,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -24.8,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -25.72,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -29.38,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -30.31,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -31.22,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -34.89,
              "duration": 15,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "maki_passive",
      "name": "芸術的な演出",
      "description": "攻撃速度を26.6%増加",
      "type": "passive",
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
    },
    "sub": {
      "id": "maki_sub",
      "name": "芸術の苦しみ",
      "description": "マーク状態の敵を攻撃時、攻撃力の28.3%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.149,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.1572,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.1644,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.1942,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.2014,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.2086,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.2384,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.2466,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.2538,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.2836,
          "hitCount": 1
        }
      ]
    }
  }
};
