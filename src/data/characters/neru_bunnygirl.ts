import { Character } from '../../types';

export const neruBunnygirl: Character = {
  "id": "neru_bunnygirl",
  "name": "ネル（バニーガール）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1515,
    "defense": 162,
    "hp": 37630,
    "criticalValue": 219,
    "criticalDamage": 200,
    "stability": 1264,
    "accuracy": 109,
    "evasion": 1303,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "neru_bunnygirl_ex",
      "name": "そこ、動くなっ！",
      "description": "指定した位置に移動した後、治癒力の401%分のシールド効果を発動（20秒間）/ 円形範囲内の敵に対して、攻撃力の531%分のダメージ。さらに挑発状態を付与（3秒間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.6661,
          "hitCount": 33
        },
        {
          "level": 2,
          "damageMultiplier": 3.941,
          "hitCount": 33
        },
        {
          "level": 3,
          "damageMultiplier": 4.4916,
          "hitCount": 33
        },
        {
          "level": 4,
          "damageMultiplier": 4.7665,
          "hitCount": 33
        },
        {
          "level": 5,
          "damageMultiplier": 5.3163,
          "hitCount": 33
        }
      ]
    },
    "normal": {
      "id": "neru_bunnygirl_normal",
      "name": "見せもんじゃねぇっての！",
      "description": "30秒毎に、回避値を41.9%増加（23秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 22.1,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 23.2,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 24.31,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 28.73,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 29.83,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 30.94,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 35.35,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 36.46,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 37.56,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 41.98,
              "duration": 23,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "neru_bunnygirl_passive",
      "name": "苛辣",
      "description": "会心ダメージ率を26.6%増加",
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
      "id": "neru_bunnygirl_sub",
      "name": "もっと痛いのが好きか？",
      "description": "攻撃時、中型の敵に対して攻撃力の6.2%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0325,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0342,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0359,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0425,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0442,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0459,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0525,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0542,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0559,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.0625,
          "hitCount": 1
        }
      ]
    }
  }
};
