import { Character } from '../../types';

export const hinaSwimsuit: Character = {
  "id": "hina_swimsuit",
  "name": "ヒナ（水着）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3001,
    "defense": 468,
    "hp": 19020,
    "criticalValue": 204,
    "criticalDamage": 200,
    "stability": 1364,
    "accuracy": 102,
    "evasion": 195,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "hina_swimsuit_ex",
      "name": "絶海：イシュ・ボシェテ",
      "description": "扇形範囲内の敵最大5人に対して、攻撃力の441%分のダメージ",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.324,
          "hitCount": 20
        },
        {
          "level": 2,
          "damageMultiplier": 2.6718,
          "hitCount": 20
        },
        {
          "level": 3,
          "damageMultiplier": 3.3689,
          "hitCount": 20
        },
        {
          "level": 4,
          "damageMultiplier": 3.7175,
          "hitCount": 20
        },
        {
          "level": 5,
          "damageMultiplier": 4.4146,
          "hitCount": 20
        }
      ]
    },
    "normal": {
      "id": "hina_swimsuit_normal",
      "name": "スローアンドノックアウト",
      "description": "20秒毎に敵1人に対して、攻撃力の226%分のダメージ/ さらに気絶状態を付与（2秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.4169,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.4876,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.5583,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.7004,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.7711,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.8418,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 1.9832,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.0539,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.1253,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.2667,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "hina_swimsuit_passive",
      "name": "無慈悲な風紀委員会",
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
      "id": "hina_swimsuit_sub",
      "name": "実力行使",
      "description": "EXスキルの使用時、攻撃力を16.5%増加（最大で5回分まで効果が重複）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 8.71,
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
              "value": 9.15,
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
              "value": 9.59,
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
              "value": 11.33,
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
              "value": 11.76,
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
              "value": 12.2,
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
              "value": 13.94,
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
              "value": 14.38,
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
              "value": 14.81,
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
              "value": 16.55,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
