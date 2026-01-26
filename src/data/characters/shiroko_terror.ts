import { Character } from '../../types';

export const shirokoTerror: Character = {
  "id": "shiroko_terror",
  "name": "シロコ＊テラー",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2349,
    "defense": 118,
    "hp": 22200,
    "criticalValue": 253,
    "criticalDamage": 200,
    "stability": 1380,
    "accuracy": 709,
    "evasion": 789,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "shiroko_terror_ex",
      "name": "火力強化",
      "description": "ドローンを召喚（40秒間） ドローンが維持される間、通常攻撃は攻撃力の120%分のダメージを与えるように変更/ 会心値を67.3%、会心ダメージ率を134%増加（40秒間）/ 自身に対して最大HPの20%分ダメージ （このスキルでシロコ＊テラーは退却しません）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 42.09,
              "duration": 40,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 71.02,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 48.4,
              "duration": 40,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 81.67,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 54.71,
              "duration": 40,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 102.97,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 61.02,
              "duration": 40,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 113.63,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 67.34,
              "duration": 40,
              "target": "self"
            },
            {
              "type": "critDamagePercent",
              "value": 134.93,
              "duration": 40,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "shiroko_terror_normal",
      "name": "手榴弾投擲・改",
      "description": "40秒毎に、敵1人に対して攻撃力の704%分のダメージ/ EXスキルの使用時、「ドローン召喚：十字砲火」にスキルが変更されます。",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.7065,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.8921,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.0778,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 4.8185,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.0041,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 5.1898,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 5.9305,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 6.1162,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 6.3009,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 7.0425,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "shiroko_terror_passive",
      "name": "精密照準",
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
      "id": "shiroko_terror_sub",
      "name": "呼吸を整える時間",
      "description": "神秘特効を49.25%加算/ シロコ＊テラーの現在のHPが1%以下の時、15秒間、退却猶予を適用（クールタイム90秒） 退却猶予中にHPを全て回復できなかった場合、即退却",
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
