import { Character } from '../../types';

export const niya: Character = {
  "id": "niya",
  "name": "ニヤ",
  "rarity": 3,
  "attackType": "sonic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 3107,
    "defense": 385,
    "hp": 14387,
    "criticalValue": 259,
    "criticalDamage": 200,
    "stability": 1104,
    "accuracy": 777,
    "evasion": 1059,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "niya_ex",
      "name": "なぁんにも、してませんよ？",
      "description": "円形範囲内の敵に対して、を減少（26秒間）/ 円形範囲内の敵の数によって、範囲内の敵に対して、 3人以下：攻撃力の分のダメージ 4～6人：攻撃力の分のダメージ 7人以上：攻撃力の分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.8417,
          "hitCount": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -17.54,
              "duration": 26,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.1175,
          "hitCount": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.17,
              "duration": 26,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.6705,
          "hitCount": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -25.44,
              "duration": 26,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.9463,
          "hitCount": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -28.06,
              "duration": 26,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 3.4986,
          "hitCount": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -33.32,
              "duration": 26,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "niya_normal",
      "name": "悪霊退散",
      "description": "30秒毎に、円形範囲内の敵に対して率を減少（20秒間）/ 攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.4,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 1.505,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 1.61,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 1.925,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 2.03,
          "hitCount": 3
        },
        {
          "level": 6,
          "damageMultiplier": 2.205,
          "hitCount": 3
        },
        {
          "level": 7,
          "damageMultiplier": 2.52,
          "hitCount": 3
        },
        {
          "level": 8,
          "damageMultiplier": 2.59,
          "hitCount": 3
        },
        {
          "level": 9,
          "damageMultiplier": 2.66,
          "hitCount": 3
        },
        {
          "level": 10,
          "damageMultiplier": 2.8,
          "hitCount": 3
        }
      ]
    },
    "passive": {
      "id": "niya_passive",
      "name": "ドーマン・セーマン",
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
      "id": "niya_sub",
      "name": "急急如律令",
      "description": "味方のを増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 10.68,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 11.21,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 11.75,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 13.89,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 14.42,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 14.95,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 17.09,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 17.62,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 18.15,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 20.29,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
