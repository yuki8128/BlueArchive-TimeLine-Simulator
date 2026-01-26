import { Character } from '../../types';

export const hina: Character = {
  "id": "hina",
  "name": "ヒナ",
  "nameEn": "Hina",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2545,
    "defense": 481,
    "hp": 19570,
    "criticalValue": 199,
    "criticalDamage": 200,
    "stability": 1404,
    "accuracy": 99,
    "evasion": 199,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "C",
    "indoor": "C"
  },
  "skills": {
    "ex": {
      "id": "hina_ex",
      "name": "終幕：イシュ・ボシェテ",
      "description": "扇形範囲内の敵に対して、攻撃力の分のダメージ",
      "type": "ex",
      "cost": 7,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 6.3604,
          "hitCount": 10
        },
        {
          "level": 2,
          "damageMultiplier": 7.3137,
          "hitCount": 10
        },
        {
          "level": 3,
          "damageMultiplier": 9.2219,
          "hitCount": 10
        },
        {
          "level": 4,
          "damageMultiplier": 10.176,
          "hitCount": 10
        },
        {
          "level": 5,
          "damageMultiplier": 12.0834,
          "hitCount": 10
        }
      ]
    },
    "normal": {
      "id": "hina_normal",
      "name": "リロードアンドデストロイ",
      "description": "弾薬数が0になった時、すぐにリロード/ を増加（16秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.05,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.1,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 23.15,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.35,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 28.41,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.46,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.67,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 34.72,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 35.77,
              "duration": 16,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 39.98,
              "duration": 16,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "hina_passive",
      "name": "冷徹な風紀委員会",
      "description": "を増加",
      "type": "passive",
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
    "sub": {
      "id": "hina_sub",
      "name": "徹頭徹尾",
      "description": "攻撃時、隠れていない敵に対して攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0277,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0285,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0301,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0358,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0366,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0382,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0439,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0447,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0463,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.052,
          "hitCount": 1
        }
      ]
    }
  }
};
