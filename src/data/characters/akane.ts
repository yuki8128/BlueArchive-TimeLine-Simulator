import { Character } from '../../types';

export const akane: Character = {
  "id": "akane",
  "name": "アカネ",
  "nameEn": "Akane",
  "rarity": 2,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 983,
    "defense": 117,
    "hp": 25590,
    "criticalValue": 203,
    "criticalDamage": 200,
    "stability": 980,
    "accuracy": 101,
    "evasion": 1119,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "A",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "akane_ex",
      "name": "優雅に排除します",
      "description": "敵1人に対して、攻撃力の876%分のダメージ/ さらに防御力を37.7%減少（30秒間）",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.4795,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -29.04,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 6.3019,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -29.04,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 7.1242,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -33.39,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 7.9455,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -33.39,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 8.7679,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -37.75,
              "duration": 30,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "akane_normal",
      "name": "上品に貫きます",
      "description": "40秒毎に、敵1人に対して攻撃力の753%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.968,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 4.1667,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.3644,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 5.1582,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.3569,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 5.5546,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 6.3484,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 6.5471,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 6.7448,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 7.5386,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "akane_passive",
      "name": "速やかに前進します",
      "description": "移動速度を26.6%増加",
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
      "id": "akane_sub",
      "name": "的確に制圧します",
      "description": "攻撃時、10%の確率で敵の回避値を12.7%減少（30秒間）（クールタイム5秒）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -6.72,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -7.06,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -7.4,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -8.74,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -9.08,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -9.41,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -10.76,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -11.09,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -11.43,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -12.77,
              "duration": 30,
              "target": "enemy"
            }
          ]
        }
      ]
    }
  }
};
