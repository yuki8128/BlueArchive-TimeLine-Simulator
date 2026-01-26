import { Character } from '../../types';

export const mashiro: Character = {
  "id": "mashiro",
  "name": "マシロ",
  "nameEn": "Mashiro",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2845,
    "defense": 120,
    "hp": 21034,
    "criticalValue": 200,
    "criticalDamage": 200,
    "stability": 2300,
    "accuracy": 900,
    "evasion": 200,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "mashiro_ex",
      "name": "正義の一撃",
      "description": "敵1人に対して、攻撃力の分のダメージ/ の確率で、分の追加ダメージ",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.1552,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 4.7789,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 5.4019,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 6.0256,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 6.6486,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "mashiro_normal",
      "name": "正義の決断",
      "description": "20秒毎に、円形範囲内の敵に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.5092,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.5848,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.6604,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.9621,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.0377,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.1133,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.415,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.4906,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.5662,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.8679,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "mashiro_passive",
      "name": "正義の気概",
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
      "id": "mashiro_sub",
      "name": "正義の結束",
      "description": "味方のを増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
