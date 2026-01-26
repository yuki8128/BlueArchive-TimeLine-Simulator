import { Character } from '../../types';

export const yukariSwimsuit: Character = {
  "id": "yukari_swimsuit",
  "name": "ユカリ（水着）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2588,
    "defense": 119,
    "hp": 19390,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 1988,
    "accuracy": 905,
    "evasion": 198,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "yukari_swimsuit_ex",
      "name": "夏の海はでんじゃらす！ですの！",
      "description": "円形範囲内の敵に対して、攻撃力の1060%分のダメージ",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.5811,
          "hitCount": 6
        },
        {
          "level": 2,
          "damageMultiplier": 6.4183,
          "hitCount": 6
        },
        {
          "level": 3,
          "damageMultiplier": 8.0919,
          "hitCount": 6
        },
        {
          "level": 4,
          "damageMultiplier": 8.9291,
          "hitCount": 6
        },
        {
          "level": 5,
          "damageMultiplier": 10.6035,
          "hitCount": 6
        }
      ]
    },
    "normal": {
      "id": "yukari_swimsuit_normal",
      "name": "これが夏のすいーつ！ですの！",
      "description": "35秒毎に、貫通特効を55.5%加算（30秒間）",
      "type": "normal",
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
    "passive": {
      "id": "yukari_swimsuit_passive",
      "name": "勘解由小路流水泳術",
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
      "id": "yukari_swimsuit_sub",
      "name": "将来有望な後輩",
      "description": "攻撃力を25.5%増加/ EXスキルを2回使用する度に、コスト回復力を1259増加（10秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 13.44,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "costRecoveryFlat",
              "value": 663,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.12,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "costRecoveryFlat",
              "value": 696,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.79,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "costRecoveryFlat",
              "value": 729,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.48,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "costRecoveryFlat",
              "value": 862,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.15,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "costRecoveryFlat",
              "value": 895,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.82,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "costRecoveryFlat",
              "value": 928,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.51,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "costRecoveryFlat",
              "value": 1060,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.18,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "costRecoveryFlat",
              "value": 1093,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.85,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "costRecoveryFlat",
              "value": 1127,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.54,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "costRecoveryFlat",
              "value": 1259,
              "duration": 10,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
