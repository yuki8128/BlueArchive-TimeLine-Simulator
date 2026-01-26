import { Character } from '../../types';

export const karin: Character = {
  "id": "karin",
  "name": "カリン",
  "nameEn": "Karin",
  "rarity": 3,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2762,
    "defense": 123,
    "hp": 17308,
    "criticalValue": 194,
    "criticalDamage": 200,
    "stability": 2364,
    "accuracy": 873,
    "evasion": 194,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "karin_ex",
      "name": "ターゲット、排除する",
      "description": "敵1人に対して、攻撃力の分のダメージ/ 超大型の敵には分の追加ダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 6.8726,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 7.9037,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 8.9341,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 9.9652,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 10.9963,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "karin_normal",
      "name": "火力支援、開始",
      "description": "40秒毎に、敵1人に対して攻撃力の分のダメージ/ さらに50%の確率で、を付与（3.1秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.2365,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.3485,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.4598,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.9071,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 3.0191,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 3.1311,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.5784,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.6897,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.8017,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 4.249,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "karin_passive",
      "name": "武装強化、完了",
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
      "id": "karin_sub",
      "name": "支援活動、開始",
      "description": "味方のを増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
