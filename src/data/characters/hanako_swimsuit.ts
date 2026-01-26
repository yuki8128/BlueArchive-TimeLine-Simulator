import { Character } from '../../types';

export const hanakoSwimsuit: Character = {
  "id": "hanako_swimsuit",
  "name": "ハナコ（水着）",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 3033,
    "defense": 119,
    "hp": 22430,
    "criticalValue": 200,
    "criticalDamage": 200,
    "stability": 1396,
    "accuracy": 701,
    "evasion": 797,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "A",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "hanako_swimsuit_ex",
      "name": "たっぷりかけちゃいますね♡",
      "description": "扇形範囲内の敵に対して、攻撃力の分のダメージ/ 水ゲージが1つ以上の場合、EXスキルをすぐにドローした後、水ゲージを1つ差し引きます。",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.3794,
          "hitCount": 6
        },
        {
          "level": 2,
          "damageMultiplier": 3.8859,
          "hitCount": 6
        },
        {
          "level": 3,
          "damageMultiplier": 4.8996,
          "hitCount": 6
        },
        {
          "level": 4,
          "damageMultiplier": 5.4067,
          "hitCount": 6
        },
        {
          "level": 5,
          "damageMultiplier": 6.4204,
          "hitCount": 6
        }
      ]
    },
    "normal": {
      "id": "hanako_swimsuit_normal",
      "name": "上手に受け取ってください♡",
      "description": "30秒毎に、円形範囲内の敵に対して攻撃力の分のダメージ/ さらにを減少（20秒間）（範囲内にいる間だけ効果を維持）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.1882,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.92,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 1.2481,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -11.46,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 1.3073,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -12.01,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 1.5448,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -14.19,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 1.604,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -14.74,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 1.6639,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -15.29,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 1.9014,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -17.46,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 1.9606,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.01,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 2.0198,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.55,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 2.2573,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.74,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "hanako_swimsuit_passive",
      "name": "真夏に隠された本音",
      "description": "を、率を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 11.2,
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
              "value": 11.48,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 11.48,
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
              "value": 11.76,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 11.76,
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
              "value": 12.88,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 12.88,
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
              "value": 13.16,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 13.16,
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
              "value": 13.44,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 13.44,
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
              "value": 14.56,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 14.56,
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
              "value": 14.84,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 14.84,
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
              "value": 15.12,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 15.12,
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
              "value": 16.24,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 16.24,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "hanako_swimsuit_sub",
      "name": "準備は万端です♡",
      "description": "自身を除く味方がEXスキルを使用時、水ゲージを40%チャージ 100%チャージされる毎に、を増加（20秒間） （水ゲージのチャージ数は最大2ゲージまで）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.16,
              "duration": 20,
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
              "duration": 20,
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
              "duration": 20,
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
              "duration": 20,
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
              "duration": 20,
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
              "duration": 20,
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
              "duration": 20,
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
              "duration": 20,
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
              "duration": 20,
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
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
