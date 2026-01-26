import { Character } from '../../types';

export const tomoe: Character = {
  "id": "tomoe",
  "name": "トモエ",
  "rarity": 1,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2608,
    "defense": 114,
    "hp": 18540,
    "criticalValue": 209,
    "criticalDamage": 200,
    "stability": 1900,
    "accuracy": 944,
    "evasion": 190,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "C",
    "outdoor": "B",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "tomoe_ex",
      "name": "みなさん、こちらに耳を傾けてください！",
      "description": "円形範囲内の味方に対して、率を、を、を30.8%増加させ、通常攻撃のを38.5%減少（30秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 13.9,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "critRateFlat",
              "value": 13.9,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 14.94,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "critRateFlat",
              "value": 14.94,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 17.02,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "critRateFlat",
              "value": 17.02,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 18.06,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "critRateFlat",
              "value": 18.06,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 20.14,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "critRateFlat",
              "value": 20.14,
              "duration": 30,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "tomoe_normal",
      "name": "巧妙なアジテーション",
      "description": "30秒毎に、敵1人に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.3533,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.4711,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.5889,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 3.0595,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 3.1768,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 3.2946,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.7652,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.883,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 4.0008,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 4.4709,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "tomoe_passive",
      "name": "一瀉千里",
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
      "id": "tomoe_sub",
      "name": "反駁不能な言い回し",
      "description": "攻撃時、効果を持っている敵に対して攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.5712,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.5998,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.6284,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.7426,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.7712,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.7997,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.914,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.9425,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.9711,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 1.0853,
          "hitCount": 1
        }
      ]
    }
  }
};
