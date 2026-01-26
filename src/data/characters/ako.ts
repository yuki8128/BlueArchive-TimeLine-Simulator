import { Character } from '../../types';

export const ako: Character = {
  "id": "ako",
  "name": "アコ",
  "rarity": 3,
  "attackType": "mystic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 1477,
    "defense": 113,
    "hp": 15882,
    "criticalValue": 211,
    "criticalDamage": 200,
    "stability": 1086,
    "accuracy": 105,
    "evasion": 1039,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "ako_ex",
      "name": "偵察データを共有します",
      "description": "味方1人に対して、を増加。さらに率を増加（16秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 27.25,
              "duration": 16,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 50.59,
              "duration": 16,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 29.29,
              "duration": 16,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 54.39,
              "duration": 16,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 33.37,
              "duration": 16,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 61.98,
              "duration": 16,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 35.42,
              "duration": 16,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 65.77,
              "duration": 16,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 39.51,
              "duration": 16,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 73.36,
              "duration": 16,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "ako_normal",
      "name": "補給プランB",
      "description": "45秒毎に、HPが最も低い味方1人に対して治癒力の分の回復",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.2905
        },
        {
          "level": 2,
          "healMultiplier": 1.355
        },
        {
          "level": 3,
          "healMultiplier": 1.4195
        },
        {
          "level": 4,
          "healMultiplier": 1.6778
        },
        {
          "level": 5,
          "healMultiplier": 1.7423
        },
        {
          "level": 6,
          "healMultiplier": 1.8068
        },
        {
          "level": 7,
          "healMultiplier": 2.0648
        },
        {
          "level": 8,
          "healMultiplier": 2.1293
        },
        {
          "level": 9,
          "healMultiplier": 2.1938
        },
        {
          "level": 10,
          "healMultiplier": 2.452
        }
      ]
    },
    "passive": {
      "id": "ako_passive",
      "name": "支援を開始します",
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
      "id": "ako_sub",
      "name": "サポートはお任せください",
      "description": "味方の率を増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 9.12,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 9.57,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 10.03,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 11.86,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 12.31,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 12.77,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 14.59,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.04,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.5,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 17.32,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
