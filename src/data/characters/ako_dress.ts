import { Character } from '../../types';

export const akoDress: Character = {
  "id": "ako_dress",
  "name": "アコ（ドレス）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1449,
    "defense": 108,
    "hp": 23470,
    "criticalValue": 219,
    "criticalDamage": 200,
    "stability": 900,
    "accuracy": 439,
    "evasion": 720,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "ako_dress_ex",
      "name": "完璧なエージェント",
      "description": "円形範囲内の味方の会心値を19.8%増加、会心ダメージ率を57.5%増加（30秒間）/ さらに味方1人当たり、自身の「警護成功」を1個追加（最大15個まで）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 11.34,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 32.88,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 12.19,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 35.35,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 15.59,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 45.2,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 16.44,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 47.67,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 19.84,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "critDamagePercent",
              "value": 57.53,
              "duration": 30,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "ako_dress_normal",
      "name": "ターゲットは逃しません！",
      "description": "35秒毎に、敵1人の防御力を24%減少（22秒間）/ さらに自身の「警護成功」数によって与えるダメージが変更 3個以下：攻撃力の942%分のダメージ 4個～7個：攻撃力の1010%分のダメージ 8個～11個：攻撃力の1111%分のダメージ 12個以上：攻撃力の1212%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.9627,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.5,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 5.2114,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.5,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 5.4593,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.5,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 6.4515,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.35,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 6.7001,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.35,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 6.948,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.35,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 7.9402,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -22.2,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 8.1889,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -22.2,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 8.4367,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -22.2,
              "duration": 22,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 9.4289,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -24.05,
              "duration": 22,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "ako_dress_passive",
      "name": "エージェントの自信",
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
      "id": "ako_dress_sub",
      "name": "作戦の成果",
      "description": "「警護成功」1個毎に、攻撃力を5.7%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 3.03,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 3.18,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 3.33,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 3.94,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 4.09,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 4.24,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 4.84,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 4.99,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 5.15,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 5.75,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
