import { Character } from '../../types';

export const tsurugi: Character = {
  "id": "tsurugi",
  "name": "ツルギ",
  "nameEn": "Tsurugi",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 3864,
    "defense": 832,
    "hp": 35590,
    "criticalValue": 243,
    "criticalDamage": 200,
    "stability": 2052,
    "accuracy": 642,
    "evasion": 175,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "tsurugi_ex",
      "name": "奇奇怪怪",
      "description": "スキル発動後すぐにリロード/ を攻撃力の138%分のダメージを与える扇形範囲攻撃に変更/ を増加（リロードを行うまで有効）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.88,
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
              "value": 29.76,
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
              "value": 37.52,
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
              "value": 41.4,
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
              "value": 45.28,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "tsurugi_normal",
      "name": "激情",
      "description": "敵を倒した時、治癒力の分の回復（クールタイム10秒）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.1633
        },
        {
          "level": 2,
          "healMultiplier": 1.2215
        },
        {
          "level": 3,
          "healMultiplier": 1.2798
        },
        {
          "level": 4,
          "healMultiplier": 1.5123
        },
        {
          "level": 5,
          "healMultiplier": 1.5705
        },
        {
          "level": 6,
          "healMultiplier": 1.6288
        },
        {
          "level": 7,
          "healMultiplier": 1.8613
        },
        {
          "level": 8,
          "healMultiplier": 1.9195
        },
        {
          "level": 9,
          "healMultiplier": 1.9778
        },
        {
          "level": 10,
          "healMultiplier": 2.2103
        }
      ]
    },
    "passive": {
      "id": "tsurugi_passive",
      "name": "機敏",
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
      "id": "tsurugi_sub",
      "name": "制御不能の力",
      "description": "敵を倒した時、の確率で弾薬数を1追加",
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
