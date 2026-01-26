import { Character } from '../../types';

export const moeSwimsuit: Character = {
  "id": "moe_swimsuit",
  "name": "モエ（水着）",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2340,
    "defense": 110,
    "hp": 23940,
    "criticalValue": 216,
    "criticalDamage": 200,
    "stability": 916,
    "accuracy": 432,
    "evasion": 735,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "moe_swimsuit_ex",
      "name": "弾道ミサイル砲撃",
      "description": "円形範囲内の指定した敵に対して攻撃力の1892%分のダメージ、その他の敵に対して攻撃力の378%分のダメージ",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 9.9584,
          "hitCount": 12
        },
        {
          "level": 2,
          "damageMultiplier": 11.452,
          "hitCount": 12
        },
        {
          "level": 3,
          "damageMultiplier": 14.4399,
          "hitCount": 12
        },
        {
          "level": 4,
          "damageMultiplier": 15.9334,
          "hitCount": 12
        },
        {
          "level": 5,
          "damageMultiplier": 18.9206,
          "hitCount": 12
        }
      ]
    },
    "normal": {
      "id": "moe_swimsuit_normal",
      "name": "ハイドロストライク",
      "description": "35秒毎に、敵1人に対して攻撃力の593%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.1222,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.2785,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 3.4348,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 4.0592,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 4.2155,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 4.3711,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 4.9955,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 5.1518,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 5.3081,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 5.9325,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "moe_swimsuit_passive",
      "name": "破滅の美学",
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
      "id": "moe_swimsuit_sub",
      "name": "爆破のスペシャリスト",
      "description": "攻撃時、大型と超大型の敵に対して攻撃力の17.7%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0938,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0985,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.1031,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.1217,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.1264,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.1311,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.1497,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.1543,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.159,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.1776,
          "hitCount": 1
        }
      ]
    }
  }
};
