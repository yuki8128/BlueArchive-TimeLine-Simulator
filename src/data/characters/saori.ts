import { Character } from '../../types';

export const saori: Character = {
  "id": "saori",
  "name": "サオリ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2164,
    "defense": 117,
    "hp": 22090,
    "criticalValue": 203,
    "criticalDamage": 200,
    "stability": 1372,
    "accuracy": 712,
    "evasion": 785,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "saori_ex",
      "name": "et omnia vanitas！",
      "description": "敵1人に対して、攻撃力の1275%分の確定会心ダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 6.7143,
          "hitCount": 5
        },
        {
          "level": 2,
          "damageMultiplier": 7.7212,
          "hitCount": 5
        },
        {
          "level": 3,
          "damageMultiplier": 9.7358,
          "hitCount": 5
        },
        {
          "level": 4,
          "damageMultiplier": 10.7427,
          "hitCount": 5
        },
        {
          "level": 5,
          "damageMultiplier": 12.7574,
          "hitCount": 5
        }
      ]
    },
    "normal": {
      "id": "saori_normal",
      "name": "即時射撃",
      "description": "25秒毎に、会心ダメージ率を24.8%増加（16秒間）/ 敵1人に対して、攻撃力の334%分の確定会心ダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.0881,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 19.14,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.1926,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 19.14,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.2971,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 19.14,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.5062,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 21.05,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.6098,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 21.05,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 2.7144,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 21.05,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 2.9234,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 22.96,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 3.028,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 22.96,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 3.1325,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 22.96,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 3.3407,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 24.87,
              "duration": 16,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "saori_passive",
      "name": "訓練の成果",
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
      "id": "saori_sub",
      "name": "リーダーの責任感",
      "description": "同じ部隊に自身を含めて編成されているアリウススクワッド出身の生徒が2人/3人/4人以上の場合、それぞれ攻撃力を36.7%/55%/73.4%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.32,
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
              "value": 20.29,
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
              "value": 21.26,
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
              "value": 25.12,
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
              "value": 26.09,
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
              "value": 27.05,
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
              "value": 30.92,
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
              "value": 31.88,
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
              "value": 32.85,
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
              "value": 36.71,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
