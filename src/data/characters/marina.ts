import { Character } from '../../types';

export const marina: Character = {
  "id": "marina",
  "name": "マリナ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1456,
    "defense": 162,
    "hp": 45380,
    "criticalValue": 218,
    "criticalDamage": 200,
    "stability": 1264,
    "accuracy": 109,
    "evasion": 1303,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "marina_ex",
      "name": "革命的突撃！",
      "description": "アーチ型範囲内の敵に対して、攻撃力の636%分のダメージを与え1ヒットごとにノックバック/ さらに被回復率率を45.5%減少（30秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.3514,
          "hitCount": 20
        },
        {
          "level": 2,
          "damageMultiplier": 3.854,
          "hitCount": 20
        },
        {
          "level": 3,
          "damageMultiplier": 4.8591,
          "hitCount": 20
        },
        {
          "level": 4,
          "damageMultiplier": 5.3626,
          "hitCount": 20
        },
        {
          "level": 5,
          "damageMultiplier": 6.3677,
          "hitCount": 20
        }
      ]
    },
    "normal": {
      "id": "marina_normal",
      "name": "退いてなるものか！",
      "description": "HPが20%以下の時、を付与（22.8秒間） （戦闘中に1回のみ）",
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
      "id": "marina_passive",
      "name": "これは後退ではない！",
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
      "id": "marina_sub",
      "name": "決断力",
      "description": "EXスキルの使用中、回避値を38.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
