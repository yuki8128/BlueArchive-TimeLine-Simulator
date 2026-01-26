import { Character } from '../../types';

export const pina: Character = {
  "id": "pina",
  "name": "フィーナ",
  "nameEn": "Pina",
  "rarity": 1,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2538,
    "defense": 491,
    "hp": 19990,
    "criticalValue": 243,
    "criticalDamage": 200,
    "stability": 1432,
    "accuracy": 97,
    "evasion": 195,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "B",
    "indoor": "C"
  },
  "skills": {
    "ex": {
      "id": "pina_ex",
      "name": "連射モード、デス！",
      "description": "を増加、通常攻撃のディレイ無視（30秒間）/ 発動後すぐにリロード",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.12,
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
              "value": 33.49,
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
              "value": 37.86,
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
              "value": 42.23,
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
              "value": 46.6,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "pina_normal",
      "name": "もう一度燃やすのデス！",
      "description": "HPが20%以下の時、治癒力の分の回復 （戦闘中に1回のみ）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 3.5523
        },
        {
          "level": 2,
          "healMultiplier": 3.7298
        },
        {
          "level": 3,
          "healMultiplier": 3.9075
        },
        {
          "level": 4,
          "healMultiplier": 4.618
        },
        {
          "level": 5,
          "healMultiplier": 4.7955
        },
        {
          "level": 6,
          "healMultiplier": 4.973
        },
        {
          "level": 7,
          "healMultiplier": 5.6835
        },
        {
          "level": 8,
          "healMultiplier": 5.861
        },
        {
          "level": 9,
          "healMultiplier": 6.0388
        },
        {
          "level": 10,
          "healMultiplier": 6.7493
        }
      ]
    },
    "passive": {
      "id": "pina_passive",
      "name": "鋭い直感",
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
      "id": "pina_sub",
      "name": "射撃準備、OK！",
      "description": "10秒間移動していない時、を増加",
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
