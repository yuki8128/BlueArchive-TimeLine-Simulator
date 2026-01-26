import { Character } from '../../types';

export const rengeSwimsuit: Character = {
  "id": "renge_swimsuit",
  "name": "レンゲ（水着）",
  "rarity": 2,
  "attackType": "sonic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3057,
    "defense": 118,
    "hp": 19270,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1976,
    "accuracy": 910,
    "evasion": 197,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "B",
    "indoor": "C"
  },
  "skills": {
    "ex": {
      "id": "renge_swimsuit_ex",
      "name": "夏の海の射撃術",
      "description": "敵1人に対して、攻撃力の540%分のダメージ/ を1個以上保有している場合、を1個消耗し攻撃力の108%分の追加ダメージ",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.8476,
          "hitCount": 7
        },
        {
          "level": 2,
          "damageMultiplier": 3.2743,
          "hitCount": 7
        },
        {
          "level": 3,
          "damageMultiplier": 4.1284,
          "hitCount": 7
        },
        {
          "level": 4,
          "damageMultiplier": 4.5558,
          "hitCount": 7
        },
        {
          "level": 5,
          "damageMultiplier": 5.4098,
          "hitCount": 7
        }
      ]
    },
    "normal": {
      "id": "renge_swimsuit_normal",
      "name": "夏の情熱水流",
      "description": "戦闘開始時とその以降、40秒毎にEXスキルの与えるダメージ量を23.7%加算、会心ダメージ率を31.3%増加（33秒間）/ を2個獲得（は最大3個まで重複）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 16.49,
              "duration": 33,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 17.31,
              "duration": 33,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 18.13,
              "duration": 33,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 21.43,
              "duration": 33,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 22.26,
              "duration": 33,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 23.08,
              "duration": 33,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 26.37,
              "duration": 33,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 27.2,
              "duration": 33,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 28.03,
              "duration": 33,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 31.32,
              "duration": 33,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "renge_swimsuit_passive",
      "name": "青春の鬼教官",
      "description": "攻撃力を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "renge_swimsuit_sub",
      "name": "勝利への進撃",
      "description": "EXスキルの発動と同時に、振動特効を65%加算（16秒間）",
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
