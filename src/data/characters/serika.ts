import { Character } from '../../types';

export const serika: Character = {
  "id": "serika",
  "name": "セリカ",
  "nameEn": "Serika",
  "rarity": 2,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2829,
    "defense": 116,
    "hp": 21920,
    "criticalValue": 256,
    "criticalDamage": 200,
    "stability": 1364,
    "accuracy": 717,
    "evasion": 820,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "D",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "serika_ex",
      "name": "邪魔よ！",
      "description": "スキル発動後すぐにリロード/ 攻撃力を67.7%増加（30秒間）",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 35.65,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 41,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 51.69,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 57.03,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 67.73,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "serika_normal",
      "name": "狙い撃ち",
      "description": "25秒毎に、敵1人に対して攻撃力の425%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.2398,
          "hitCount": 11
        },
        {
          "level": 2,
          "damageMultiplier": 2.3522,
          "hitCount": 11
        },
        {
          "level": 3,
          "damageMultiplier": 2.4639,
          "hitCount": 11
        },
        {
          "level": 4,
          "damageMultiplier": 2.9122,
          "hitCount": 11
        },
        {
          "level": 5,
          "damageMultiplier": 3.0239,
          "hitCount": 11
        },
        {
          "level": 6,
          "damageMultiplier": 3.1363,
          "hitCount": 11
        },
        {
          "level": 7,
          "damageMultiplier": 3.5838,
          "hitCount": 11
        },
        {
          "level": 8,
          "damageMultiplier": 3.6962,
          "hitCount": 11
        },
        {
          "level": 9,
          "damageMultiplier": 3.808,
          "hitCount": 11
        },
        {
          "level": 10,
          "damageMultiplier": 4.2562,
          "hitCount": 11
        }
      ]
    },
    "passive": {
      "id": "serika_passive",
      "name": "バイト根性",
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
      "id": "serika_sub",
      "name": "対策委員会の怒り",
      "description": "EXスキルの使用時、攻撃速度を38.3%増加（30秒間）",
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
