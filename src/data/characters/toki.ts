import { Character } from '../../types';

export const toki: Character = {
  "id": "toki",
  "name": "トキ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2326,
    "defense": 119,
    "hp": 22360,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 1388,
    "accuracy": 704,
    "evasion": 795,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "toki_ex",
      "name": "システム：アビ・エシュフ",
      "description": "アビ・エシュフモードに転換、攻撃力を41.8%、命中値を18.1%、回避値を12.2%増加/ （アビ・エシュフモードでEXスキル3回使用時にモード解除)",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.15,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 13.95,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 12.21,
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
              "value": 30.07,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 13.95,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 12.21,
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
              "value": 34,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 16.04,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 12.21,
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
              "value": 37.92,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 16.04,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 12.21,
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
              "value": 41.84,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 18.13,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 12.21,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "toki_normal",
      "name": "戦術的判断",
      "description": "35秒毎に、敵1人に対して攻撃力の778%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.867,
          "hitCount": 9
        },
        {
          "level": 2,
          "damageMultiplier": 5.1106,
          "hitCount": 9
        },
        {
          "level": 3,
          "damageMultiplier": 5.3534,
          "hitCount": 9
        },
        {
          "level": 4,
          "damageMultiplier": 5.8406,
          "hitCount": 9
        },
        {
          "level": 5,
          "damageMultiplier": 6.0833,
          "hitCount": 9
        },
        {
          "level": 6,
          "damageMultiplier": 6.3269,
          "hitCount": 9
        },
        {
          "level": 7,
          "damageMultiplier": 6.8133,
          "hitCount": 9
        },
        {
          "level": 8,
          "damageMultiplier": 7.0569,
          "hitCount": 9
        },
        {
          "level": 9,
          "damageMultiplier": 7.3005,
          "hitCount": 9
        },
        {
          "level": 10,
          "damageMultiplier": 7.7868,
          "hitCount": 9
        }
      ]
    },
    "passive": {
      "id": "toki_passive",
      "name": "コールサインゼロフォー",
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
      "id": "toki_sub",
      "name": "目には目を",
      "description": "アビ・エシュフモードの転換後、EXスキルの使用時、使用回数によって追加ダメージ EXスキル1回使用時：攻撃力の25.6%分のダメージ EXスキル2回使用時：攻撃力の51.1%分のダメージ EXスキル3回使用時：攻撃力の76.7%分のダメージ （この攻撃は敵の防御力を60%無視します）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.1764,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.1857,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.1941,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.2033,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.2117,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.221,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.2294,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.2386,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.247,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.2562,
          "hitCount": 1
        }
      ]
    }
  }
};
