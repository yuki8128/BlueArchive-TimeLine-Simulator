import { Character } from '../../types';

export const iori: Character = {
  "id": "iori",
  "name": "イオリ",
  "nameEn": "Iori",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3204,
    "defense": 123,
    "hp": 23140,
    "criticalValue": 194,
    "criticalDamage": 200,
    "stability": 2056,
    "accuracy": 874,
    "evasion": 194,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "C",
    "outdoor": "C",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "iori_ex",
      "name": "一網打尽",
      "description": "銃弾を3回発射。攻撃した敵と、その後ろ扇形範囲内の敵に対して、それぞれ攻撃力の666%分のダメージ",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.5073,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 4.0333,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 5.0854,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 5.6115,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 6.6629,
          "hitCount": 3
        }
      ]
    },
    "normal": {
      "id": "iori_normal",
      "name": "指名手配",
      "description": "25秒毎に、敵1人に対して攻撃力の436%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.2983,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.4136,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.5282,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.9881,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 3.1028,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 3.2181,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.6774,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.7926,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.9073,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 4.3672,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "iori_passive",
      "name": "一撃必中",
      "description": "命中値を26.6%増加",
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
      "id": "iori_sub",
      "name": "風紀委員の度胸",
      "description": "自身が隠れていない状態での攻撃時、攻撃力の43.1%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.2268,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.2382,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.2495,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.2949,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.3062,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.3176,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.3629,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.3743,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.3856,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.431,
          "hitCount": 1
        }
      ]
    }
  }
};
