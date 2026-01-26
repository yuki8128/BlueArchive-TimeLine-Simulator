import { Character } from '../../types';

export const kikyou: Character = {
  "id": "kikyou",
  "name": "キキョウ",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2483,
    "defense": 113,
    "hp": 18480,
    "criticalValue": 210,
    "criticalDamage": 200,
    "stability": 1892,
    "accuracy": 946,
    "evasion": 189,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "kikyou_ex",
      "name": "神機妙算の一手",
      "description": "十字範囲内の敵に対して防御力を28.1%減少（30秒間）/ 攻撃力の480%分のダメージ",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.544,
          "hitCount": 30,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -17.62,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.916,
          "hitCount": 30,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -17.62,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 3.684,
          "hitCount": 30,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -22.91,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 4.056,
          "hitCount": 30,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -22.91,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 4.824,
          "hitCount": 30,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -28.19,
              "duration": 30,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "kikyou_normal",
      "name": "敵を知り己を知れば百戦殆からず",
      "description": "35秒毎に、自身を除く円形範囲内の味方に対して振動特効を加算（25秒間）/範囲内で効果を受けた味方の数によって効果が増加 1人：27.8% 2人：34.2% 3人以上：40.7%",
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
      "id": "kikyou_passive",
      "name": "作戦参謀としての素養",
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
      "id": "kikyou_sub",
      "name": "風林火山の計略",
      "description": "30秒毎に、攻撃力を32.8%増加（20秒間）/ さらにを1個付与（最大3個まで重複）/ が3個になった時、EXスキルの発動と同時に、を全て消耗し自身を除く味方のEXスキルコストを1減少（EXスキル使用1回分）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.27,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.13,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.99,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.44,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 23.31,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.17,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.62,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 28.48,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.34,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.8,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
