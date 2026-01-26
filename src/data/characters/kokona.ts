import { Character } from '../../types';

export const kokona: Character = {
  "id": "kokona",
  "name": "ココナ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2061,
    "defense": 135,
    "hp": 22620,
    "criticalValue": 219,
    "criticalDamage": 200,
    "stability": 1264,
    "accuracy": 766,
    "evasion": 723,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "kokona_ex",
      "name": "たいへんよくできました！",
      "description": "自身を除き味方1人に対して治癒力の290%分の回復/ 自身に治癒力の101%分の回復/ 「花丸スタンプ」を1個獲得",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.5265
        },
        {
          "level": 2,
          "healMultiplier": 1.7555
        },
        {
          "level": 3,
          "healMultiplier": 2.2135
        },
        {
          "level": 4,
          "healMultiplier": 2.4423
        },
        {
          "level": 5,
          "healMultiplier": 2.9003
        }
      ]
    },
    "normal": {
      "id": "kokona_normal",
      "name": "次も楽しみにしてますよ！",
      "description": "味方が会心を100回成功した時、自身を除きHPが最も低い味方1人に対して治癒力の107%分の回復/ 「花丸スタンプ」を1個獲得",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.566
        },
        {
          "level": 2,
          "healMultiplier": 0.5943
        },
        {
          "level": 3,
          "healMultiplier": 0.6228
        },
        {
          "level": 4,
          "healMultiplier": 0.7358
        },
        {
          "level": 5,
          "healMultiplier": 0.7643
        },
        {
          "level": 6,
          "healMultiplier": 0.7925
        },
        {
          "level": 7,
          "healMultiplier": 0.9058
        },
        {
          "level": 8,
          "healMultiplier": 0.934
        },
        {
          "level": 9,
          "healMultiplier": 0.9623
        },
        {
          "level": 10,
          "healMultiplier": 1.0755
        }
      ]
    },
    "passive": {
      "id": "kokona_passive",
      "name": "教官としての責任",
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
      "id": "kokona_sub",
      "name": "梅花園の指導法",
      "description": "「花丸スタンプ」を5個獲得時、自身を除く味方のスキルコストを1減少（EXスキルの使用1回分）（「花丸スタンプ」は初期化されます）/ 自身に治癒力の108%分の回復",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.57
        },
        {
          "level": 2,
          "healMultiplier": 0.5985
        },
        {
          "level": 3,
          "healMultiplier": 0.627
        },
        {
          "level": 4,
          "healMultiplier": 0.741
        },
        {
          "level": 5,
          "healMultiplier": 0.7695
        },
        {
          "level": 6,
          "healMultiplier": 0.798
        },
        {
          "level": 7,
          "healMultiplier": 0.912
        },
        {
          "level": 8,
          "healMultiplier": 0.9405
        },
        {
          "level": 9,
          "healMultiplier": 0.969
        },
        {
          "level": 10,
          "healMultiplier": 1.083
        }
      ]
    }
  }
};
