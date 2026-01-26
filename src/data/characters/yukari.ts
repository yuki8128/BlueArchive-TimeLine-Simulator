import { Character } from '../../types';

export const yukari: Character = {
  "id": "yukari",
  "name": "ユカリ",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3284,
    "defense": 119,
    "hp": 19390,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 1988,
    "accuracy": 905,
    "evasion": 198,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "yukari_ex",
      "name": "まっすぐに芽生えた決意",
      "description": "円形範囲内の敵に攻撃力の302%分のダメージ/ さらに自身が所有するを10個単位で可能な限り消耗し、消耗した10個毎に攻撃力の223%分の確定会心ダメージ",
      "type": "ex",
      "cost": 7,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.5927,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.8312,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.3092,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.5478,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 3.0257,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "yukari_normal",
      "name": "待ち侘びた再会",
      "description": "40秒毎に、を20個獲得（は最大50個まで重複）/ 攻撃力を19.7%増加（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 5.48,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 6.33,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 7.24,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 9.26,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 10.35,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.51,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.02,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.36,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.76,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.77,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "yukari_passive",
      "name": "百花繚乱のえり～と",
      "description": "会心ダメージ率を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "yukari_sub",
      "name": "面を上げて向き合う責務",
      "description": "自身を除く味方が消耗したコスト分、を獲得（は最大50個まで重複）/ を10個獲得時、会心ダメージ率を15.5%増加（15秒間）（効果は重複しない）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 8.17,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 8.58,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 8.99,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 10.62,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 11.03,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 11.44,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 13.07,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 13.48,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 13.89,
              "duration": 15,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.52,
              "duration": 15,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
