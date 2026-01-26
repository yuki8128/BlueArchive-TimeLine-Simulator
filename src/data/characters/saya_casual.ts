import { Character } from '../../types';

export const sayaCasual: Character = {
  "id": "saya_casual",
  "name": "サヤ（私服）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2076,
    "defense": 113,
    "hp": 15962,
    "criticalValue": 262,
    "criticalDamage": 200,
    "stability": 1090,
    "accuracy": 420,
    "evasion": 759,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "saya_casual_ex",
      "name": "ぼく様からのプレゼントなのだ！",
      "description": "直線範囲内の敵に対して、攻撃力の75.9%分の持続ダメージを付与（20秒間）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.4004,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.4599,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.5796,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.6398,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.7595,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "saya_casual_normal",
      "name": "探究に終わりはない！",
      "description": "30秒毎に、円形範囲内の敵に対して攻撃力の389%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.0517,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.1546,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.2568,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.667,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.7699,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.8728,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.283,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.3852,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.4881,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 3.8983,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "saya_casual_passive",
      "name": "専心の秘薬",
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
      "id": "saya_casual_sub",
      "name": "怪しい薬じゃないってば！",
      "description": "味方の会心ダメージ率を17.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
