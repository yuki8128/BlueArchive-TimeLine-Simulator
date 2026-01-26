import { Character } from '../../types';

export const hareCamp: Character = {
  "id": "hare_camp",
  "name": "ハレ（キャンプ）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1589,
    "defense": 118,
    "hp": 22140,
    "criticalValue": 203,
    "criticalDamage": 200,
    "stability": 1376,
    "accuracy": 711,
    "evasion": 787,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "hare_camp_ex",
      "name": "焚き火の甘味",
      "description": "自身を除く味方1人に対して、攻撃力を80.4%増加（26秒間）/ さらに自身にを5個付与（最大15個まで重複）",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 42.32,
              "duration": 26,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 48.67,
              "duration": 26,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 61.36,
              "duration": 26,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 67.71,
              "duration": 26,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 80.4,
              "duration": 26,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "hare_camp_normal",
      "name": "広がる温もり",
      "description": "50秒毎に、円形範囲内の味方の攻撃力を24.3%増加（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.91,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.27,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.18,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.54,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.9,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.36,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.09,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.45,
              "duration": 30,
              "target": "ally"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.36,
              "duration": 30,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "hare_camp_passive",
      "name": "デトックス効果",
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
      "id": "hare_camp_sub",
      "name": "キャンプの醍醐味",
      "description": "を保有している状態で敵を攻撃した時、攻撃力の98%分の追加ダメージ/ さらに自身のが1個減少",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.516,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.5425,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.5681,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.6713,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.6968,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.7224,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.8256,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.8521,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.8776,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.9808,
          "hitCount": 1
        }
      ]
    }
  }
};
