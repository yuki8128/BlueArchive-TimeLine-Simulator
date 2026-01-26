import { Character } from '../../types';

export const miyuSwimsuit: Character = {
  "id": "miyu_swimsuit",
  "name": "ミユ（水着）",
  "rarity": 1,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2328,
    "defense": 618,
    "hp": 23127,
    "criticalValue": 252,
    "criticalDamage": 200,
    "stability": 2277,
    "accuracy": 504,
    "evasion": 198,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "C",
    "outdoor": "B",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "miyu_swimsuit_ex",
      "name": "カモメの襲撃",
      "description": "直線範囲内の敵に対して、攻撃力の分の確定会心ダメージ",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.8822,
          "hitCount": 8
        },
        {
          "level": 2,
          "damageMultiplier": 4.4646,
          "hitCount": 8
        },
        {
          "level": 3,
          "damageMultiplier": 5.6287,
          "hitCount": 8
        },
        {
          "level": 4,
          "damageMultiplier": 6.2111,
          "hitCount": 8
        },
        {
          "level": 5,
          "damageMultiplier": 7.3759,
          "hitCount": 8
        }
      ]
    },
    "normal": {
      "id": "miyu_swimsuit_normal",
      "name": "密やかな一撃",
      "description": "70秒毎に、扇形範囲内の敵に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.6981,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.8829,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.0677,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 4.8076,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 4.9924,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 5.1772,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 5.9164,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 6.1012,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 6.286,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 7.0259,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "miyu_swimsuit_passive",
      "name": "水中用複合弾",
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
      "id": "miyu_swimsuit_sub",
      "name": "観測状況報告",
      "description": "味方の率を増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 9.12,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 9.57,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 10.03,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 11.86,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 12.31,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 12.77,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 14.59,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.04,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.5,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 17.32,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
