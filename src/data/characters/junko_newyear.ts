import { Character } from '../../types';

export const junkoNewyear: Character = {
  "id": "junko_newyear",
  "name": "ジュンコ（正月）",
  "rarity": 1,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 3009,
    "defense": 117,
    "hp": 22040,
    "criticalValue": 204,
    "criticalDamage": 200,
    "stability": 1368,
    "accuracy": 714,
    "evasion": 783,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "B",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "junko_newyear_ex",
      "name": "食べ物の恨み",
      "description": "円形範囲内の敵に対して、攻撃力の分のダメージ",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.4407,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.9573,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.9897,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 5.5055,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 6.5379,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "junko_newyear_normal",
      "name": "食べたかったのに……",
      "description": "通常攻撃21回毎に、敵1人に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.0027,
          "hitCount": 10
        },
        {
          "level": 2,
          "damageMultiplier": 4.2027,
          "hitCount": 10
        },
        {
          "level": 3,
          "damageMultiplier": 4.4027,
          "hitCount": 10
        },
        {
          "level": 4,
          "damageMultiplier": 5.2035,
          "hitCount": 10
        },
        {
          "level": 5,
          "damageMultiplier": 5.4035,
          "hitCount": 10
        },
        {
          "level": 6,
          "damageMultiplier": 5.6036,
          "hitCount": 10
        },
        {
          "level": 7,
          "damageMultiplier": 6.4044,
          "hitCount": 10
        },
        {
          "level": 8,
          "damageMultiplier": 6.6044,
          "hitCount": 10
        },
        {
          "level": 9,
          "damageMultiplier": 6.8044,
          "hitCount": 10
        },
        {
          "level": 10,
          "damageMultiplier": 7.6046,
          "hitCount": 10
        }
      ]
    },
    "passive": {
      "id": "junko_newyear_passive",
      "name": "早く終わらせるわよ！",
      "description": "を増加",
      "type": "passive",
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
    "sub": {
      "id": "junko_newyear_sub",
      "name": "一着しかないのに！",
      "description": "EXスキル並びにノーマルスキルの発動と同時に、を増加（20秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 10.49,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 11.02,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 11.54,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 13.63,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 14.16,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 14.68,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 16.78,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 17.31,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 17.83,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 19.93,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
