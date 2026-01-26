import { Character } from '../../types';

export const mariTrack: Character = {
  "id": "mari_track",
  "name": "マリー（体操服）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1200,
    "defense": 135,
    "hp": 26240,
    "criticalValue": 218,
    "criticalDamage": 200,
    "stability": 904,
    "accuracy": 109,
    "evasion": 996,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "mari_track_ex",
      "name": "お水をどうぞ",
      "description": "自身を除く円形範囲内の味方に対して治癒力の318%分の回復",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.6763
        },
        {
          "level": 2,
          "healMultiplier": 1.9278
        },
        {
          "level": 3,
          "healMultiplier": 2.4305
        },
        {
          "level": 4,
          "healMultiplier": 2.682
        },
        {
          "level": 5,
          "healMultiplier": 3.1848
        }
      ]
    },
    "normal": {
      "id": "mari_track_normal",
      "name": "シスターの応援",
      "description": "45秒毎に、自身を除く防御力が最も高い味方1人と自身に治癒力の132%分の回復、防御力を24.1%増加（40秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 18.55,
              "duration": 40,
              "target": "ally"
            }
          ],
          "healMultiplier": 0.828
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 18.55,
              "duration": 40,
              "target": "ally"
            }
          ],
          "healMultiplier": 0.8695
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 18.55,
              "duration": 40,
              "target": "ally"
            }
          ],
          "healMultiplier": 0.9108
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 20.41,
              "duration": 40,
              "target": "ally"
            }
          ],
          "healMultiplier": 0.9935
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 20.41,
              "duration": 40,
              "target": "ally"
            }
          ],
          "healMultiplier": 1.035
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 20.41,
              "duration": 40,
              "target": "ally"
            }
          ],
          "healMultiplier": 1.0765
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 22.26,
              "duration": 40,
              "target": "ally"
            }
          ],
          "healMultiplier": 1.1593
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 22.26,
              "duration": 40,
              "target": "ally"
            }
          ],
          "healMultiplier": 1.2005
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 22.26,
              "duration": 40,
              "target": "ally"
            }
          ],
          "healMultiplier": 1.242
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 24.12,
              "duration": 40,
              "target": "ally"
            }
          ],
          "healMultiplier": 1.3248
        }
      ]
    },
    "passive": {
      "id": "mari_track_passive",
      "name": "応援の心構え",
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
      "id": "mari_track_sub",
      "name": "献身的な励まし",
      "description": "EXスキル並びにノーマルスキル使用時、対象の残りHPが30%以下の場合は、治癒力の171%分の回復",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.9
        },
        {
          "level": 2,
          "healMultiplier": 0.945
        },
        {
          "level": 3,
          "healMultiplier": 0.99
        },
        {
          "level": 4,
          "healMultiplier": 1.17
        },
        {
          "level": 5,
          "healMultiplier": 1.215
        },
        {
          "level": 6,
          "healMultiplier": 1.26
        },
        {
          "level": 7,
          "healMultiplier": 1.44
        },
        {
          "level": 8,
          "healMultiplier": 1.485
        },
        {
          "level": 9,
          "healMultiplier": 1.53
        },
        {
          "level": 10,
          "healMultiplier": 1.71
        }
      ]
    }
  }
};
