import { Character } from '../../types';

export const izunaSwimsuit: Character = {
  "id": "izuna_swimsuit",
  "name": "イズナ（水着）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1942,
    "defense": 128,
    "hp": 32870,
    "criticalValue": 262,
    "criticalDamage": 200,
    "stability": 1324,
    "accuracy": 115,
    "evasion": 1024,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "izuna_swimsuit_ex",
      "name": "イズナ流忍法・夏バージョン",
      "description": "敵1人に対して、攻撃力の分のダメージ/ 指定した敵に対して（30秒間）",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.2323,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 4.8673,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 6.1374,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 6.7724,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 8.0415,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "izuna_swimsuit_normal",
      "name": "イズナ流忍法！ぷくぷくの術！",
      "description": "通常攻撃6回毎に、敵1人に対して攻撃力の分のダメージ/ 率を減少（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.1845,
          "hitCount": 7
        },
        {
          "level": 2,
          "damageMultiplier": 4.3936,
          "hitCount": 7
        },
        {
          "level": 3,
          "damageMultiplier": 4.6028,
          "hitCount": 7
        },
        {
          "level": 4,
          "damageMultiplier": 5.0212,
          "hitCount": 7
        },
        {
          "level": 5,
          "damageMultiplier": 5.2303,
          "hitCount": 7
        },
        {
          "level": 6,
          "damageMultiplier": 5.4395,
          "hitCount": 7
        },
        {
          "level": 7,
          "damageMultiplier": 5.8579,
          "hitCount": 7
        },
        {
          "level": 8,
          "damageMultiplier": 6.067,
          "hitCount": 7
        },
        {
          "level": 9,
          "damageMultiplier": 6.2762,
          "hitCount": 7
        },
        {
          "level": 10,
          "damageMultiplier": 6.6946,
          "hitCount": 7
        }
      ]
    },
    "passive": {
      "id": "izuna_swimsuit_passive",
      "name": "主殿！夏です！",
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
      "id": "izuna_swimsuit_sub",
      "name": "イズナ流忍法・夏バージョン奥義発動！",
      "description": "会心を25回成功した時、を増加（23秒間）",
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
