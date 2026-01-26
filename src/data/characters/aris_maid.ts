import { Character } from '../../types';

export const arisMaid: Character = {
  "id": "aris_maid",
  "name": "アリス（メイド）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3975,
    "defense": 474,
    "hp": 17010,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1384,
    "accuracy": 606,
    "evasion": 197,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "aris_maid_ex",
      "name": "アリス、お掃除します！",
      "description": "敵1人に対して、攻撃力の1128%分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.9405,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 6.8316,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 8.6137,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 9.5048,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 11.287,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "aris_maid_normal",
      "name": "丁寧なお手入れ",
      "description": "通常攻撃15回毎に、神秘特効を38.1%加算、攻撃力を32%増加（40秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.34,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.26,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.18,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.95,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.86,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.78,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.35,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 30.27,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 31.18,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.06,
              "duration": 40,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "aris_maid_passive",
      "name": "ジョブボーナスです！",
      "description": "会心ダメージ率を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "aris_maid_sub",
      "name": "ジョブ特性：メイド勇者！",
      "description": "通常攻撃が敵1人を攻撃するように変更/ 通常攻撃時、攻撃力の30.1%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.1586,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.1666,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.1747,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.2062,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.2142,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.2223,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.2538,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.2618,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.2699,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.3014,
          "hitCount": 1
        }
      ]
    }
  }
};
