import { Character } from '../../types';

export const cherinoOnsen: Character = {
  "id": "cherino_onsen",
  "name": "チェリノ（温泉）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 1995,
    "defense": 118,
    "hp": 16641,
    "criticalValue": 252,
    "criticalDamage": 200,
    "stability": 1136,
    "accuracy": 101,
    "evasion": 1088,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "cherino_onsen_ex",
      "name": "粛清君1号、出撃！",
      "description": "チェリノ（温泉）が粛清君1号に乗って登場。粛清君1号はチェリノ（温泉）の攻撃力の17.1%分の値が追加された攻撃力を持ちます。（50秒間） （タクティカルサポートの搭乗物は重複して登場することはできません）",
      "type": "ex",
      "cost": 6,
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
      "id": "cherino_onsen_normal",
      "name": "照準よし、粛清だぁ！",
      "description": "15秒毎に、円形範囲内の敵に対して攻撃力の259%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.3678,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.4364,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.505,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.778,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.8466,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.9152,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.1889,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.2568,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.3254,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.5991,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "cherino_onsen_passive",
      "name": "髭の怒りに触れたな！？",
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
      "id": "cherino_onsen_sub",
      "name": "これが髭の威光だ！",
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
