import { Character } from '../../types';

export const makoto: Character = {
  "id": "makoto",
  "name": "マコト",
  "rarity": 3,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 3171,
    "defense": 376,
    "hp": 14076,
    "criticalValue": 264,
    "criticalDamage": 200,
    "stability": 2162,
    "accuracy": 529,
    "evasion": 188,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "makoto_ex",
      "name": "ま、間違えたあ！",
      "description": "円形範囲内の敵の数によって、範囲内の敵に対して、 4人以下：攻撃力の296%分のダメージ 5人～9人：攻撃力の592%分のダメージ 10人以上：攻撃力の987%分のダメージ",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.5589,
          "hitCount": 21
        },
        {
          "level": 2,
          "damageMultiplier": 1.7927,
          "hitCount": 21
        },
        {
          "level": 3,
          "damageMultiplier": 2.2603,
          "hitCount": 21
        },
        {
          "level": 4,
          "damageMultiplier": 2.4941,
          "hitCount": 21
        },
        {
          "level": 5,
          "damageMultiplier": 2.9617,
          "hitCount": 21
        }
      ]
    },
    "normal": {
      "id": "makoto_normal",
      "name": "聞くが良い！",
      "description": "55秒毎に、円形範囲内の敵の防御力を15.8%減少（35秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -8.37,
              "duration": 35,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -8.78,
              "duration": 35,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -9.2,
              "duration": 35,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.88,
              "duration": 35,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -11.29,
              "duration": 35,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -11.71,
              "duration": 35,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -13.38,
              "duration": 35,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -13.8,
              "duration": 35,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -14.21,
              "duration": 35,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -15.89,
              "duration": 35,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "makoto_passive",
      "name": "万魔殿の偉大な議長",
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
      "id": "makoto_sub",
      "name": "天下無敵！ゲヘナの真のリーダー！",
      "description": "味方の貫通特効を30.2%加算",
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
