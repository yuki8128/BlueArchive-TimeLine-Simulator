import { Character } from '../../types';

export const nonomiSwimsuit: Character = {
  "id": "nonomi_swimsuit",
  "name": "ノノミ（水着）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2739,
    "defense": 477,
    "hp": 19420,
    "criticalValue": 251,
    "criticalDamage": 200,
    "stability": 1392,
    "accuracy": 100,
    "evasion": 199,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "nonomi_swimsuit_ex",
      "name": "涼しくな～れ♧",
      "description": "敵1人に対して、攻撃力の1113%分のダメージ 装弾数を100消耗する時まで通常攻撃のディレイを4回無視するに変更 発動後すぐにリロード",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 6.9586,
          "hitCount": 40
        },
        {
          "level": 2,
          "damageMultiplier": 8.0024,
          "hitCount": 40
        },
        {
          "level": 3,
          "damageMultiplier": 9.0462,
          "hitCount": 40
        },
        {
          "level": 4,
          "damageMultiplier": 10.09,
          "hitCount": 40
        },
        {
          "level": 5,
          "damageMultiplier": 11.1337,
          "hitCount": 40
        }
      ]
    },
    "normal": {
      "id": "nonomi_swimsuit_normal",
      "name": "みんなで楽しく！",
      "description": "40秒毎に円形範囲内の味方の攻撃速度を21.6%増加（30秒間）",
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
      "id": "nonomi_swimsuit_passive",
      "name": "待ちきれません♧",
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
      "id": "nonomi_swimsuit_sub",
      "name": "冷たいですよ～！",
      "description": "EXスキルによってが変更された状態において、通常攻撃で敵を攻撃する時、攻撃力の20.9%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.1099,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.116,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.1214,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.1435,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.1488,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.1542,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.1763,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.1816,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.187,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.2091,
          "hitCount": 1
        }
      ]
    }
  }
};
