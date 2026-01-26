import { Character } from '../../types';

export const karinUniform: Character = {
  "id": "karin_uniform",
  "name": "カリン（制服）",
  "rarity": 1,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 3188,
    "defense": 390,
    "hp": 14582,
    "criticalValue": 256,
    "criticalDamage": 200,
    "stability": 2240,
    "accuracy": 384,
    "evasion": 195,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "A",
    "indoor": "C"
  },
  "skills": {
    "ex": {
      "id": "karin_uniform_ex",
      "name": "緊急対応",
      "description": "敵1人に対して攻撃力の分のダメージ（対象の現在のHPに比例してダメージが1～3倍に変更）（対象のHPが少ないほどダメージが大きくなります）/ EXスキルの使用時、対象のHPが20%以下の場合、自身の率を増加、を増加、を増加（30秒間）",
      "type": "ex",
      "cost": 7,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.2178,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 21.18,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 11.11,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 6.0004,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 24.36,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 12.77,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 7.5656,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 30.71,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 16.1,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 8.3482,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 33.88,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 17.76,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 9.9134,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 40.24,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 21.1,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "karin_uniform_normal",
      "name": "後方支援",
      "description": "40秒毎に、敵1人に対して攻撃力の分のダメージ/ （対象の現在のHPに比例してダメージが1～3倍に変更） （対象のHPが少ないほどダメージが大きくなります）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.183,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.2418,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.3006,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.5372,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.5967,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.6555,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 1.8921,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 1.9509,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.0104,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.247,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "karin_uniform_passive",
      "name": "細やかな気配り",
      "description": "を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "karin_uniform_sub",
      "name": "人気のガイドさん",
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
