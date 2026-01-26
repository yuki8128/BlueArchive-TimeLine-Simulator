import { Character } from '../../types';

export const fuyu: Character = {
  "id": "fuyu",
  "name": "フユ",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2240,
    "defense": 96,
    "hp": 21270,
    "criticalValue": 216,
    "criticalDamage": 200,
    "stability": 916,
    "accuracy": 108,
    "evasion": 1010,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "fuyu_ex",
      "name": "弾丸のお届け",
      "description": "敵1人に対して、を減少（22秒間）/ 攻撃力の分のダメージ",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.5862,
          "hitCount": 16,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -24.84,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 1.8242,
          "hitCount": 16,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -28.57,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.3002,
          "hitCount": 16,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -36.02,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.5375,
          "hitCount": 16,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -39.74,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 3.0135,
          "hitCount": 16,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -47.2,
              "duration": 22,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "fuyu_normal",
      "name": "お届け完了です！",
      "description": "40秒毎に、円形範囲内の味方のを増加（34秒間）",
      "type": "normal",
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
    "passive": {
      "id": "fuyu_passive",
      "name": "営業の真髄",
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
      "id": "fuyu_sub",
      "name": "交渉決裂",
      "description": "弱体状態の敵への攻撃時に、攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.063,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0665,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0693,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0819,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0854,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0882,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.1008,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.1043,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.1071,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.1197,
          "hitCount": 1
        }
      ]
    }
  }
};
