import { Character } from '../../types';

export const shiroko: Character = {
  "id": "shiroko",
  "name": "シロコ",
  "nameEn": "Shiroko",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2788,
    "defense": 118,
    "hp": 22260,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1384,
    "accuracy": 707,
    "evasion": 808,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "shiroko_ex",
      "name": "ドローン召喚：火力支援",
      "description": "敵1人に対して、攻撃力の分のダメージ",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.0045,
          "hitCount": 10
        },
        {
          "level": 2,
          "damageMultiplier": 4.6054,
          "hitCount": 10
        },
        {
          "level": 3,
          "damageMultiplier": 5.8066,
          "hitCount": 10
        },
        {
          "level": 4,
          "damageMultiplier": 6.4076,
          "hitCount": 10
        },
        {
          "level": 5,
          "damageMultiplier": 7.6088,
          "hitCount": 10
        }
      ]
    },
    "normal": {
      "id": "shiroko_normal",
      "name": "手榴弾投擲",
      "description": "25秒毎に、円形範囲内の敵に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.9365,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.0334,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.1302,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.5177,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.6145,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.7114,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.0988,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 3.1957,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 3.2925,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 3.68,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "shiroko_passive",
      "name": "ピンポイント",
      "description": "を増加",
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
      "id": "shiroko_sub",
      "name": "高速連射",
      "description": "通常攻撃時、20%の確率でを増加（30秒間）（クールタイム25秒）",
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
