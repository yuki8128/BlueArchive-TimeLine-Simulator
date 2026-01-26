import { Character } from '../../types';

export const shizuko: Character = {
  "id": "shizuko",
  "name": "シズコ",
  "nameEn": "Shizuko",
  "rarity": 2,
  "attackType": "mystic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 1687,
    "defense": 716,
    "hp": 32465,
    "criticalValue": 200,
    "criticalDamage": 200,
    "stability": 2286,
    "accuracy": 602,
    "evasion": 200,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "A",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "shizuko_ex",
      "name": "百夜堂出張サービス！",
      "description": "遮蔽物を設置/ 円形範囲内の味方のを増加（30秒間）/ 遮蔽物はシズコの最大HPの分の値が追加されたHPを持ちます。",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 16.39,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 16.39,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 18.85,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 18.85,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 21.31,
              "duration": 30,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "shizuko_normal",
      "name": "営業妨害しないで！",
      "description": "25秒毎に、敵1人に対して攻撃力の分のダメージ/ さらにを減少（21秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.848,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -17.46,
              "duration": 21,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 1.9404,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -17.46,
              "duration": 21,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 1.9866,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -17.89,
              "duration": 21,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.3562,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -17.89,
              "duration": 21,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.4024,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.32,
              "duration": 21,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 2.4948,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.32,
              "duration": 21,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 2.8644,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.32,
              "duration": 21,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 2.9568,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.32,
              "duration": 21,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 3.0492,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.32,
              "duration": 21,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 3.4188,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.32,
              "duration": 21,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "shizuko_passive",
      "name": "て、てへぺろっ？",
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
      "id": "shizuko_sub",
      "name": "にゃんにゃんっ！",
      "description": "味方のを増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 9.12,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 9.57,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 10.03,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 11.86,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 12.31,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 12.77,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 14.59,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 15.04,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 15.5,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 17.32,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
