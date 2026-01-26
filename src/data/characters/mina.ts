import { Character } from '../../types';

export const mina: Character = {
  "id": "mina",
  "name": "ミナ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1571,
    "defense": 100,
    "hp": 22060,
    "criticalValue": 209,
    "criticalDamage": 200,
    "stability": 952,
    "accuracy": 418,
    "evasion": 762,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "mina_ex",
      "name": "竜虎相搏",
      "description": "敵1人に対して、攻撃力の593%分のダメージ/ さらに攻撃力、回避値、命中値を30.2%減少（50秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.1243,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -15.92,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "evasionFlat",
              "value": 0,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "accuracyFlat",
              "value": 0,
              "duration": 50,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 3.5928,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.3,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "evasionFlat",
              "value": 0,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "accuracyFlat",
              "value": 0,
              "duration": 50,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 4.5306,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -23.08,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "evasionFlat",
              "value": -23.08,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "accuracyFlat",
              "value": 0,
              "duration": 50,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 4.9991,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -25.46,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "evasionFlat",
              "value": -25.46,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "accuracyFlat",
              "value": 0,
              "duration": 50,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 5.9361,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -30.23,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "evasionFlat",
              "value": -30.23,
              "duration": 50,
              "target": "enemy"
            },
            {
              "type": "accuracyFlat",
              "value": -30.23,
              "duration": 50,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "mina_normal",
      "name": "破竹之勢",
      "description": "通常攻撃8回毎に、発動後すぐにリロード/ 敵1人に対して、攻撃力の423%分のダメージ/ 対象の弱体状態の個数によって追加ダメージ 3個：攻撃力の846%分のダメージ 4個：攻撃力の1269%分のダメージ 5個以上：攻撃力の1693%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.2283,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.3394,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.4513,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.8964,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 3.0083,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 3.1194,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.5654,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.6765,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.7876,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 4.2335,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "mina_passive",
      "name": "一志不退",
      "description": "回避値を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "mina_sub",
      "name": "騎虎之勢",
      "description": "EXスキルの発動と同時に攻撃力、回避値、命中値を35.8%増加（20秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.88,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 18.88,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 18.88,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.82,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 19.82,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 19.82,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.77,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 20.77,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 20.77,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.54,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 24.54,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 24.54,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.48,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 25.48,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 25.48,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.42,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 26.42,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 26.42,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 30.2,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 30.2,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 30.2,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 31.14,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 31.14,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 31.14,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.09,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 32.09,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 32.09,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 35.86,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 35.86,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "accuracyFlat",
              "value": 35.86,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
