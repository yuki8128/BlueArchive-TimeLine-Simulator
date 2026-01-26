import { Character } from '../../types';

export const mika: Character = {
  "id": "mika",
  "name": "ミカ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 2477,
    "defense": 132,
    "hp": 34110,
    "criticalValue": 25,
    "criticalDamage": 200,
    "stability": 1376,
    "accuracy": 111,
    "evasion": 1417,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "A",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "mika_ex",
      "name": "Kyrie Eleison",
      "description": "敵1人に対して攻撃力の1540%分のダメージ （対象の現在のHPに比例してダメージが1～2倍に変更） （対象の敵HPが多ければ多いほどダメージが大きくなります） ",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 8.1071,
          "hitCount": 11
        },
        {
          "level": 2,
          "damageMultiplier": 9.3234,
          "hitCount": 11
        },
        {
          "level": 3,
          "damageMultiplier": 11.7553,
          "hitCount": 11
        },
        {
          "level": 4,
          "damageMultiplier": 12.9717,
          "hitCount": 11
        },
        {
          "level": 5,
          "damageMultiplier": 15.4036,
          "hitCount": 11
        }
      ]
    },
    "normal": {
      "id": "mika_normal",
      "name": "星の呼び声",
      "description": "通常攻撃5回毎に、敵1人に対して攻撃力の169%分のダメージ/ ノーマルスキルの発動3回毎に、隕石が落ちて攻撃力の339%分の追加ダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.8945,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 0.9395,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 0.9839,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 1.1626,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 1.2076,
          "hitCount": 3
        },
        {
          "level": 6,
          "damageMultiplier": 1.252,
          "hitCount": 3
        },
        {
          "level": 7,
          "damageMultiplier": 1.4307,
          "hitCount": 3
        },
        {
          "level": 8,
          "damageMultiplier": 1.4758,
          "hitCount": 3
        },
        {
          "level": 9,
          "damageMultiplier": 1.5201,
          "hitCount": 3
        },
        {
          "level": 10,
          "damageMultiplier": 1.6995,
          "hitCount": 3
        }
      ]
    },
    "passive": {
      "id": "mika_passive",
      "name": "Gloria Patri",
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
      "id": "mika_sub",
      "name": "Benedictio",
      "description": "全ての攻撃を確定会心に変更/ 自身の与えるダメージ量が24.2%増加、被ダメージ量が12.2%減少",
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
