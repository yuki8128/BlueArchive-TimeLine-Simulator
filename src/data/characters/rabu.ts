import { Character } from '../../types';

export const rabu: Character = {
  "id": "rabu",
  "name": "ラブ",
  "rarity": 1,
  "attackType": "sonic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1974,
    "defense": 710,
    "hp": 30380,
    "criticalValue": 280,
    "criticalDamage": 200,
    "stability": 1752,
    "accuracy": 741,
    "evasion": 157,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "B",
    "indoor": "C"
  },
  "skills": {
    "ex": {
      "id": "rabu_ex",
      "name": "それなら、やっぱり！",
      "description": "",
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
      "id": "rabu_normal",
      "name": "みんな、いくわよ！！",
      "description": "40秒毎に、ストライカーの味方のを増加（30秒間）/ さらに自身が召喚したヘルメット団が2人以上存在する場合、自身が召喚したヘルメット団のを増加（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 8.33,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 8.74,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 9.15,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 10.82,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.23,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.65,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 13.31,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 13.73,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.14,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.81,
              "duration": 30,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "rabu_passive",
      "name": "もう！腹立つわね！！",
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
      "id": "rabu_sub",
      "name": "今日は焼肉よ！",
      "description": "EXスキルの使用時、現在召喚されたヘルメット団の数によって自身と自身が召喚したヘルメット団の率を増加（20秒間） 1人以下：増加 2人：増加 3人：増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 9.49,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 9.49,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 9.97,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 9.97,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 10.43,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 10.43,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 12.33,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 12.33,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 12.81,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 12.81,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 13.28,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 13.28,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.17,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 15.17,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.65,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 15.65,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 16.13,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 16.13,
              "duration": 20,
              "target": "ally"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 18.02,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 18.02,
              "duration": 20,
              "target": "ally"
            }
          ]
        }
      ]
    }
  }
};
