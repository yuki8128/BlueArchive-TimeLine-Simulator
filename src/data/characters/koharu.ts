import { Character } from '../../types';

export const koharu: Character = {
  "id": "koharu",
  "name": "コハル",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2085,
    "defense": 146,
    "hp": 21120,
    "criticalValue": 205,
    "criticalDamage": 200,
    "stability": 1948,
    "accuracy": 923,
    "evasion": 194,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "koharu_ex",
      "name": "セイなる手榴弾",
      "description": "円形範囲内の味方に対して、治癒力の分の回復。敵に対しては攻撃力の分のダメージ",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.2731,
          "hitCount": 1,
          "healMultiplier": 1.0145
        },
        {
          "level": 2,
          "damageMultiplier": 2.6133,
          "hitCount": 1,
          "healMultiplier": 1.1668
        },
        {
          "level": 3,
          "damageMultiplier": 3.2954,
          "hitCount": 1,
          "healMultiplier": 1.471
        },
        {
          "level": 4,
          "damageMultiplier": 3.6364,
          "hitCount": 1,
          "healMultiplier": 1.6233
        },
        {
          "level": 5,
          "damageMultiplier": 4.3176,
          "hitCount": 1,
          "healMultiplier": 1.9275
        }
      ]
    },
    "normal": {
      "id": "koharu_normal",
      "name": "わ、私が治療するっ！",
      "description": "自身を除きHPが50%以下の味方に対して、治癒力の分の回復（クールタイム20秒）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.8085
        },
        {
          "level": 2,
          "healMultiplier": 0.849
        },
        {
          "level": 3,
          "healMultiplier": 0.8895
        },
        {
          "level": 4,
          "healMultiplier": 1.0513
        },
        {
          "level": 5,
          "healMultiplier": 1.0915
        },
        {
          "level": 6,
          "healMultiplier": 1.132
        },
        {
          "level": 7,
          "healMultiplier": 1.2938
        },
        {
          "level": 8,
          "healMultiplier": 1.3343
        },
        {
          "level": 9,
          "healMultiplier": 1.3745
        },
        {
          "level": 10,
          "healMultiplier": 1.5363
        }
      ]
    },
    "passive": {
      "id": "koharu_passive",
      "name": "これでも頑張ってるの！",
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
      "id": "koharu_sub",
      "name": "エリートだから！",
      "description": "30秒毎に、を増加（20秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 21.58,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 22.66,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 23.73,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 28.05,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 29.13,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 30.21,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 34.52,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 35.6,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 36.68,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 41,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
