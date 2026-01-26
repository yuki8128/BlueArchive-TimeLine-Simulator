import { Character } from '../../types';

export const midori: Character = {
  "id": "midori",
  "name": "ミドリ",
  "nameEn": "Midori",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3152,
    "defense": 118,
    "hp": 19260,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1972,
    "accuracy": 911,
    "evasion": 197,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "midori_ex",
      "name": "ドローイングアート",
      "description": "最大で敵5人に対して、順番にそれぞれ攻撃力の191%分のダメージ/ 同じ部隊にモモイがいる場合はさらに、攻撃力の51.8%分の中毒系持続ダメージを付与（20秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.1964,
          "hitCount": 5
        },
        {
          "level": 2,
          "damageMultiplier": 1.3753,
          "hitCount": 5
        },
        {
          "level": 3,
          "damageMultiplier": 1.5548,
          "hitCount": 5
        },
        {
          "level": 4,
          "damageMultiplier": 1.7344,
          "hitCount": 5
        },
        {
          "level": 5,
          "damageMultiplier": 1.9133,
          "hitCount": 5
        }
      ]
    },
    "normal": {
      "id": "midori_normal",
      "name": "磨き上げるセンス",
      "description": "25秒毎に、自身を除きHPが最も低い味方1人に対して治癒力の147%分の回復",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.7755
        },
        {
          "level": 2,
          "healMultiplier": 0.8145
        },
        {
          "level": 3,
          "healMultiplier": 0.8533
        },
        {
          "level": 4,
          "healMultiplier": 1.0083
        },
        {
          "level": 5,
          "healMultiplier": 1.047
        },
        {
          "level": 6,
          "healMultiplier": 1.0858
        },
        {
          "level": 7,
          "healMultiplier": 1.241
        },
        {
          "level": 8,
          "healMultiplier": 1.2798
        },
        {
          "level": 9,
          "healMultiplier": 1.3185
        },
        {
          "level": 10,
          "healMultiplier": 1.4735
        }
      ]
    },
    "passive": {
      "id": "midori_passive",
      "name": "アーティストインスピレーション",
      "description": "会心値を26.6%増加",
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
      "id": "midori_sub",
      "name": "開発者シナジー：モモイ",
      "description": "攻撃速度を28.7%増加/ 同じ部隊にモモイがいる場合は、34.4%増加",
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
