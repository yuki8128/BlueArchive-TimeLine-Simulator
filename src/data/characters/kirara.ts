import { Character } from '../../types';

export const kirara: Character = {
  "id": "kirara",
  "name": "キララ",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2566,
    "defense": 113,
    "hp": 21240,
    "criticalValue": 263,
    "criticalDamage": 200,
    "stability": 1320,
    "accuracy": 738,
    "evasion": 755,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "kirara_ex",
      "name": "ゲヘナのセレブリティー！",
      "description": "を攻撃力の28.9%分の追加ダメージを与える攻撃に変更、攻撃力を51.4%増加（40秒間）/ 発動後すぐにリロード",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 39.6,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 39.6,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 45.54,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 45.54,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 51.48,
              "duration": 40,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "kirara_normal",
      "name": "いつもキラキラ！",
      "description": "30秒毎に、敵1人に対して攻撃力の744%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.9172,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 4.1136,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.3092,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 5.0925,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.2881,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 5.4845,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 6.2678,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 6.4634,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 6.659,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 7.4423,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "kirara_passive",
      "name": "クレープの甘さ",
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
      "id": "kirara_sub",
      "name": "トキメキ☆って感じ？",
      "description": "が変更された状態の場合、命中値を30.6%増加、通常攻撃のディレイ4回無視",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": 16.13,
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
              "value": 16.94,
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
              "value": 17.75,
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
              "value": 20.98,
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
              "value": 21.78,
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
              "value": 22.59,
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
              "value": 25.81,
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
              "value": 26.62,
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
              "value": 27.42,
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
              "value": 30.65,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
