import { Character } from '../../types';

export const ibuki: Character = {
  "id": "ibuki",
  "name": "イブキ",
  "rarity": 1,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2360,
    "defense": 113,
    "hp": 21280,
    "criticalValue": 210,
    "criticalDamage": 200,
    "stability": 1324,
    "accuracy": 737,
    "evasion": 756,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "C",
    "outdoor": "B",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "ibuki_ex",
      "name": "イブキのお絵描きタイム！",
      "description": "自身を除く円形範囲内の味方のを増加（35秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.46,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 30.43,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 38.36,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 42.33,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 50.27,
              "duration": 35,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "ibuki_normal",
      "name": "悪い子はメッだよ！",
      "description": "30秒毎に、敵1人に対して攻撃力の分のダメージ/ さらにを減少（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.0464,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.61,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.1493,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.61,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.2515,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.61,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.6606,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -20.47,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.7628,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -20.47,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 2.8651,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -20.47,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 3.2747,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -22.33,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 3.377,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -22.33,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 3.4792,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -22.33,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 3.8882,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -24.19,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "ibuki_passive",
      "name": "品行方正な女の子",
      "description": "を増加",
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
      "id": "ibuki_sub",
      "name": "万魔殿のマスコット",
      "description": "EXスキル使用開始時、自身に対して治癒力の分の回復",
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
