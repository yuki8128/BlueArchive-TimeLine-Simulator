import { Character } from '../../types';

export const hibikiCheerleader: Character = {
  "id": "hibiki_cheerleader",
  "name": "ヒビキ（応援団）",
  "rarity": 1,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 6594,
    "defense": 453,
    "hp": 16260,
    "criticalValue": 263,
    "criticalDamage": 200,
    "stability": 944,
    "accuracy": 105,
    "evasion": 188,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "C",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "hibiki_cheerleader_ex",
      "name": "少し暑いかもしれない",
      "description": "円形範囲内の敵に攻撃力の分のダメージ/ 攻撃力の分の持続ダメージを付与（120秒間）",
      "type": "ex",
      "cost": 7,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.0788,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.0788,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.2406,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.2406,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.4025,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "hibiki_cheerleader_normal",
      "name": "この声が届いたなら",
      "description": "40秒毎に、攻撃力が最も高い味方と自身のを増加（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.52,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 15.52,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.91,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 15.91,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.29,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 16.29,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.84,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 17.84,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.23,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 18.23,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.62,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 18.62,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.17,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 20.17,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.56,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 20.56,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.95,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 20.95,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.5,
              "duration": 30,
              "target": "ally"
            },
            {
              "type": "attackPercent",
              "value": 22.5,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "hibiki_cheerleader_passive",
      "name": "情熱は十分",
      "description": "を増加、率を11.2%減少",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": -11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 17.92,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": -11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 18.82,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": -11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 19.72,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": -11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 23.3,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": -11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 24.2,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": -11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 25.09,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": -11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 28.68,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": -11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 29.57,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": -11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 30.47,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": -11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 34.05,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "hibiki_cheerleader_sub",
      "name": "何だか少し恥ずかしい…",
      "description": "敵を攻撃した時、攻撃力の分の追加ダメージ/ 敵との距離が遠くなるほどダメージ量が増加し、近くなるほど弱くなります（最大で2倍、最少で0.5倍）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0341,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0358,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0375,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0443,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.046,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0477,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0545,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0562,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0579,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.0647,
          "hitCount": 1
        }
      ]
    }
  }
};
