import { Character } from '../../types';

export const tsurugiSwimsuit: Character = {
  "id": "tsurugi_swimsuit",
  "name": "ツルギ（水着）",
  "rarity": 1,
  "attackType": "mystic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 3453,
    "defense": 821,
    "hp": 35160,
    "criticalValue": 246,
    "criticalDamage": 200,
    "stability": 2028,
    "accuracy": 650,
    "evasion": 182,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "C",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "tsurugi_swimsuit_ex",
      "name": "止まらない奔流",
      "description": "を攻撃力の分の追加ダメージを与える攻撃に変更（間）",
      "type": "ex",
      "cost": 3,
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
        }
      ]
    },
    "normal": {
      "id": "tsurugi_swimsuit_normal",
      "name": "燃え盛る一撃",
      "description": "35秒毎に、敵1人に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.9075,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.003,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.0979,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.4796,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.575,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.6704,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.0516,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.1471,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.2425,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 3.6237,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "tsurugi_swimsuit_passive",
      "name": "軽やかな気持ち",
      "description": "を増加",
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
      "id": "tsurugi_swimsuit_sub",
      "name": "火照った身体",
      "description": "ノーマルスキルの使用時、を増加（30秒間）",
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
