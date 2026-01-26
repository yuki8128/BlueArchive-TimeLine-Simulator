import { Character } from '../../types';

export const hifumiSwimsuit: Character = {
  "id": "hifumi_swimsuit",
  "name": "ヒフミ（水着）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2768,
    "defense": 115,
    "hp": 16181,
    "criticalValue": 259,
    "criticalDamage": 200,
    "stability": 1546,
    "accuracy": 726,
    "evasion": 769,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "hifumi_swimsuit_ex",
      "name": "クルセイダーちゃん、お願いします！",
      "description": "ヒフミ（水着）がクルセイダーちゃんに乗って登場。クルセイダーちゃんはヒフミ（水着）の攻撃力の分の値が追加された攻撃力を持ちます。（50秒間） （タクティカルサポートの搭乗物は重複して登場することはできません）",
      "type": "ex",
      "cost": 10,
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
      "id": "hifumi_swimsuit_normal",
      "name": "ペロロ様の一撃",
      "description": "25秒毎に、円形範囲内の敵に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.5904,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.6702,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.75,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.0678,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.1476,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.2267,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.5452,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.6243,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.7041,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 3.0219,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "hifumi_swimsuit_passive",
      "name": "コレクターの闘志",
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
      "id": "hifumi_swimsuit_sub",
      "name": "アングリーアデリーさんの加護",
      "description": "味方のを増加",
      "type": "sub",
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
        },
        {
          "level": 6
        },
        {
          "level": 7
        },
        {
          "level": 8
        },
        {
          "level": 9
        },
        {
          "level": 10
        }
      ]
    }
  }
};
