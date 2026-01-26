import { Character } from '../../types';

export const chise: Character = {
  "id": "chise",
  "name": "チセ",
  "nameEn": "Chise",
  "rarity": 2,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2220,
    "defense": 120,
    "hp": 22560,
    "criticalValue": 249,
    "criticalDamage": 200,
    "stability": 1000,
    "accuracy": 99,
    "evasion": 199,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "D",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "chise_ex",
      "name": "これは痛いかもよ～",
      "description": "円形範囲内の敵に対して、攻撃力の106%分の持続ダメージを付与（10秒間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.5603,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.645,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.8128,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.8967,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.0645,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "chise_normal",
      "name": "撃つよ～",
      "description": "25秒毎に、円形範囲内の敵に対して攻撃力の416%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.1927,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.3023,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.4119,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.8501,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.9596,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 3.0692,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.5074,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.617,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.7265,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 4.1655,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "chise_passive",
      "name": "よーし、頑張ろ～",
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
      "id": "chise_sub",
      "name": "ちょっと痛むよ～",
      "description": "通常攻撃時、10%の確率で攻撃力の102%分の火傷持続ダメージを付与（20秒間）（クールタイム5秒）",
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
