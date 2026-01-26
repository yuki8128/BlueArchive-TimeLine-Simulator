import { Character } from '../../types';

export const kotamaCamp: Character = {
  "id": "kotama_camp",
  "name": "コタマ（キャンプ）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1342,
    "defense": 113,
    "hp": 24650,
    "criticalValue": 210,
    "criticalDamage": 200,
    "stability": 944,
    "accuracy": 105,
    "evasion": 1040,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "kotama_camp_ex",
      "name": "熊よけ鈴投げ",
      "description": "敵1人に対して、攻撃力の分のダメージ。状態を付与（間）",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.7721,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 5.4885,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 6.9198,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 7.6355,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 9.0676,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "kotama_camp_normal",
      "name": "共鳴効果",
      "description": "45秒毎に、自身を除く味方1人と自身のを増加（35秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 5.98,
              "duration": 35,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 5.98,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 6.27,
              "duration": 35,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 6.27,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 6.57,
              "duration": 35,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 6.57,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 7.76,
              "duration": 35,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 7.76,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 8.06,
              "duration": 35,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 8.06,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 8.36,
              "duration": 35,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 8.36,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 9.55,
              "duration": 35,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 9.55,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 9.85,
              "duration": 35,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 9.85,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 10.15,
              "duration": 35,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 10.15,
              "duration": 35,
              "target": "ally"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.34,
              "duration": 35,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 11.34,
              "duration": 35,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "kotama_camp_passive",
      "name": "ノイズ増幅",
      "description": "を増加",
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
      "id": "kotama_camp_sub",
      "name": "電波干渉",
      "description": "敵を攻撃した時、攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.2415,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.2536,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.2657,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.314,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.3261,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.3381,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.3864,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.3985,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.4106,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.4589,
          "hitCount": 1
        }
      ]
    }
  }
};
