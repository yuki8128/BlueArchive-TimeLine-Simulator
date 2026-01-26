import { Character } from '../../types';

export const ichika: Character = {
  "id": "ichika",
  "name": "イチカ",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2803,
    "defense": 118,
    "hp": 22230,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1380,
    "accuracy": 708,
    "evasion": 790,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "ichika_ex",
      "name": "ちょっと失礼するっす",
      "description": "扇形範囲内の敵に対して、攻撃力の分のダメージ",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 7.2674,
          "hitCount": 8
        },
        {
          "level": 2,
          "damageMultiplier": 8.3573,
          "hitCount": 8
        },
        {
          "level": 3,
          "damageMultiplier": 10.5378,
          "hitCount": 8
        },
        {
          "level": 4,
          "damageMultiplier": 11.6277,
          "hitCount": 8
        },
        {
          "level": 5,
          "damageMultiplier": 13.8075,
          "hitCount": 8
        }
      ]
    },
    "normal": {
      "id": "ichika_normal",
      "name": "正義実現委員会の連絡網",
      "description": "30秒毎に、を加算（間）",
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
      "id": "ichika_passive",
      "name": "鋭い本能",
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
      "id": "ichika_sub",
      "name": "そういう時もあるっすよね",
      "description": "攻撃時、隠れていない敵に対して攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0238,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0245,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0259,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0308,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0315,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0329,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0378,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0385,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0399,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.0448,
          "hitCount": 1
        }
      ]
    }
  }
};
