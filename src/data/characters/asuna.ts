import { Character } from '../../types';

export const asuna: Character = {
  "id": "asuna",
  "name": "アスナ",
  "nameEn": "Asuna",
  "rarity": 1,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2661,
    "defense": 123,
    "hp": 23090,
    "criticalValue": 243,
    "criticalDamage": 200,
    "stability": 1436,
    "accuracy": 681,
    "evasion": 778,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "B",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "asuna_ex",
      "name": "行っくよー！",
      "description": "EXスキル使用中、回避値を43.4%増加/ 攻撃速度を57.3%増加（30秒間）",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 43.41,
              "duration": 3,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 43.41,
              "duration": 3,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 43.41,
              "duration": 3,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 43.41,
              "duration": 3,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 43.41,
              "duration": 3,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "asuna_normal",
      "name": "撃つよーっ！",
      "description": "20秒毎に敵1人に対して攻撃力の416%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.1913,
          "hitCount": 11
        },
        {
          "level": 2,
          "damageMultiplier": 2.3013,
          "hitCount": 11
        },
        {
          "level": 3,
          "damageMultiplier": 2.4105,
          "hitCount": 11
        },
        {
          "level": 4,
          "damageMultiplier": 2.8489,
          "hitCount": 11
        },
        {
          "level": 5,
          "damageMultiplier": 2.9589,
          "hitCount": 11
        },
        {
          "level": 6,
          "damageMultiplier": 3.0681,
          "hitCount": 11
        },
        {
          "level": 7,
          "damageMultiplier": 3.5065,
          "hitCount": 11
        },
        {
          "level": 8,
          "damageMultiplier": 3.6157,
          "hitCount": 11
        },
        {
          "level": 9,
          "damageMultiplier": 3.7257,
          "hitCount": 11
        },
        {
          "level": 10,
          "damageMultiplier": 4.1641,
          "hitCount": 11
        }
      ]
    },
    "passive": {
      "id": "asuna_passive",
      "name": "これは痛いよ？",
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
      "id": "asuna_sub",
      "name": "スピード上げるね？",
      "description": "EXスキルの使用時、攻撃速度を38.3%増加（30秒間）",
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
