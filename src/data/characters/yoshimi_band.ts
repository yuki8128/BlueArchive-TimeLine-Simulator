import { Character } from '../../types';

export const yoshimiBand: Character = {
  "id": "yoshimi_band",
  "name": "ヨシミ（バンド）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2631,
    "defense": 118,
    "hp": 22250,
    "criticalValue": 252,
    "criticalDamage": 200,
    "stability": 1384,
    "accuracy": 707,
    "evasion": 791,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "yoshimi_band_ex",
      "name": "爆発クライマックス",
      "description": "攻撃力と攻撃速度を112%増加（50秒間）/ さらにを5個付与（最大5個まで）/ は10秒毎に1個ずつ解除",
      "type": "ex",
      "cost": 10,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 59.18,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 68.04,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 85.8,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 94.67,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 112.42,
              "duration": 50,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "yoshimi_band_normal",
      "name": "ビジュアルメーカー",
      "description": "通常攻撃10回毎に、敵1人に対して攻撃力の966%分のダメージ/ さらに味方全体の1個毎に、ダメージが5%分増加（最大8個まで）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.0859,
          "hitCount": 12
        },
        {
          "level": 2,
          "damageMultiplier": 5.34,
          "hitCount": 12
        },
        {
          "level": 3,
          "damageMultiplier": 5.5942,
          "hitCount": 12
        },
        {
          "level": 4,
          "damageMultiplier": 6.6115,
          "hitCount": 12
        },
        {
          "level": 5,
          "damageMultiplier": 6.8656,
          "hitCount": 12
        },
        {
          "level": 6,
          "damageMultiplier": 7.1198,
          "hitCount": 12
        },
        {
          "level": 7,
          "damageMultiplier": 8.1371,
          "hitCount": 12
        },
        {
          "level": 8,
          "damageMultiplier": 8.3913,
          "hitCount": 12
        },
        {
          "level": 9,
          "damageMultiplier": 8.6454,
          "hitCount": 12
        },
        {
          "level": 10,
          "damageMultiplier": 9.6627,
          "hitCount": 12
        }
      ]
    },
    "passive": {
      "id": "yoshimi_band_passive",
      "name": "ロックンロール",
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
      "id": "yoshimi_band_sub",
      "name": "スイーツハーモニクス",
      "description": "ノーマルスキルの発動3回毎に、ノーマルスキルで攻撃した時、攻撃力の119%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.6307,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.6625,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.6937,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.8199,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.8517,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.8829,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 1.0091,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 1.0409,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 1.0721,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 1.1982,
          "hitCount": 1
        }
      ]
    }
  }
};
