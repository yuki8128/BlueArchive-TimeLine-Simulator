import { Character } from '../../types';

export const karinBunnygirl: Character = {
  "id": "karin_bunnygirl",
  "name": "カリン（バニーガール）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3446,
    "defense": 120,
    "hp": 19530,
    "criticalValue": 199,
    "criticalDamage": 200,
    "stability": 2000,
    "accuracy": 898,
    "evasion": 200,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "karin_bunnygirl_ex",
      "name": "迅速に、正確に",
      "description": "扇形範囲内の敵に対して、攻撃力の521%分のダメージ（この攻撃は敵の防御力を48%無視します）",
      "type": "ex",
      "cost": 7,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.2593,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.7481,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.2363,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 4.7251,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.214,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "karin_bunnygirl_normal",
      "name": "広域射撃、開始",
      "description": "25秒毎に、円形範囲内の敵に対して、攻撃力の192%分のダメージ（この攻撃は敵の防御力を32%無視します）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.1168,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.1727,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.2004,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.4238,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.4515,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.5075,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 1.6194,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 1.6748,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 1.7031,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 1.9264,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "karin_bunnygirl_passive",
      "name": "火力強化、完了",
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
      "id": "karin_bunnygirl_sub",
      "name": "精密に、慎重に",
      "description": "EXスキルの発動と同時に、会心値を24.5%増加（40秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 12.91,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 13.56,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 14.2,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 16.78,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 17.43,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 18.07,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 20.65,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 21.3,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 21.94,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 24.53,
              "duration": 40,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
