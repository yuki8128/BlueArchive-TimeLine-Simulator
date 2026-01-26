import { Character } from '../../types';

export const izuna: Character = {
  "id": "izuna",
  "name": "イズナ",
  "nameEn": "Izuna",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1846,
    "defense": 136,
    "hp": 35080,
    "criticalValue": 246,
    "criticalDamage": 200,
    "stability": 1416,
    "accuracy": 108,
    "evasion": 1066,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "izuna_ex",
      "name": "これぞイズナ流忍法！",
      "description": "指定した位置に移動した後、を増加（30秒間）",
      "type": "ex",
      "cost": 3,
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
        }
      ]
    },
    "normal": {
      "id": "izuna_normal",
      "name": "秘技！爆裂手裏剣！",
      "description": "通常攻撃6回毎に、円形範囲内の敵に対して、攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.4473,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 4.6699,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.8926,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 5.7815,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 6.0042,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 6.2269,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 7.1158,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 7.3385,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 7.5602,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 8.45,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "izuna_passive",
      "name": "イズナ流、奇襲の術！",
      "description": "率を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "izuna_sub",
      "name": "イズナ流、興起の術！",
      "description": "EXスキル使用時、を増加（30秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.16,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.17,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.18,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.21,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.22,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 28.23,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.26,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.27,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 34.28,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 38.31,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
