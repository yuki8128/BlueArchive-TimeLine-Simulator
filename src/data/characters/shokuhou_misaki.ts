import { Character } from '../../types';

export const shokuhouMisaki: Character = {
  "id": "shokuhou_misaki",
  "name": "食蜂操祈",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2139,
    "defense": 109,
    "hp": 23680,
    "criticalValue": 218,
    "criticalDamage": 200,
    "stability": 908,
    "accuracy": 109,
    "evasion": 999,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "C",
    "indoor": "C"
  },
  "skills": {
    "ex": {
      "id": "shokuhou_misaki_ex",
      "name": "心理掌握",
      "description": "指定した相手およびその円形範囲内の最も近い敵2人に対して、攻撃力の分のダメージ/ 状態を付与（間）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 7.7272,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 8.8864,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 11.2048,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 12.364,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 14.6816,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "shokuhou_misaki_normal",
      "name": "少し手伝ってくれるかしら？",
      "description": "30秒毎に、円形範囲内の敵に攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.1828,
          "hitCount": 10
        },
        {
          "level": 2,
          "damageMultiplier": 3.3424,
          "hitCount": 10
        },
        {
          "level": 3,
          "damageMultiplier": 3.5012,
          "hitCount": 10
        },
        {
          "level": 4,
          "damageMultiplier": 4.1379,
          "hitCount": 10
        },
        {
          "level": 5,
          "damageMultiplier": 4.2966,
          "hitCount": 10
        },
        {
          "level": 6,
          "damageMultiplier": 4.4562,
          "hitCount": 10
        },
        {
          "level": 7,
          "damageMultiplier": 5.0921,
          "hitCount": 10
        },
        {
          "level": 8,
          "damageMultiplier": 5.2517,
          "hitCount": 10
        },
        {
          "level": 9,
          "damageMultiplier": 5.4105,
          "hitCount": 10
        },
        {
          "level": 10,
          "damageMultiplier": 6.0472,
          "hitCount": 10
        }
      ]
    },
    "passive": {
      "id": "shokuhou_misaki_passive",
      "name": "常盤台の女王",
      "description": "を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "shokuhou_misaki_sub",
      "name": "私は頭脳派だしぃ",
      "description": "食蜂操祈のEXスキルで相手に状態を適用する度にとを増加（20秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 19.36,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 19.36,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 20.33,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 20.33,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 21.3,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 21.3,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 25.17,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 25.17,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 26.14,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 26.14,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 27.1,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 27.1,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 30.97,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 30.97,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 31.94,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 31.94,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 32.91,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 32.91,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 36.78,
              "duration": 20,
              "target": "self"
            },
            {
              "type": "evasionFlat",
              "value": 36.78,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
