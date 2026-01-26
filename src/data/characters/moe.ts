import { Character } from '../../types';

export const moe: Character = {
  "id": "moe",
  "name": "モエ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 1998,
    "defense": 118,
    "hp": 16629,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1136,
    "accuracy": 404,
    "evasion": 791,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "moe_ex",
      "name": "鋼鉄の雨",
      "description": "直線範囲内の敵に対して、攻撃力の分のダメージ/ 攻撃力の分の持続ダメージを付与（20秒間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.0618,
          "hitCount": 7
        },
        {
          "level": 2,
          "damageMultiplier": 3.521,
          "hitCount": 7
        },
        {
          "level": 3,
          "damageMultiplier": 3.9802,
          "hitCount": 7
        },
        {
          "level": 4,
          "damageMultiplier": 4.4394,
          "hitCount": 7
        },
        {
          "level": 5,
          "damageMultiplier": 4.8986,
          "hitCount": 7
        }
      ]
    },
    "normal": {
      "id": "moe_normal",
      "name": "集中砲火",
      "description": "40秒毎に、敵5人に対し攻撃力の分のダメージ/ さらにを付与（間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.0052,
          "hitCount": 5
        },
        {
          "level": 2,
          "damageMultiplier": 1.0556,
          "hitCount": 5
        },
        {
          "level": 3,
          "damageMultiplier": 1.106,
          "hitCount": 5
        },
        {
          "level": 4,
          "damageMultiplier": 1.2061,
          "hitCount": 5
        },
        {
          "level": 5,
          "damageMultiplier": 1.2565,
          "hitCount": 5
        },
        {
          "level": 6,
          "damageMultiplier": 1.3069,
          "hitCount": 5
        },
        {
          "level": 7,
          "damageMultiplier": 1.407,
          "hitCount": 5
        },
        {
          "level": 8,
          "damageMultiplier": 1.4574,
          "hitCount": 5
        },
        {
          "level": 9,
          "damageMultiplier": 1.5078,
          "hitCount": 5
        },
        {
          "level": 10,
          "damageMultiplier": 1.6086,
          "hitCount": 5
        }
      ]
    },
    "passive": {
      "id": "moe_passive",
      "name": "破滅の快感",
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
      "id": "moe_sub",
      "name": "作戦支援",
      "description": "味方のを増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 9.12,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 9.57,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 10.03,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.86,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 12.31,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 12.77,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.59,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.04,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.5,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.32,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
