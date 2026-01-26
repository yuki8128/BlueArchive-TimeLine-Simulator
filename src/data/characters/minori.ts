import { Character } from '../../types';

export const minori: Character = {
  "id": "minori",
  "name": "ミノリ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 3028,
    "defense": 395,
    "hp": 14789,
    "criticalValue": 252,
    "criticalDamage": 200,
    "stability": 1592,
    "accuracy": 656,
    "evasion": 791,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "minori_ex",
      "name": "奮い立て！",
      "description": "円形範囲内の敵に対して、攻撃力の分のダメージ/ 追加で最大3コストを消耗して、1コストあたりのダメージが35%増加します。/ （コスト増減スキルの効果は基本コストを基準として計算します）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.6212,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 5.3148,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 6.7008,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 7.3938,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 8.7804,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "minori_normal",
      "name": "一つになった意志",
      "description": "25秒毎に、円形範囲内の敵に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.7784,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.8176,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.8568,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.0122,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.0514,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.0899,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 1.246,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 1.2845,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 1.3237,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 1.4791,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "minori_passive",
      "name": "手を取り合って",
      "description": "を増加",
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
      "id": "minori_sub",
      "name": "労働の結実",
      "description": "味方のを加算",
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
