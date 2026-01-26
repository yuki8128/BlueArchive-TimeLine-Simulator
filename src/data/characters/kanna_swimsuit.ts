import { Character } from '../../types';

export const kannaSwimsuit: Character = {
  "id": "kanna_swimsuit",
  "name": "カンナ（水着）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1492,
    "defense": 108,
    "hp": 23640,
    "criticalValue": 218,
    "criticalDamage": 200,
    "stability": 904,
    "accuracy": 109,
    "evasion": 998,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "kanna_swimsuit_ex",
      "name": "水上安全、確保！",
      "description": "敵1人に対して、攻撃力の927%分のダメージ/ 防御力を47.8%減少（20秒間）",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.8824,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -25.17,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 5.6141,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -28.94,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 7.0792,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -36.49,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 7.8108,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -40.26,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 9.2759,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -47.81,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "kanna_swimsuit_normal",
      "name": "入念な準備運動",
      "description": "40秒毎に、被ダメージ量を19.6%減少（30秒間）",
      "type": "normal",
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
    },
    "passive": {
      "id": "kanna_swimsuit_passive",
      "name": "ライフセーバーとしての心構え",
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
      "id": "kanna_swimsuit_sub",
      "name": "ぎこちない笑顔",
      "description": "自身とスペシャル生徒の攻撃力を30.6%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.11,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 16.11,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.92,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 16.92,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.73,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 17.73,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.95,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 20.95,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.75,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 21.75,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.56,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 22.56,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.78,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 25.78,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.58,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 26.58,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.39,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 27.39,
              "duration": 999,
              "target": "ally"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 30.61,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 30.61,
              "duration": 999,
              "target": "ally"
            }
          ]
        }
      ]
    }
  }
};
