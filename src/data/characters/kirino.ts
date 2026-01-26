import { Character } from '../../types';

export const kirino: Character = {
  "id": "kirino",
  "name": "キリノ",
  "rarity": 2,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1126,
    "defense": 108,
    "hp": 23580,
    "criticalValue": 219,
    "criticalDamage": 200,
    "stability": 904,
    "accuracy": 109,
    "evasion": 995,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "A",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "kirino_ex",
      "name": "交渉はここまでですね……！",
      "description": "円形範囲内の敵に対して、攻撃力の分のダメージ/ 煙幕（20秒間）が出現し、その範囲内の敵のを減少（範囲内にいる間だけ効果を維持）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.3787,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -26.1,
              "duration": 999,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 3.8856,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -26.1,
              "duration": 999,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 4.3925,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -30.01,
              "duration": 999,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 4.8985,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -30.01,
              "duration": 999,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 5.4054,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -30.01,
              "duration": 999,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "kirino_normal",
      "name": "制圧します！",
      "description": "20秒毎に、距離が最も遠い敵1人に対して、攻撃力の分のダメージ/ さらにを減少（13秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.999,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -19.41,
              "duration": 13,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.0487,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -19.9,
              "duration": 13,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.0994,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -20.38,
              "duration": 13,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.2992,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -22.32,
              "duration": 13,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.3489,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -22.81,
              "duration": 13,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 2.3986,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -23.29,
              "duration": 13,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 2.5984,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -25.23,
              "duration": 13,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 2.6491,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -25.72,
              "duration": 13,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 2.6988,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -26.21,
              "duration": 13,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 2.8986,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -28.14,
              "duration": 13,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "kirino_passive",
      "name": "速やかに処置を！",
      "description": "を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "kirino_sub",
      "name": "休んでなんていられません！",
      "description": "通常攻撃時、30%の確率で敵のを減少（13秒間）（クールタイム5秒）",
      "type": "sub",
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
    }
  }
};
