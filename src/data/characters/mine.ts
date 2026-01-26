import { Character } from '../../types';

export const mine: Character = {
  "id": "mine",
  "name": "ミネ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1663,
    "defense": 981,
    "hp": 45560,
    "criticalValue": 218,
    "criticalDamage": 200,
    "stability": 1816,
    "accuracy": 654,
    "evasion": 218,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "mine_ex",
      "name": "誇りと信念",
      "description": "指定した位置に移動し、円形範囲内の敵に対して、攻撃力の196%分のダメージを与えミネに向かって引き寄せる/ 回避値と防御力を13%減少（40秒間）/ 対象が中型の敵の場合は、回避値と防御力の減少値が元の2.5倍に強化される。",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.0343,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -6.86,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "evasionFlat",
              "value": -17.15,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -6.86,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -17.15,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 1.1892,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -7.89,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "evasionFlat",
              "value": -19.72,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -7.89,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -19.72,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 1.5,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -9.95,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "evasionFlat",
              "value": -24.87,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -9.95,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -24.87,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 1.6549,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -10.98,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "evasionFlat",
              "value": -27.44,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -10.98,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -27.44,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 1.9649,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -13.04,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "evasionFlat",
              "value": -32.58,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -13.04,
              "duration": 40,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -32.58,
              "duration": 40,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "mine_normal",
      "name": "峻厳な宣告",
      "description": "「救護の心構え」状態の解除後に発動/ 発動時、円形範囲内の敵に対して、防御力の902%分のダメージ、回避値と防御力を15.2%減少（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.7508,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -8.01,
              "duration": 30,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -8.01,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 4.9881,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -8.41,
              "duration": 30,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -8.41,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 5.2255,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -8.81,
              "duration": 30,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -8.81,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 6.1758,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -10.41,
              "duration": 30,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -10.41,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 6.4132,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -10.81,
              "duration": 30,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -10.81,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 6.6506,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -11.21,
              "duration": 30,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -11.21,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 7.6009,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -12.81,
              "duration": 30,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -12.81,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 7.8383,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -13.21,
              "duration": 30,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -13.21,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 8.0756,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -13.61,
              "duration": 30,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -13.61,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 9.0259,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": -15.22,
              "duration": 30,
              "target": "enemy"
            },
            {
              "type": "defensePercent",
              "value": -15.22,
              "duration": 30,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "mine_passive",
      "name": "騎士団の意志",
      "description": "HPを26.6%増加",
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
      "id": "mine_sub",
      "name": "不屈の勇気",
      "description": "EXスキルの発動と同時に、「救護の心構え」状態を付与。「救護の心構え」は、治癒力の123%分の持続回復を付与（10秒間）/ すでに「救護の心構え」状態の場合、代わりに会心抵抗値を36.7%増加（20秒間）",
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
