import { Character } from '../../types';

export const mari: Character = {
  "id": "mari",
  "name": "マリー",
  "rarity": 2,
  "attackType": "mystic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 1473,
    "defense": 113,
    "hp": 15916,
    "criticalValue": 210,
    "criticalDamage": 200,
    "stability": 1086,
    "accuracy": 105,
    "evasion": 1041,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "A",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "mari_ex",
      "name": "聖なる加護",
      "description": "味方1人に対して、治癒力の328%分のシールド効果を発動（20秒間）/ さらに弱体状態を1つ解除",
      "type": "ex",
      "cost": 2,
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
        }
      ]
    },
    "normal": {
      "id": "mari_normal",
      "name": "浄化の洗礼",
      "description": "25秒毎に、円形範囲内の敵に対して攻撃力の364%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.9173,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.0132,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.1091,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.4927,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.5886,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.6845,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.0681,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.164,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.2599,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 3.6435,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "mari_passive",
      "name": "決然たる思い",
      "description": "会心値を26.6%増加",
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
      "id": "mari_sub",
      "name": "慈愛の心",
      "description": "味方のHPを17.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
