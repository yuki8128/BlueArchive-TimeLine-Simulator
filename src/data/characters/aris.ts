import { Character } from '../../types';

export const aris: Character = {
  "id": "aris",
  "name": "アリス",
  "nameEn": "Aris",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 4212,
    "defense": 408,
    "hp": 14630,
    "criticalValue": 230,
    "criticalDamage": 200,
    "stability": 1188,
    "accuracy": 690,
    "evasion": 170,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "aris_ex",
      "name": "世界の 法則が 崩壊します！",
      "description": "直線範囲内の敵に対して、攻撃力の591%分のダメージ/ のチャージ段階によってダメージ量が1.5倍、あるいは2倍に増加/ 発射後、のチャージ段階は初期化されます。",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.1115,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.5781,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.5117,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 4.9782,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.9113,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "aris_normal",
      "name": "光よ！",
      "description": "25秒毎に、会心値を32.3%増加（20秒間）/ を1段階チャージ（最大で2段階まで）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 17.04,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 17.89,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 18.74,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 22.15,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 23,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 23.85,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 27.26,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 28.11,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 28.96,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 32.37,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "aris_passive",
      "name": "強化魔法です！",
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
      "id": "aris_sub",
      "name": "覚醒せよ、スーパーノヴァ！",
      "description": "EXスキルの発動と同時に、会心値を22.9%増加（20秒間）/ のチャージ段階によって効果が1.5倍、あるいは2倍に増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 12.1,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 12.71,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 13.31,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 15.73,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 16.34,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 16.94,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 19.36,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 19.97,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 20.57,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 22.99,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
