import { Character } from '../../types';

export const koharuSwimsuit: Character = {
  "id": "koharu_swimsuit",
  "name": "コハル（水着）",
  "rarity": 1,
  "attackType": "mystic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2869,
    "defense": 113,
    "hp": 18420,
    "criticalValue": 211,
    "criticalDamage": 200,
    "stability": 1888,
    "accuracy": 950,
    "evasion": 188,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "B",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "koharu_swimsuit_ex",
      "name": "そんな事ないんだから！",
      "description": "円形範囲内の敵に攻撃力の分のダメージ",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.3904,
          "hitCount": 2
        },
        {
          "level": 2,
          "damageMultiplier": 5.0496,
          "hitCount": 2
        },
        {
          "level": 3,
          "damageMultiplier": 6.3665,
          "hitCount": 2
        },
        {
          "level": 4,
          "damageMultiplier": 7.025,
          "hitCount": 2
        },
        {
          "level": 5,
          "damageMultiplier": 8.3419,
          "hitCount": 2
        }
      ]
    },
    "normal": {
      "id": "koharu_swimsuit_normal",
      "name": "見ちゃダメなんだから！",
      "description": "30秒毎に、を増加（25秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 20.89,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 21.94,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 22.98,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 27.15,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 28.2,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 29.24,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 33.42,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 34.46,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 35.51,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 39.68,
              "duration": 25,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "koharu_swimsuit_passive",
      "name": "エリートの使命感",
      "description": "を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "koharu_swimsuit_sub",
      "name": "エッチなのはダメ！死刑！",
      "description": "攻撃時、中型の敵に対して攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.1046,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.1099,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.1153,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.1359,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.1412,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.1465,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.1671,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.1725,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.1778,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.1984,
          "hitCount": 1
        }
      ]
    }
  }
};
