import { Character } from '../../types';

export const noa: Character = {
  "id": "noa",
  "name": "ノア",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1086,
    "defense": 118,
    "hp": 25830,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 988,
    "accuracy": 100,
    "evasion": 1090,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "noa_ex",
      "name": "記録はスピードが命ですから",
      "description": "指定した敵1人に対して（40秒間）/ を減少（40秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -21.33,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -24.53,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -30.93,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -34.13,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -40.53,
              "duration": 40,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "noa_normal",
      "name": "隙だらけですよ！",
      "description": "30秒毎に、敵1人に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.9937,
          "hitCount": 10
        },
        {
          "level": 2,
          "damageMultiplier": 4.1936,
          "hitCount": 10
        },
        {
          "level": 3,
          "damageMultiplier": 4.3935,
          "hitCount": 10
        },
        {
          "level": 4,
          "damageMultiplier": 5.1923,
          "hitCount": 10
        },
        {
          "level": 5,
          "damageMultiplier": 5.3922,
          "hitCount": 10
        },
        {
          "level": 6,
          "damageMultiplier": 5.5911,
          "hitCount": 10
        },
        {
          "level": 7,
          "damageMultiplier": 6.3899,
          "hitCount": 10
        },
        {
          "level": 8,
          "damageMultiplier": 6.5898,
          "hitCount": 10
        },
        {
          "level": 9,
          "damageMultiplier": 6.7897,
          "hitCount": 10
        },
        {
          "level": 10,
          "damageMultiplier": 7.5884,
          "hitCount": 10
        }
      ]
    },
    "passive": {
      "id": "noa_passive",
      "name": "書記の余裕",
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
      "id": "noa_sub",
      "name": "書記のこだわり",
      "description": "ノーマルスキルの使用時、を増加（13秒間）",
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
