import { Character } from '../../types';

export const ayaneSwimsuit: Character = {
  "id": "ayane_swimsuit",
  "name": "アヤネ（水着）",
  "rarity": 1,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2890,
    "defense": 114,
    "hp": 16054,
    "criticalValue": 261,
    "criticalDamage": 200,
    "stability": 2194,
    "accuracy": 940,
    "evasion": 191,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "C",
    "outdoor": "A",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "ayane_swimsuit_ex",
      "name": "雨雲号、出撃します！",
      "description": "アヤネ（水着）が雨雲号に乗って登場。雨雲号はアヤネ（水着）の攻撃力の47.5%、会心値の32.6%分の値が追加された攻撃力及び会心値を持ちます。（30秒間）/ （タクティカルサポートの搭乗物は重複して登場することはできません）",
      "type": "ex",
      "cost": 4,
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
      "id": "ayane_swimsuit_normal",
      "name": "空からの支援",
      "description": "30秒毎に敵1人に攻撃力の215%分のダメージ（この攻撃は敵の防御力を84%無視します）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.4875,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.5246,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.5617,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.7101,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.7472,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.785,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 1.9334,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 1.9705,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.0076,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.1567,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "ayane_swimsuit_passive",
      "name": "自動照準",
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
      "id": "ayane_swimsuit_sub",
      "name": "戦況把握",
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
