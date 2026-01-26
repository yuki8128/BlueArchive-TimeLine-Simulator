import { Character } from '../../types';

export const yuzu: Character = {
  "id": "yuzu",
  "name": "ユズ",
  "nameEn": "Yuzu",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 3568,
    "defense": 117,
    "hp": 21970,
    "criticalValue": 191,
    "criticalDamage": 240,
    "stability": 976,
    "accuracy": 102,
    "evasion": 195,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "yuzu_ex",
      "name": "ゲームスタート！",
      "description": "指定した相手を中心とした円形範囲内の敵に対して、攻撃力の594%分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.1292,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.5988,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.5375,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 5.0067,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.9454,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "yuzu_normal",
      "name": "連続コンボ！",
      "description": "25秒毎に、攻撃力が最も高い敵を中心とした円形範囲内の敵に対して、攻撃力の266%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.404,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.4739,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.5442,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.825,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.8953,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.9652,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.246,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.3163,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.3866,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.6674,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "yuzu_passive",
      "name": "デバッグ中……",
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
      "id": "yuzu_sub",
      "name": "ふりしぼる勇気",
      "description": "EXスキル並びにノーマルスキルの発動と同時に、会心ダメージ率を42.4%増加（6秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 22.32,
              "duration": 6,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 23.43,
              "duration": 6,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 24.55,
              "duration": 6,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 29.01,
              "duration": 6,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 30.13,
              "duration": 6,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 31.25,
              "duration": 6,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 35.7,
              "duration": 6,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 36.82,
              "duration": 6,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 37.94,
              "duration": 6,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 42.4,
              "duration": 6,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
