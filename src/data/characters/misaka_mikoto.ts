import { Character } from '../../types';

export const misakaMikoto: Character = {
  "id": "misaka_mikoto",
  "name": "御坂美琴",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2358,
    "defense": 114,
    "hp": 21490,
    "criticalValue": 208,
    "criticalDamage": 200,
    "stability": 1336,
    "accuracy": 731,
    "evasion": 764,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "misaka_mikoto_ex",
      "name": "常盤台の超電磁砲",
      "description": "直線範囲内の敵に対して、攻撃力の分のダメージ",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.4458,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 6.2622,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 7.896,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 8.7125,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 10.3463,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "misaka_mikoto_normal",
      "name": "ちょっと痺れるわよ！",
      "description": "50秒毎に、円形範囲内の敵に攻撃力の分のダメージ 攻撃力の分の持続ダメージを付与（間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.2021,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.2617,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.3222,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.5624,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.6221,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.6826,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 1.9228,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 1.9824,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.0429,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.2832,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "misaka_mikoto_passive",
      "name": "電撃操作能力",
      "description": "を増加/ 食蜂操祈の効果は適用されません",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
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
              "type": "accuracyFlat",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "misaka_mikoto_sub",
      "name": "何度も言わせんじゃないわよ",
      "description": "ノーマルスキルの発動と同時に、を増加（間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 10.08,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.23,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 12.43,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 13.46,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.73,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.05,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.21,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.58,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.46,
              "duration": 40,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
