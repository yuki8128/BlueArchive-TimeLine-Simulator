import { Character } from '../../types';

export const saki: Character = {
  "id": "saki",
  "name": "サキ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2887,
    "defense": 472,
    "hp": 16572,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1582,
    "accuracy": 101,
    "evasion": 197,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "saki_ex",
      "name": "支援射撃、開始！",
      "description": "円形範囲内の敵に対して、攻撃力の分のダメージ さらにを付与（間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.165,
          "hitCount": 10
        },
        {
          "level": 2,
          "damageMultiplier": 4.7894,
          "hitCount": 10
        },
        {
          "level": 3,
          "damageMultiplier": 5.4145,
          "hitCount": 10
        },
        {
          "level": 4,
          "damageMultiplier": 6.0389,
          "hitCount": 10
        },
        {
          "level": 5,
          "damageMultiplier": 6.664,
          "hitCount": 10
        }
      ]
    },
    "normal": {
      "id": "saki_normal",
      "name": "制圧射撃",
      "description": "35秒毎にHPが最も低い敵1人に対して、攻撃力の分のダメージ さらに攻撃力の分の持続ダメージを付与（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.8543,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.9467,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.9936,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.3639,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.4101,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.5032,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.8742,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.9666,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.059,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 3.43,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "saki_passive",
      "name": "準備万端",
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
      "id": "saki_sub",
      "name": "ポイントマンの先導",
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
