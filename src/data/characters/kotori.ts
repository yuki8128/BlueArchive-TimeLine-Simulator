import { Character } from '../../types';

export const kotori: Character = {
  "id": "kotori",
  "name": "コトリ",
  "nameEn": "Kotori",
  "rarity": 1,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 1865,
    "defense": 482,
    "hp": 19610,
    "criticalValue": 198,
    "criticalDamage": 200,
    "stability": 1404,
    "accuracy": 99,
    "evasion": 198,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "B",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "kotori_ex",
      "name": "ブラックボックス",
      "description": "円形範囲内の味方4人を指定した位置に移動させた後、治癒力の334%分のシールド効果を発動（13秒間）",
      "type": "ex",
      "cost": 4,
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
        }
      ]
    },
    "normal": {
      "id": "kotori_normal",
      "name": "ごめんなさい！",
      "description": "35秒毎に、扇形範囲内の敵に対して攻撃力の511%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.6931,
          "hitCount": 20
        },
        {
          "level": 2,
          "damageMultiplier": 2.8279,
          "hitCount": 20
        },
        {
          "level": 3,
          "damageMultiplier": 2.9628,
          "hitCount": 20
        },
        {
          "level": 4,
          "damageMultiplier": 3.5014,
          "hitCount": 20
        },
        {
          "level": 5,
          "damageMultiplier": 3.6355,
          "hitCount": 20
        },
        {
          "level": 6,
          "damageMultiplier": 3.7703,
          "hitCount": 20
        },
        {
          "level": 7,
          "damageMultiplier": 4.3089,
          "hitCount": 20
        },
        {
          "level": 8,
          "damageMultiplier": 4.4438,
          "hitCount": 20
        },
        {
          "level": 9,
          "damageMultiplier": 4.5786,
          "hitCount": 20
        },
        {
          "level": 10,
          "damageMultiplier": 5.1164,
          "hitCount": 20
        }
      ]
    },
    "passive": {
      "id": "kotori_passive",
      "name": "論点把握能力",
      "description": "会心ダメージ率を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "kotori_sub",
      "name": "理解しました！",
      "description": "敵を倒した時、会心ダメージ率を38.3%増加（30秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 20.16,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 21.17,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 22.18,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 26.21,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 27.22,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 28.23,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 32.26,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 33.27,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 34.28,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 38.31,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
