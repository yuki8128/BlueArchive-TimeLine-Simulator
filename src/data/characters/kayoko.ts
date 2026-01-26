import { Character } from '../../types';

export const kayoko: Character = {
  "id": "kayoko",
  "name": "カヨコ",
  "nameEn": "Kayoko",
  "rarity": 2,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1053,
    "defense": 121,
    "hp": 26330,
    "criticalValue": 197,
    "criticalDamage": 200,
    "stability": 1008,
    "accuracy": 98,
    "evasion": 1088,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "D",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "kayoko_ex",
      "name": "パニックブリンガー",
      "description": "円形範囲内の敵に対して、攻撃力の分のダメージ/ を付与（間）",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.4908,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 4.0144,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.538,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 5.0617,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.5853,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "kayoko_normal",
      "name": "パニックショット",
      "description": "20秒毎に、敵1人に対して攻撃力の分のダメージ/ さらに30%の確率でを付与（3.6秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.3283,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.3944,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.4616,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.7272,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.7934,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.8596,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.1252,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.1914,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.2585,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.5232,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "kayoko_passive",
      "name": "怖い顔",
      "description": "を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "kayoko_sub",
      "name": "仕方ない",
      "description": "CC状態の敵を攻撃した時、攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.7481,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.7855,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.8229,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.9725,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.0099,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.0473,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 1.1969,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 1.2343,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 1.2717,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 1.4213,
          "hitCount": 1
        }
      ]
    }
  }
};
