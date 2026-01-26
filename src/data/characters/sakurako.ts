import { Character } from '../../types';

export const sakurako: Character = {
  "id": "sakurako",
  "name": "サクラコ",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2687,
    "defense": 119,
    "hp": 22470,
    "criticalValue": 200,
    "criticalDamage": 200,
    "stability": 1396,
    "accuracy": 700,
    "evasion": 799,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "sakurako_ex",
      "name": "洗礼の印",
      "description": "敵1人に対して攻撃力の分のダメージ/ 指定した敵に対して（30秒間）/ 時、攻撃力の分の追加ダメージ効果を与えます（30秒間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.9087,
          "hitCount": 21
        },
        {
          "level": 2,
          "damageMultiplier": 4.4954,
          "hitCount": 21
        },
        {
          "level": 3,
          "damageMultiplier": 5.0815,
          "hitCount": 21
        },
        {
          "level": 4,
          "damageMultiplier": 5.6683,
          "hitCount": 21
        },
        {
          "level": 5,
          "damageMultiplier": 6.2543,
          "hitCount": 21
        }
      ]
    },
    "normal": {
      "id": "sakurako_normal",
      "name": "シスターの身支度",
      "description": "40秒毎に、を増加（30秒間）",
      "type": "normal",
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
    "passive": {
      "id": "sakurako_passive",
      "name": "罪悪を裁く者",
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
      "id": "sakurako_sub",
      "name": "光と共にあらんことを",
      "description": "防御タイプが特殊装甲の敵を攻撃時、攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0481,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.051,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0532,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0627,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0648,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0678,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0772,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0794,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0816,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.091,
          "hitCount": 1
        }
      ]
    }
  }
};
