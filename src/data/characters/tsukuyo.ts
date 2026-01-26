import { Character } from '../../types';

export const tsukuyo: Character = {
  "id": "tsukuyo",
  "name": "ツクヨ",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1341,
    "defense": 163,
    "hp": 45510,
    "criticalValue": 218,
    "criticalDamage": 200,
    "stability": 1268,
    "accuracy": 109,
    "evasion": 1307,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "tsukuyo_ex",
      "name": "ツクヨ流、忍法……！",
      "description": "攻撃を受ける度に、治癒力の11.2%分の回復をする効果を付与（30秒間） （最大で100回分まで適用されます）/ さらに攻撃力を20.2%減少（30秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -28.86,
              "duration": 30,
              "target": "self"
            }
          ],
          "healMultiplier": 0.0701
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -28.86,
              "duration": 30,
              "target": "self"
            }
          ],
          "healMultiplier": 0.0806
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -24.53,
              "duration": 30,
              "target": "self"
            }
          ],
          "healMultiplier": 0.0912
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -24.53,
              "duration": 30,
              "target": "self"
            }
          ],
          "healMultiplier": 0.1017
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -20.21,
              "duration": 30,
              "target": "self"
            }
          ],
          "healMultiplier": 0.1122
        }
      ]
    },
    "normal": {
      "id": "tsukuyo_normal",
      "name": "たくさん、練習しましたので……！",
      "description": "通常攻撃7回毎に、敵1人に対して攻撃力の659%分のダメージ /その敵が中型の場合、さらに防御力を51.6%減少（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.1845,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -38.97,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 4.3936,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -38.97,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 4.6028,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -38.97,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 5.0212,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -42.87,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 5.2303,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -42.87,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 5.4395,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -42.87,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 5.8579,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -46.77,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 6.067,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -46.77,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 6.1721,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -47.74,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 6.5904,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -51.64,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "tsukuyo_passive",
      "name": "生まれ持った素質",
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
      "id": "tsukuyo_sub",
      "name": "まだ、倒れる、わけには……！",
      "description": "自身がCC状態になった時、治癒力の185%分の回復",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.975
        },
        {
          "level": 2,
          "healMultiplier": 1.0238
        },
        {
          "level": 3,
          "healMultiplier": 1.0725
        },
        {
          "level": 4,
          "healMultiplier": 1.2675
        },
        {
          "level": 5,
          "healMultiplier": 1.3163
        },
        {
          "level": 6,
          "healMultiplier": 1.365
        },
        {
          "level": 7,
          "healMultiplier": 1.56
        },
        {
          "level": 8,
          "healMultiplier": 1.6088
        },
        {
          "level": 9,
          "healMultiplier": 1.6575
        },
        {
          "level": 10,
          "healMultiplier": 1.8525
        }
      ]
    }
  }
};
