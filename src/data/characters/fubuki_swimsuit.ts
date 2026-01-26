import { Character } from '../../types';

export const fubukiSwimsuit: Character = {
  "id": "fubuki_swimsuit",
  "name": "フブキ（水着）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 3030,
    "defense": 395,
    "hp": 14778,
    "criticalValue": 252,
    "criticalDamage": 200,
    "stability": 2272,
    "accuracy": 505,
    "evasion": 197,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "fubuki_swimsuit_ex",
      "name": "頭冷やそっか",
      "description": "3つの円形範囲内の敵に対して、 小型の円：攻撃力の1102%分のダメージ 中型の円：攻撃力の231%分のダメージ 大型の円：攻撃力の189%分のダメージ （これらの攻撃は敵のシールドを貫通）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.8009,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 6.671,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 8.4112,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 9.2813,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 11.0215,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "fubuki_swimsuit_normal",
      "name": "やんなきゃダメ～？",
      "description": "45秒毎に、敵1人に対して攻撃力の906%分のダメージ/ 円形範囲内の敵に対して、攻撃力の92.4%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.7691,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 5.0078,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 5.2458,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 6.1999,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 6.4379,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 6.6766,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 7.63,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 7.8687,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 8.1074,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 9.0608,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "fubuki_swimsuit_passive",
      "name": "サボりルール",
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
      "id": "fubuki_swimsuit_sub",
      "name": "ちょっと頼むね～",
      "description": "味方の爆発特効を30.2%加算",
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
