import { Character } from '../../types';

export const chiseSwimsuit: Character = {
  "id": "chise_swimsuit",
  "name": "チセ（水着）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2262,
    "defense": 118,
    "hp": 22230,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 988,
    "accuracy": 101,
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
      "id": "chise_swimsuit_ex",
      "name": "夏の海辺、ふぃ～ば～",
      "description": "最大で敵3人に対して、順番にそれぞれ榴弾発射。さらに対象を中心とした円形範囲内の敵に対して、それぞれ攻撃力の分のダメージを与え、を付与（間）/ 対象がすでにCC状態の場合、攻撃力の分のダメージを与え、を付与（間）",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.3272,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 2.676,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 3.0249,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 3.3738,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 3.7234,
          "hitCount": 3
        }
      ]
    },
    "normal": {
      "id": "chise_swimsuit_normal",
      "name": "びーちぼーる、しゅ～と～",
      "description": "50秒毎に、敵1人に対して、攻撃力の分のダメージ/ さらにを付与（間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.8252,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.9666,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 3.1073,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 3.3901,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 3.5315,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 3.6722,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.955,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 4.0964,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 4.237,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 4.5199,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "chise_swimsuit_passive",
      "name": "散歩、準備OK～",
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
      "id": "chise_swimsuit_sub",
      "name": "ブルブル～寒いかも～？",
      "description": "EXスキルで敵を命中した時、攻撃力の分の持続ダメージを付与（20秒間）",
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
