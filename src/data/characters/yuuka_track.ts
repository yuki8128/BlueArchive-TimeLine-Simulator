import { Character } from '../../types';

export const yuukaTrack: Character = {
  "id": "yuuka_track",
  "name": "ユウカ（体操服）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1426,
    "defense": 165,
    "hp": 38210,
    "criticalValue": 216,
    "criticalDamage": 200,
    "stability": 1284,
    "accuracy": 108,
    "evasion": 1323,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "yuuka_track_ex",
      "name": "R.S.G！",
      "description": "指定した位置に移動した後、治癒力の320%分のシールド効果を発動（25秒間）/ 旗を召喚し自身を除く味方3人を旗の位置に移動させ、旗に到着した対象に対して、治癒力の320%分のシールド効果を発動（25秒間）",
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
      "id": "yuuka_track_normal",
      "name": "水分補給",
      "description": "30秒毎に、自身にシールド効果がない場合、治癒力の220%分のシールド効果を発動（23秒間）/ シールド効果がある場合治癒力を23.4%増加（90秒間）（治癒力増加効果は最大で3回分まで効果が重複）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 12.37,
              "duration": 90,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 12.98,
              "duration": 90,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 13.6,
              "duration": 90,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 16.07,
              "duration": 90,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 16.69,
              "duration": 90,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 17.31,
              "duration": 90,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 19.78,
              "duration": 90,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 20.4,
              "duration": 90,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 21.01,
              "duration": 90,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 23.49,
              "duration": 90,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "yuuka_track_passive",
      "name": "数学的競技戦略",
      "description": "攻撃速度を26.6%増加",
      "type": "passive",
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
    "sub": {
      "id": "yuuka_track_sub",
      "name": "最適動線算出",
      "description": "移動して止まった時、神秘特効を59.1%加算（20秒間）",
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
