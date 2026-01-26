import { Character } from '../../types';

export const seiaSwimsuit: Character = {
  "id": "seia_swimsuit",
  "name": "セイア（水着）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2169,
    "defense": 99,
    "hp": 22020,
    "criticalValue": 209,
    "criticalDamage": 200,
    "stability": 948,
    "accuracy": 104,
    "evasion": 1045,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "seia_swimsuit_ex",
      "name": "浪漫きらめく浜辺",
      "description": "自身を除く味方1人に対して、EXスキルの与えるダメージ量を74.1%加算（25秒間）",
      "type": "ex",
      "cost": 3,
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
      "id": "seia_swimsuit_normal",
      "name": "刹那の記録",
      "description": "通常攻撃12回毎に、自身を除くHPが最も低い味方1人に対して治癒力の103%分の回復/ 自身は治癒力の103%分の回復",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.6493
        },
        {
          "level": 2,
          "healMultiplier": 0.6818
        },
        {
          "level": 3,
          "healMultiplier": 0.7143
        },
        {
          "level": 4,
          "healMultiplier": 0.7793
        },
        {
          "level": 5,
          "healMultiplier": 0.8118
        },
        {
          "level": 6,
          "healMultiplier": 0.844
        },
        {
          "level": 7,
          "healMultiplier": 0.909
        },
        {
          "level": 8,
          "healMultiplier": 0.9415
        },
        {
          "level": 9,
          "healMultiplier": 0.974
        },
        {
          "level": 10,
          "healMultiplier": 1.039
        }
      ]
    },
    "passive": {
      "id": "seia_swimsuit_passive",
      "name": "リフレッシュ",
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
      "id": "seia_swimsuit_sub",
      "name": "シティ・ポップ・スター",
      "description": "EXスキルの発動と同時に、攻撃速度を31%増加（26秒間）",
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
