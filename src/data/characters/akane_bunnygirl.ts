import { Character } from '../../types';

export const akaneBunnygirl: Character = {
  "id": "akane_bunnygirl",
  "name": "アカネ（バニーガール）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2897,
    "defense": 397,
    "hp": 14858,
    "criticalValue": 251,
    "criticalDamage": 200,
    "stability": 1141,
    "accuracy": 1131,
    "evasion": 1093,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "akane_bunnygirl_ex",
      "name": "丁寧に準備します",
      "description": "範囲内に入ったら自動で爆発し、攻撃力の分のダメージを与える地雷を設置（90秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.5154,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 4.0425,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 5.0967,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 5.6245,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 6.6787,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "akane_bunnygirl_normal",
      "name": "優雅に掃除します",
      "description": "30秒毎に、円形範囲内の敵に攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.1637,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.2715,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.38,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.8126,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.9204,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 3.0289,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.4615,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.5693,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.6778,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 4.1104,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "akane_bunnygirl_passive",
      "name": "的確に捉えます",
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
      "id": "akane_bunnygirl_sub",
      "name": "迅速に支援します",
      "description": "神秘タイプの味方のを増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 12.77,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 13.4,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.04,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.59,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.23,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 17.87,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.42,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.05,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.7,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.25,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
