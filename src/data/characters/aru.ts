import { Character } from '../../types';

export const aru: Character = {
  "id": "aru",
  "name": "アル",
  "nameEn": "Aru",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3690,
    "defense": 119,
    "hp": 19390,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 1988,
    "accuracy": 905,
    "evasion": 201,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "aru_ex",
      "name": "ハードボイルドショット",
      "description": "敵1人に対して、攻撃力の521%分のダメージ/ さらに、円形範囲内の敵に攻撃力の554%分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.7438,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.1554,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 3.9781,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 4.3898,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.2125,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "aru_normal",
      "name": "ノワールシュート",
      "description": "25秒毎に、敵1人に対して攻撃力の290%分のダメージ/ 50%の確率で、さらに円形範囲内の敵に攻撃力の476%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.527,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.6035,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.6801,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.9851,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.0617,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.1376,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.4433,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.5198,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.5958,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.9014,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "aru_passive",
      "name": "社長の威厳",
      "description": "会心ダメージ率を26.6%増加",
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
      "id": "aru_sub",
      "name": "アウトローの流儀",
      "description": "EXスキルの使用中、会心値を38.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 20.16,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 21.17,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 22.18,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 26.21,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 27.22,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 28.23,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 32.26,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 33.27,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 34.28,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 38.31,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
