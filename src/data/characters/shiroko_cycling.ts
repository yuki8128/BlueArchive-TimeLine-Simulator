import { Character } from '../../types';

export const shirokoCycling: Character = {
  "id": "shiroko_cycling",
  "name": "シロコ（ライディング）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2889,
    "defense": 112,
    "hp": 21160,
    "criticalValue": 211,
    "criticalDamage": 200,
    "stability": 1316,
    "accuracy": 741,
    "evasion": 752,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "shiroko_cycling_ex",
      "name": "ライド＆グレネード",
      "description": "円形範囲内の敵に対して、攻撃力の690%分のダメージ/ さらに攻撃力を50%減少（10秒間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.3183,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -38.46,
              "duration": 10,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 4.9659,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -38.46,
              "duration": 10,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 5.6142,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -44.23,
              "duration": 10,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 6.2618,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -44.23,
              "duration": 10,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 6.9094,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -50,
              "duration": 10,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "shiroko_cycling_normal",
      "name": "一点突破",
      "description": "40秒毎に直線範囲内の敵に対して、攻撃力の369%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.945,
          "hitCount": 9
        },
        {
          "level": 2,
          "damageMultiplier": 2.0421,
          "hitCount": 9
        },
        {
          "level": 3,
          "damageMultiplier": 2.1392,
          "hitCount": 9
        },
        {
          "level": 4,
          "damageMultiplier": 2.5283,
          "hitCount": 9
        },
        {
          "level": 5,
          "damageMultiplier": 2.6254,
          "hitCount": 9
        },
        {
          "level": 6,
          "damageMultiplier": 2.7225,
          "hitCount": 9
        },
        {
          "level": 7,
          "damageMultiplier": 3.1117,
          "hitCount": 9
        },
        {
          "level": 8,
          "damageMultiplier": 3.2088,
          "hitCount": 9
        },
        {
          "level": 9,
          "damageMultiplier": 3.3059,
          "hitCount": 9
        },
        {
          "level": 10,
          "damageMultiplier": 3.695,
          "hitCount": 9
        }
      ]
    },
    "passive": {
      "id": "shiroko_cycling_passive",
      "name": "ラピッドファイヤー",
      "description": "攻撃速度を26.6%増加",
      "type": "passive",
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
    },
    "sub": {
      "id": "shiroko_cycling_sub",
      "name": "炯眼",
      "description": "弱体状態の敵への攻撃時に、攻撃力の7.3%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0386,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0407,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0429,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0507,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0522,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0543,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0622,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0643,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0657,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.0736,
          "hitCount": 1
        }
      ]
    }
  }
};
