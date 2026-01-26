import { Character } from '../../types';

export const serina: Character = {
  "id": "serina",
  "name": "セリナ",
  "nameEn": "Serina",
  "rarity": 1,
  "attackType": "mystic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 1678,
    "defense": 148,
    "hp": 18550,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 1596,
    "accuracy": 704,
    "evasion": 805,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "C",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "serina_ex",
      "name": "集中治療セットA",
      "description": "味方1人を指定した位置に移動させた後、治癒力の分の回復",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.2
        },
        {
          "level": 2,
          "healMultiplier": 1.38
        },
        {
          "level": 3,
          "healMultiplier": 1.74
        },
        {
          "level": 4,
          "healMultiplier": 1.92
        },
        {
          "level": 5,
          "healMultiplier": 2.28
        }
      ]
    },
    "normal": {
      "id": "serina_normal",
      "name": "緊急治療セットB",
      "description": "35秒毎に、HPが最も低い味方1人に対して治癒力の分の回復",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.9405
        },
        {
          "level": 2,
          "healMultiplier": 0.9878
        },
        {
          "level": 3,
          "healMultiplier": 1.0348
        },
        {
          "level": 4,
          "healMultiplier": 1.2228
        },
        {
          "level": 5,
          "healMultiplier": 1.2698
        },
        {
          "level": 6,
          "healMultiplier": 1.3168
        },
        {
          "level": 7,
          "healMultiplier": 1.505
        },
        {
          "level": 8,
          "healMultiplier": 1.552
        },
        {
          "level": 9,
          "healMultiplier": 1.599
        },
        {
          "level": 10,
          "healMultiplier": 1.787
        }
      ]
    },
    "passive": {
      "id": "serina_passive",
      "name": "白衣の天使",
      "description": "を増加",
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
      "id": "serina_sub",
      "name": "天使のほほ笑み",
      "description": "味方のを増加",
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
