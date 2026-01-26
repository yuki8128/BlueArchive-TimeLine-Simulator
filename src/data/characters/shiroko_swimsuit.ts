import { Character } from '../../types';

export const shirokoSwimsuit: Character = {
  "id": "shiroko_swimsuit",
  "name": "シロコ（水着）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 3045,
    "defense": 393,
    "hp": 14697,
    "criticalValue": 254,
    "criticalDamage": 200,
    "stability": 1582,
    "accuracy": 660,
    "evasion": 786,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "shiroko_swimsuit_ex",
      "name": "大物だ",
      "description": "敵1人のを減少（30秒間）/ さらに攻撃力の分のダメージ",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.88,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.04,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 6.762,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -20.75,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 8.526,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -26.16,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 9.408,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -28.86,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 11.172,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -34.27,
              "duration": 30,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "shiroko_swimsuit_normal",
      "name": "「ちょうどここに」",
      "description": "戦闘開始時、自身を除く味方のを増加（60秒間）、スキルコストを1減少（EXスキルの使用1回分） （戦闘中に1回のみ）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 11.54,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 12.11,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 12.7,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 15,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 15.57,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 16.15,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 18.46,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 19.04,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 19.61,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 21.91,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "shiroko_swimsuit_passive",
      "name": "少し浮かれて",
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
      "id": "shiroko_swimsuit_sub",
      "name": "鍛えられた肉体",
      "description": "味方のを増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 10.68,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 11.21,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 11.75,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 13.89,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 14.42,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 14.95,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 17.09,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 17.62,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 18.15,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "costRecoveryPercent",
              "value": 20.29,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
