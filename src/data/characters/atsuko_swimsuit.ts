import { Character } from '../../types';

export const atsukoSwimsuit: Character = {
  "id": "atsuko_swimsuit",
  "name": "アツコ（水着）",
  "rarity": 1,
  "attackType": "sonic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2490,
    "defense": 574,
    "hp": 21471,
    "criticalValue": 270,
    "criticalDamage": 200,
    "stability": 1477,
    "accuracy": 702,
    "evasion": 1103,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "B",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "atsuko_swimsuit_ex",
      "name": "夏の思い出",
      "description": "味方1人に対して、治癒力の290%分の回復",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.53
        },
        {
          "level": 2,
          "healMultiplier": 1.7595
        },
        {
          "level": 3,
          "healMultiplier": 2.2185
        },
        {
          "level": 4,
          "healMultiplier": 2.448
        },
        {
          "level": 5,
          "healMultiplier": 2.907
        }
      ]
    },
    "normal": {
      "id": "atsuko_swimsuit_normal",
      "name": "この花をあなたに",
      "description": "30秒毎に、HPが最も低い味方1人の被回復率を36%増加（20秒間）",
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
      "id": "atsuko_swimsuit_passive",
      "name": "爽やかな海風",
      "description": "治癒力を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "atsuko_swimsuit_sub",
      "name": "ビーチのお姫様",
      "description": "味方の攻撃速度を17.3%増加",
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
