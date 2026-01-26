import { Character } from '../../types';

export const kayokoNewyear: Character = {
  "id": "kayoko_newyear",
  "name": "カヨコ（正月）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1262,
    "defense": 113,
    "hp": 24700,
    "criticalValue": 210,
    "criticalDamage": 200,
    "stability": 948,
    "accuracy": 105,
    "evasion": 1042,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "kayoko_newyear_ex",
      "name": "新年のお守り",
      "description": "自身を除く味方1人に対して神秘特効を92.8%加算（40秒間）/ 状態を付与",
      "type": "ex",
      "cost": 2,
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
      "id": "kayoko_newyear_normal",
      "name": "猫の加護",
      "description": "40秒毎に、自身を除く味方1人の会心値を39.5%増加（25秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 20.84,
              "duration": 25,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 21.89,
              "duration": 25,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 22.92,
              "duration": 25,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 27.09,
              "duration": 25,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 28.13,
              "duration": 25,
              "target": "ally"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 29.17,
              "duration": 25,
              "target": "ally"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 33.34,
              "duration": 25,
              "target": "ally"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 34.38,
              "duration": 25,
              "target": "ally"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 35.42,
              "duration": 25,
              "target": "ally"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 39.59,
              "duration": 25,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "kayoko_newyear_passive",
      "name": "増える誤解",
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
      "id": "kayoko_newyear_sub",
      "name": "お守りの絆",
      "description": "味方が会心を200回成功した時、自身の攻撃力を24.9%増加。状態の味方に対して、神秘特効を41.8%加算（50秒間） その後、味方の状態を全て除去",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 13.11,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 13.77,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.42,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.04,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.7,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.35,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.98,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.63,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.29,
              "duration": 50,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.9,
              "duration": 50,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
