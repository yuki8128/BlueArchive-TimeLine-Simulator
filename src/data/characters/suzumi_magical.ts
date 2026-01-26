import { Character } from '../../types';

export const suzumiMagical: Character = {
  "id": "suzumi_magical",
  "name": "スズミ（マジカル）",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2810,
    "defense": 100,
    "hp": 19050,
    "criticalValue": 209,
    "criticalDamage": 200,
    "stability": 1332,
    "accuracy": 732,
    "evasion": 762,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "suzumi_magical_ex",
      "name": "基礎魔法、です！",
      "description": "編成したストライカーの味方および、編成した味方の召喚物の攻撃力を51.4%増加、基礎熟練度を25.9%加算（41秒間）/ （基礎熟練度：与える通常攻撃、ノーマルスキル、サブスキルのダメージ増加）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.06,
              "duration": 41,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 31.12,
              "duration": 41,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 39.23,
              "duration": 41,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 43.29,
              "duration": 41,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 51.41,
              "duration": 41,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "suzumi_magical_normal",
      "name": "マジカル閃光弾",
      "description": "35秒毎に、敵1人の回避値を27.4%減少（27秒間）/ 攻撃力の341%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.6296,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -17.16,
              "duration": 27,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.6296,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -18.02,
              "duration": 27,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.6296,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -18.88,
              "duration": 27,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.8924,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -20.59,
              "duration": 27,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.8924,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -21.45,
              "duration": 27,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 2.8924,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -22.31,
              "duration": 27,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 3.1552,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -24.02,
              "duration": 27,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 3.1552,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -24.88,
              "duration": 27,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 3.1552,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -25.74,
              "duration": 27,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 3.418,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -27.45,
              "duration": 27,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "suzumi_magical_passive",
      "name": "マジカル制圧射撃",
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
      "id": "suzumi_magical_sub",
      "name": "誰かを助けるための",
      "description": "EXスキルの使用時、コスト回復力を690増加（35秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 363,
              "duration": 35,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 382,
              "duration": 35,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 400,
              "duration": 35,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 472,
              "duration": 35,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 490,
              "duration": 35,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 509,
              "duration": 35,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 581,
              "duration": 35,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 599,
              "duration": 35,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 617,
              "duration": 35,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 690,
              "duration": 35,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
