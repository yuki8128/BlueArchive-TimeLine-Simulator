import { Character } from '../../types';

export const serinaChristmas: Character = {
  "id": "serina_christmas",
  "name": "セリナ（クリスマス）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2080,
    "defense": 108,
    "hp": 20380,
    "criticalValue": 218,
    "criticalDamage": 200,
    "stability": 1268,
    "accuracy": 765,
    "evasion": 724,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "serina_christmas_ex",
      "name": "祝福の響き",
      "description": "自身を除く円形範囲内の味方に対して、会心ダメージ率を43.5%増加（50秒間）、を1個獲得（は最大15個まで重複）/ 獲得された数x3.7%の貫通特効を加算(50秒間)",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 27.24,
              "duration": 50,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 31.33,
              "duration": 50,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 35.41,
              "duration": 50,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 39.5,
              "duration": 50,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 43.59,
              "duration": 50,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "serina_christmas_normal",
      "name": "プレゼントセットC",
      "description": "通常攻撃21回毎に、自身を除く円形範囲内の味方に対して、プレゼントを投擲（30秒間） 緑の箱：会心ダメージ率21%増加 赤い箱：会心ダメージ率24%増加 くまのぬいぐるみ：会心ダメージ率27%増加",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 11.07,
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
              "value": 11.63,
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
              "value": 12.18,
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
              "value": 14.4,
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
              "value": 14.95,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.5,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 17.71,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 18.27,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 18.82,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 21.03,
              "duration": 30,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "serina_christmas_passive",
      "name": "守護天使の意志",
      "description": "HPを26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "serina_christmas_sub",
      "name": "聖なる加護",
      "description": "リロード時、回避値を34.4%増加（15秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 18.15,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 19.06,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 19.97,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 23.59,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 24.5,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 25.41,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 29.04,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 29.94,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 30.85,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 34.48,
              "duration": 15,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
