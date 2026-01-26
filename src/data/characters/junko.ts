import { Character } from '../../types';

export const junko: Character = {
  "id": "junko",
  "name": "ジュンコ",
  "nameEn": "Zunko",
  "rarity": 2,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2741,
    "defense": 120,
    "hp": 22640,
    "criticalValue": 198,
    "criticalDamage": 200,
    "stability": 1408,
    "accuracy": 695,
    "evasion": 794,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "A",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "junko_ex",
      "name": "空腹のイライラ",
      "description": "直線範囲内の敵に対して、攻撃力の1417%分のダメージ/ 自身の現在のHPが25.7%減少",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 7.4603,
          "hitCount": 4
        },
        {
          "level": 2,
          "damageMultiplier": 8.5795,
          "hitCount": 4
        },
        {
          "level": 3,
          "damageMultiplier": 10.8171,
          "hitCount": 4
        },
        {
          "level": 4,
          "damageMultiplier": 11.9363,
          "hitCount": 4
        },
        {
          "level": 5,
          "damageMultiplier": 14.1747,
          "hitCount": 4
        }
      ]
    },
    "normal": {
      "id": "junko_normal",
      "name": "お腹空いてる時は話しかけないで！",
      "description": "HPが20%以下の時、不死身状態を付与（24.3秒間） （戦闘中に1回のみ）",
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
      "id": "junko_passive",
      "name": "小柄のメリット",
      "description": "回避値を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
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
              "type": "evasionFlat",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "junko_sub",
      "name": "空腹の美食家",
      "description": "攻撃時、自身の失ったHPに比例して攻撃力の1.7%～9.4%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0495,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.052,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0545,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0644,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0669,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0693,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0792,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0817,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0842,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.0941,
          "hitCount": 1
        }
      ]
    }
  }
};
