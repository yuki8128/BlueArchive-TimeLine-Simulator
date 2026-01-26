import { Character } from '../../types';

export const yuzuMaid: Character = {
  "id": "yuzu_maid",
  "name": "ユズ（メイド）",
  "rarity": 1,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2407,
    "defense": 597,
    "hp": 22322,
    "criticalValue": 261,
    "criticalDamage": 200,
    "stability": 1095,
    "accuracy": 783,
    "evasion": 191,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "C",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "yuzu_maid_ex",
      "name": "潜入スタート！",
      "description": "円形範囲内の敵に対して、攻撃力の分のダメージ、周囲の円環範囲に同じダメージ/ ただし重複して受けたダメージは攻撃力の分のダメージだけ適用",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 6.8243,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 7.8477,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 9.8952,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 10.9186,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 12.9654,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "yuzu_maid_normal",
      "name": "ハイスコアアタック",
      "description": "30秒毎に、円形範囲内の敵に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.1781,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.2369,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.2957,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.5316,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.5904,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.6492,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 1.8851,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 1.9439,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.0027,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.2386,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "yuzu_maid_passive",
      "name": "正確なコーディング",
      "description": "率を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "yuzu_maid_sub",
      "name": "ゲーム開発部の絆",
      "description": "味方のを増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
