import { Character } from '../../types';

export const hasumiSwimsuit: Character = {
  "id": "hasumi_swimsuit",
  "name": "ハスミ（水着）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3664,
    "defense": 114,
    "hp": 18530,
    "criticalValue": 210,
    "criticalDamage": 200,
    "stability": 1900,
    "accuracy": 945,
    "evasion": 190,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "hasumi_swimsuit_ex",
      "name": "必中のピアッシングショット",
      "description": "扇形範囲内の敵に対して、攻撃力の866%分のダメージ",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.5595,
          "hitCount": 5
        },
        {
          "level": 2,
          "damageMultiplier": 5.2432,
          "hitCount": 5
        },
        {
          "level": 3,
          "damageMultiplier": 6.6111,
          "hitCount": 5
        },
        {
          "level": 4,
          "damageMultiplier": 7.2953,
          "hitCount": 5
        },
        {
          "level": 5,
          "damageMultiplier": 8.6627,
          "hitCount": 5
        }
      ]
    },
    "normal": {
      "id": "hasumi_swimsuit_normal",
      "name": "これは、ゼロカロリー",
      "description": "35秒毎に、会心ダメージ率を24.4%増加、「カットスイカ」1個につき、会心値を8.9%増加（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 12.86,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "critRateFlat",
              "value": 0,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 13.5,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "critRateFlat",
              "value": 0,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 14.14,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "critRateFlat",
              "value": 0,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 16.71,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "critRateFlat",
              "value": 0,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 17.36,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "critRateFlat",
              "value": 0,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 18,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "critRateFlat",
              "value": 0,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 20.57,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "critRateFlat",
              "value": 0,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 21.21,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "critRateFlat",
              "value": 0,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 21.86,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "critRateFlat",
              "value": 0,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 24.43,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "critRateFlat",
              "value": 0,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "hasumi_swimsuit_passive",
      "name": "終始一貫",
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
      "id": "hasumi_swimsuit_sub",
      "name": "自分へのご褒美",
      "description": "自身のEXスキルで対象にダメージを4回与える度に、「カットスイカ」を1個獲得（43秒間）（「カットスイカ」は最大4個分まで保有が可能で、効果が重複）。「カットスイカ」1個につき、会心ダメージ率を6.2%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 3.3,
              "duration": 43,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 3.47,
              "duration": 43,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 3.63,
              "duration": 43,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 4.29,
              "duration": 43,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 4.46,
              "duration": 43,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 4.62,
              "duration": 43,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 5.28,
              "duration": 43,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 5.44,
              "duration": 43,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 5.61,
              "duration": 43,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 6.27,
              "duration": 43,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
