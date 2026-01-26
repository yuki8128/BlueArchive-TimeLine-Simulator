import { Character } from '../../types';

export const yuukaPajama: Character = {
  "id": "yuuka_pajama",
  "name": "ユウカ（パジャマ）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1714,
    "defense": 1022,
    "hp": 39350,
    "criticalValue": 210,
    "criticalDamage": 200,
    "stability": 1324,
    "accuracy": 105,
    "evasion": 227,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "yuuka_pajama_ex",
      "name": "ペロロ様危機一髪！",
      "description": "敵1人に対して、攻撃力の887%分のダメージ/ 防御力を23.3%減少（25秒間）/ 対象が軽装備の場合、防御力を46.7%減少（25秒間）",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.6704,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -16.13,
              "duration": 25,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -32.26,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 5.371,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -16.13,
              "duration": 25,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -32.26,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 6.7721,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.55,
              "duration": 25,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -37.1,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 7.4727,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.55,
              "duration": 25,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -37.1,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 8.8738,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -23.39,
              "duration": 25,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -46.78,
              "duration": 25,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "yuuka_pajama_normal",
      "name": "ナイトケア",
      "description": "30秒毎に、治癒力の115%分の回復",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.7205
        },
        {
          "level": 2,
          "healMultiplier": 0.7565
        },
        {
          "level": 3,
          "healMultiplier": 0.7925
        },
        {
          "level": 4,
          "healMultiplier": 0.8645
        },
        {
          "level": 5,
          "healMultiplier": 0.9005
        },
        {
          "level": 6,
          "healMultiplier": 0.9365
        },
        {
          "level": 7,
          "healMultiplier": 1.0085
        },
        {
          "level": 8,
          "healMultiplier": 1.0445
        },
        {
          "level": 9,
          "healMultiplier": 1.0805
        },
        {
          "level": 10,
          "healMultiplier": 1.1528
        }
      ]
    },
    "passive": {
      "id": "yuuka_pajama_passive",
      "name": "甘やかな夢",
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
      "id": "yuuka_pajama_sub",
      "name": "気だるい目覚め",
      "description": "回復効果を受ける度に、防御力を6.7%増加（30秒間）（最大で7回分まで効果が重複）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 3.63,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 3.82,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 3.91,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 4.64,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 4.73,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 4.91,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 5.64,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 5.81,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 6,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 6.72,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
