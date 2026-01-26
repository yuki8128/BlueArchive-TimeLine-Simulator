import { Character } from '../../types';

export const yoshimi: Character = {
  "id": "yoshimi",
  "name": "ヨシミ",
  "nameEn": "Yoshimi",
  "rarity": 1,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2689,
    "defense": 119,
    "hp": 16675,
    "criticalValue": 201,
    "criticalDamage": 200,
    "stability": 1596,
    "accuracy": 705,
    "evasion": 806,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "B",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "yoshimi_ex",
      "name": "だ、誰が慌ててるって！？",
      "description": "円形範囲内の敵に対して、攻撃力の353%分のダメージを与えノックバック/ さらに気絶状態を付与（2.9秒間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.2092,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.541,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.8721,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 3.2032,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 3.535,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "yoshimi_normal",
      "name": "痛い目に遭ってみる？！",
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
      "id": "yoshimi_passive",
      "name": "な、舐めないで！",
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
      "id": "yoshimi_sub",
      "name": "私の話を聞きなさいよおっ！",
      "description": "味方のCC強化力を17.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
              "type": "damageDealtPercent",
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
