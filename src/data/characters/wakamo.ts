import { Character } from '../../types';

export const wakamo: Character = {
  "id": "wakamo",
  "name": "ワカモ",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3498,
    "defense": 118,
    "hp": 19310,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1976,
    "accuracy": 909,
    "evasion": 197,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "wakamo_ex",
      "name": "深紅の花占い",
      "description": "敵1人に対して、攻撃力の分のダメージ その後、味方がその敵に与えたダメージは10秒間されていき、その後蓄積した分の神秘タイプのダメージを与えます。 （ダメージの蓄積は最大でワカモの攻撃力のまで） （10秒後に発動する神秘タイプのダメージにおいては、会心が発動しません）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.0348,
          "hitCount": 6
        },
        {
          "level": 2,
          "damageMultiplier": 2.34,
          "hitCount": 6
        },
        {
          "level": 3,
          "damageMultiplier": 2.6446,
          "hitCount": 6
        },
        {
          "level": 4,
          "damageMultiplier": 2.9498,
          "hitCount": 6
        },
        {
          "level": 5,
          "damageMultiplier": 3.2551,
          "hitCount": 6
        }
      ]
    },
    "normal": {
      "id": "wakamo_normal",
      "name": "乱れ散る花吹雪",
      "description": "25秒毎に、敵1人に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.9469,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.0444,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.142,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.5315,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.6284,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.7259,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.1154,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.2129,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.3098,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 3.6993,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "wakamo_passive",
      "name": "花開く破壊衝動",
      "description": "を増加",
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
      "id": "wakamo_sub",
      "name": "狂い咲く闘争本能",
      "description": "BOSSへの攻撃時に、攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.1566,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.1644,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.1722,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.2035,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.2114,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.2192,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.2505,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.2583,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.2661,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.2974,
          "hitCount": 1
        }
      ]
    }
  }
};
