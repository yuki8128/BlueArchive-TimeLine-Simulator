import { Character } from '../../types';

export const miyakoSwimsuit: Character = {
  "id": "miyako_swimsuit",
  "name": "ミヤコ（水着）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1533,
    "defense": 172,
    "hp": 48020,
    "criticalValue": 208,
    "criticalDamage": 200,
    "stability": 1340,
    "accuracy": 521,
    "evasion": 1264,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "miyako_swimsuit_ex",
      "name": "飛行ドローン稼働",
      "description": "敵1人の率を減少（50秒間）/ さらに攻撃力の分のダメージ",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.5676,
          "hitCount": 2
        },
        {
          "level": 2,
          "damageMultiplier": 2.9526,
          "hitCount": 2
        },
        {
          "level": 3,
          "damageMultiplier": 3.7226,
          "hitCount": 2
        },
        {
          "level": 4,
          "damageMultiplier": 4.1076,
          "hitCount": 2
        },
        {
          "level": 5,
          "damageMultiplier": 4.8775,
          "hitCount": 2
        }
      ]
    },
    "normal": {
      "id": "miyako_swimsuit_normal",
      "name": "紫外線対策",
      "description": "30秒毎に、を増加（25秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 18.45,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 19.37,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 20.3,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 23.99,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 24.91,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 25.83,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 29.52,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 30.44,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 31.36,
              "duration": 25,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "evasionFlat",
              "value": 35.05,
              "duration": 25,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "miyako_swimsuit_passive",
      "name": "地道なトレーニング",
      "description": "を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "miyako_swimsuit_sub",
      "name": "戦術機動",
      "description": "回避を50回成功した時、を増加（10秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 332,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 348,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 365,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 431,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 448,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 464,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 530,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 547,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 564,
              "duration": 10,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 630,
              "duration": 10,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
