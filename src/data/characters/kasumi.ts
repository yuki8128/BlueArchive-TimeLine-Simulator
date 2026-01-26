import { Character } from '../../types';

export const kasumi: Character = {
  "id": "kasumi",
  "name": "カスミ",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2089,
    "defense": 114,
    "hp": 24950,
    "criticalValue": 208,
    "criticalDamage": 200,
    "stability": 956,
    "accuracy": 104,
    "evasion": 1053,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "kasumi_ex",
      "name": "ジャイアントヒール・クラッシュ",
      "description": "円形範囲内の敵に対して、防御力を33.5%減少（25秒間）/ 攻撃力の432.5%分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.2764,
          "hitCount": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -17.66,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.6194,
          "hitCount": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.3,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 3.3012,
          "hitCount": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -25.6,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 3.6393,
          "hitCount": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -28.25,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 4.3253,
          "hitCount": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -33.54,
              "duration": 25,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "kasumi_normal",
      "name": "大切なメッセージだよ",
      "description": "35秒毎に、円形範囲内の敵に攻撃力の432%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.2741,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.388,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.5019,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.9561,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 3.0701,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 3.184,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.6382,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.7521,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.8661,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 4.321,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "kasumi_passive",
      "name": "狂人の戦略",
      "description": "会心値を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "kasumi_sub",
      "name": "ドリルの音は止まったのか？",
      "description": "EXスキル使用3回毎に、EXスキルと同じ円形範囲内に対して、攻撃力の1204%分のダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 6.3391,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 6.6556,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 6.9728,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 8.2404,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 8.5576,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 8.8741,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 10.1416,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 10.4589,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 10.7761,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 12.0436,
          "hitCount": 1
        }
      ]
    }
  }
};
