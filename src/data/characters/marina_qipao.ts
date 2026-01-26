import { Character } from '../../types';

export const marinaQipao: Character = {
  "id": "marina_qipao",
  "name": "マリナ（チーパオ）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 2687,
    "defense": 99,
    "hp": 31520,
    "criticalValue": 211,
    "criticalDamage": 200,
    "stability": 1320,
    "accuracy": 105,
    "evasion": 1018,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "marina_qipao_ex",
      "name": "う、うわああっ！？",
      "description": "敵1人に対して攻撃力の414%分のダメージ/ 攻撃力の561%分の持続ダメージを付与（32秒間）",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.1872,
          "hitCount": 10
        },
        {
          "level": 2,
          "damageMultiplier": 3.1872,
          "hitCount": 10
        },
        {
          "level": 3,
          "damageMultiplier": 3.6646,
          "hitCount": 10
        },
        {
          "level": 4,
          "damageMultiplier": 3.6646,
          "hitCount": 10
        },
        {
          "level": 5,
          "damageMultiplier": 4.1428,
          "hitCount": 10
        }
      ]
    },
    "normal": {
      "id": "marina_qipao_normal",
      "name": "戦術的保温対策！",
      "description": "35秒毎に、敵1人に対して攻撃力の452%分のダメージ/ 攻撃した敵が中毒効果状態の場合、自身の攻撃速度を28.8%増加（25秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.3819,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.5014,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.6201,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 3.0967,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 3.2154,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 3.3349,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.8115,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.9302,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 4.0489,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 4.5254,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "marina_qipao_passive",
      "name": "最後の瞬間まで！",
      "description": "通常攻撃の射程を200、攻撃力を21.2%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.2,
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
              "value": 11.76,
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
              "value": 12.32,
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
              "value": 14.56,
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
              "value": 15.12,
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
              "value": 15.68,
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
              "value": 17.92,
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
              "value": 18.48,
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
              "value": 19.04,
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
              "value": 21.28,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "marina_qipao_sub",
      "name": "縦深突破！",
      "description": "通常攻撃時、中毒効果状態の対象に攻撃力の10.1%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0539,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0564,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.059,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0701,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0726,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0752,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0854,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.088,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0914,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.1017,
          "hitCount": 1
        }
      ]
    }
  }
};
