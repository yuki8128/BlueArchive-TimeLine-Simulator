import { Character } from '../../types';

export const aruDress: Character = {
  "id": "aru_dress",
  "name": "アル（ドレス）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2820,
    "defense": 103,
    "hp": 17160,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 1980,
    "accuracy": 908,
    "evasion": 198,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "aru_dress_ex",
      "name": "興味深い提案",
      "description": "自身を除く味方1人に対して、会心ダメージ率を83.4%増加（30秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 47.7,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 51.27,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 65.58,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 69.16,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 83.47,
              "duration": 30,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "aru_dress_normal",
      "name": "有意義な取引",
      "description": "50秒毎に、自身を除くHPが最も低い味方1人に対して治癒力の151%分の回復",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.7983
        },
        {
          "level": 2,
          "healMultiplier": 0.838
        },
        {
          "level": 3,
          "healMultiplier": 0.878
        },
        {
          "level": 4,
          "healMultiplier": 1.0375
        },
        {
          "level": 5,
          "healMultiplier": 1.0775
        },
        {
          "level": 6,
          "healMultiplier": 1.1175
        },
        {
          "level": 7,
          "healMultiplier": 1.277
        },
        {
          "level": 8,
          "healMultiplier": 1.317
        },
        {
          "level": 9,
          "healMultiplier": 1.3568
        },
        {
          "level": 10,
          "healMultiplier": 1.5165
        }
      ]
    },
    "passive": {
      "id": "aru_dress_passive",
      "name": "ドレスアップ",
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
      "id": "aru_dress_sub",
      "name": "有利な取引",
      "description": "攻撃時、30%の確率で会心抵抗値を15.3%減少（13秒間）（クールタイム5秒）",
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
