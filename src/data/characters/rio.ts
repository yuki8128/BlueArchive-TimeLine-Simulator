import { Character } from '../../types';

export const rio: Character = {
  "id": "rio",
  "name": "リオ",
  "rarity": 3,
  "attackType": "mystic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2197,
    "defense": 654,
    "hp": 24449,
    "criticalValue": 238,
    "criticalDamage": 200,
    "stability": 1201,
    "accuracy": 714,
    "evasion": 1151,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "rio_ex",
      "name": "ビッグシスター",
      "description": "EXスキルをすぐにドロー後、味方1人のEXスキルカードを複製（複製したカードの使用は1回まで）/ 対象のを増加（20秒間）/ （複製したカードは、対象のEXスキルのカード状態に従います） （複製したカードのコストは、対象のEXスキルの基本コストから1減少した値を持ちます）（最小0）",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 35.49,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 38.15,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 43.47,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 46.13,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 51.45,
              "duration": 20,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "rio_normal",
      "name": "ただ一つの解",
      "description": "30秒毎に、敵1人に対してを減少（19秒間）/ 攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.8592,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -19.63,
              "duration": 19,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 1.9523,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -19.63,
              "duration": 19,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.0447,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -19.63,
              "duration": 19,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.2309,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -21.59,
              "duration": 19,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.324,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -21.59,
              "duration": 19,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 2.4164,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -21.59,
              "duration": 19,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 2.6026,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -23.55,
              "duration": 19,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 2.6957,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -23.55,
              "duration": 19,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 2.7881,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -23.55,
              "duration": 19,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 2.9743,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -25.51,
              "duration": 19,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "rio_passive",
      "name": "星を追う者",
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
      "id": "rio_sub",
      "name": "アバンギャルド",
      "description": "味方のを増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 9.12,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 9.57,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 10.03,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.86,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 12.31,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 12.77,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.59,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.04,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.5,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.32,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
