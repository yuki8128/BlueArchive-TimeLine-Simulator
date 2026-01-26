import { Character } from '../../types';

export const saya: Character = {
  "id": "saya",
  "name": "サヤ",
  "nameEn": "Saya",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 1941,
    "defense": 122,
    "hp": 17101,
    "criticalValue": 245,
    "criticalDamage": 200,
    "stability": 1168,
    "accuracy": 98,
    "evasion": 1080,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "saya_ex",
      "name": "ぼく様の傑作なのだ！",
      "description": "円形範囲内の敵に対して、攻撃力の239%分の持続ダメージを付与（8秒間）",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.2621,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.4511,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.8298,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.0188,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.3975,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "saya_normal",
      "name": "新しい実験なのだ！",
      "description": "20秒毎に、円形範囲内の敵の会心値を12.1%減少（20秒間）/ さらに攻撃力の69.3%分の中毒持続ダメージを付与（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": -12.18,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": -12.18,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": -12.18,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": -12.18,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": -12.18,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": -12.18,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": -12.18,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": -12.18,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": -12.18,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": -12.18,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "saya_passive",
      "name": "ぼく様はやっぱり偉大なのだ！",
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
      "id": "saya_sub",
      "name": "ぼく様だけを信じてて！",
      "description": "味方の会心値を17.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
