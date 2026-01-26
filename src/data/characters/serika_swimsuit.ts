import { Character } from '../../types';

export const serikaSwimsuit: Character = {
  "id": "serika_swimsuit",
  "name": "セリカ（水着）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 3163,
    "defense": 377,
    "hp": 14111,
    "criticalValue": 263,
    "criticalDamage": 200,
    "stability": 1518,
    "accuracy": 686,
    "evasion": 755,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "serika_swimsuit_ex",
      "name": "怒りの波",
      "description": "円形範囲内の敵に対して攻撃力の分のダメージ",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 6.3686,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 7.3241,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 9.2344,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 10.1899,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 12.1002,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "serika_swimsuit_normal",
      "name": "ちゃぽん、ちゃぽん！",
      "description": "35秒毎に、円形範囲内の敵に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.0143,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 1.0654,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 1.0906,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 1.2936,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 1.3188,
          "hitCount": 3
        },
        {
          "level": 6,
          "damageMultiplier": 1.3692,
          "hitCount": 3
        },
        {
          "level": 7,
          "damageMultiplier": 1.5722,
          "hitCount": 3
        },
        {
          "level": 8,
          "damageMultiplier": 1.6226,
          "hitCount": 3
        },
        {
          "level": 9,
          "damageMultiplier": 1.6737,
          "hitCount": 3
        },
        {
          "level": 10,
          "damageMultiplier": 1.8767,
          "hitCount": 3
        }
      ]
    },
    "passive": {
      "id": "serika_swimsuit_passive",
      "name": "やる気満々",
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
      "id": "serika_swimsuit_sub",
      "name": "あっ、冷たい！",
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
