import { Character } from '../../types';

export const hifumi: Character = {
  "id": "hifumi",
  "name": "ヒフミ",
  "nameEn": "Hihumi",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1953,
    "defense": 120,
    "hp": 22500,
    "criticalValue": 199,
    "criticalDamage": 200,
    "stability": 1400,
    "accuracy": 699,
    "evasion": 799,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "hifumi_ex",
      "name": "助けて、ペロロ様！",
      "description": "ペロロ人形が出現し、円形範囲内の敵に対して攻撃力の分のダメージ/ ペロロ人形は、ヒフミの最大HPの160%分の値が追加されたHPを持ちます",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.0188,
          "hitCount": 2
        },
        {
          "level": 2,
          "damageMultiplier": 1.1715,
          "hitCount": 2
        },
        {
          "level": 3,
          "damageMultiplier": 1.4777,
          "hitCount": 2
        },
        {
          "level": 4,
          "damageMultiplier": 1.6304,
          "hitCount": 2
        },
        {
          "level": 5,
          "damageMultiplier": 1.9358,
          "hitCount": 2
        }
      ]
    },
    "normal": {
      "id": "hifumi_normal",
      "name": "ペロロ様の応援",
      "description": "35秒毎に、敵1人に対して攻撃力の212%分のダメージ/ を減少（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.1281,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -16.86,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.1281,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -17.71,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.1281,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -18.55,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.1281,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -21.91,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.1281,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -22.76,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 2.1281,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -23.6,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 2.1281,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -26.98,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 2.1281,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -27.82,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 2.1281,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -28.66,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 2.1281,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "accuracyFlat",
              "value": -32.03,
              "duration": 30,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "hifumi_passive",
      "name": "コレクター根性",
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
      "id": "hifumi_sub",
      "name": "すばしっこいコレクター",
      "description": "EXスキルの使用時、を増加（5秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 980,
              "duration": 5,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 1029,
              "duration": 5,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 1078,
              "duration": 5,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 1273,
              "duration": 5,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 1322,
              "duration": 5,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 1371,
              "duration": 5,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 1567,
              "duration": 5,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 1616,
              "duration": 5,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 1665,
              "duration": 5,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 1861,
              "duration": 5,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
