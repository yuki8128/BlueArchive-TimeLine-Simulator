import { Character } from '../../types';

export const suzumi: Character = {
  "id": "suzumi",
  "name": "スズミ",
  "nameEn": "Suzumi",
  "rarity": 1,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1926,
    "defense": 121,
    "hp": 22810,
    "criticalValue": 197,
    "criticalDamage": 200,
    "stability": 1416,
    "accuracy": 690,
    "evasion": 788,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "B",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "suzumi_ex",
      "name": "オーダーメイド閃光弾",
      "description": "円形範囲内の敵に攻撃力の518%分のダメージ/ さらに気絶状態を付与（4.1秒間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.8914,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 4.1021,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.4259,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 4.7016,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.188,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "suzumi_normal",
      "name": "自警団の底力",
      "description": "25秒毎に、敵1人に対して攻撃力の443%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.3331,
          "hitCount": 10
        },
        {
          "level": 2,
          "damageMultiplier": 2.4498,
          "hitCount": 10
        },
        {
          "level": 3,
          "damageMultiplier": 2.5665,
          "hitCount": 10
        },
        {
          "level": 4,
          "damageMultiplier": 3.0331,
          "hitCount": 10
        },
        {
          "level": 5,
          "damageMultiplier": 3.1497,
          "hitCount": 10
        },
        {
          "level": 6,
          "damageMultiplier": 3.2664,
          "hitCount": 10
        },
        {
          "level": 7,
          "damageMultiplier": 3.733,
          "hitCount": 10
        },
        {
          "level": 8,
          "damageMultiplier": 3.8497,
          "hitCount": 10
        },
        {
          "level": 9,
          "damageMultiplier": 3.9663,
          "hitCount": 10
        },
        {
          "level": 10,
          "damageMultiplier": 4.4329,
          "hitCount": 10
        }
      ]
    },
    "passive": {
      "id": "suzumi_passive",
      "name": "緊急回避",
      "description": "回避値を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "suzumi_sub",
      "name": "自警団の猛襲",
      "description": "CC状態の敵を攻撃した時、攻撃力の52.3%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.2758,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.2899,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.3034,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.3585,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.3726,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.3861,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.4412,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.4554,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.4688,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.5239,
          "hitCount": 1
        }
      ]
    }
  }
};
