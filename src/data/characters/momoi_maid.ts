import { Character } from '../../types';

export const momoiMaid: Character = {
  "id": "momoi_maid",
  "name": "モモイ（メイド）",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2111,
    "defense": 118,
    "hp": 22270,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1384,
    "accuracy": 707,
    "evasion": 791,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "momoi_maid_ex",
      "name": "バーチャル・メイドウェポン！",
      "description": "スキル発動後すぐにリロード/ 通常攻撃を攻撃力の56%分の追加ダメージを与える攻撃に変更、攻撃速度を85.1%増加、通常攻撃のディレイを100回無視（リロードを1回行うまで有効）",
      "type": "ex",
      "cost": 4,
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
      "id": "momoi_maid_normal",
      "name": "結果よければ全てよし！",
      "description": "50秒毎に、敵1人に対して攻撃力の788%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.1477,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 4.3553,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.5629,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 5.3924,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.6,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 5.8067,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 6.6362,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 6.8438,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 7.0514,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 7.881,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "momoi_maid_passive",
      "name": "せっかくだし、赤で！",
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
      "id": "momoi_maid_sub",
      "name": "誤射注意！",
      "description": "EXスキルの使用時5.5秒間、通常攻撃で消耗した弾薬分の弾薬数を追加",
      "type": "sub",
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
    }
  }
};
