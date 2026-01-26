import { Character } from '../../types';

export const michiruDress: Character = {
  "id": "michiru_dress",
  "name": "ミチル（ドレス）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2444,
    "defense": 587,
    "hp": 21942,
    "criticalValue": 265,
    "criticalDamage": 200,
    "stability": 2157,
    "accuracy": 530,
    "evasion": 187,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "michiru_dress_ex",
      "name": "少女忍法帖、ミチうにゃああっ！",
      "description": "味方1人に対して、治癒力の290%分の回復",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.529
        },
        {
          "level": 2,
          "healMultiplier": 1.7583
        },
        {
          "level": 3,
          "healMultiplier": 2.217
        },
        {
          "level": 4,
          "healMultiplier": 2.4463
        },
        {
          "level": 5,
          "healMultiplier": 2.9048
        }
      ]
    },
    "normal": {
      "id": "michiru_dress_normal",
      "name": "秘儀を伝授しよう！",
      "description": "戦闘開始時、自身を除く味方の攻撃力を21.5%増加（60秒間）、スキルコストを1減少（EXスキルの使用1回分） （戦闘中に1回のみ）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.34,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.91,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 12.48,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.75,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.31,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.88,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.15,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.72,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.28,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.55,
              "duration": 60,
              "target": "allAllies"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "michiru_dress_passive",
      "name": "これもまた忍者装束也！",
      "description": "治癒力を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "michiru_dress_sub",
      "name": "アンダーカバー流奥儀！",
      "description": "味方のコスト回復力を20.2%増加",
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
