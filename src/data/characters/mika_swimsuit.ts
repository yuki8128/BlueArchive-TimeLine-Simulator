import { Character } from '../../types';

export const mikaSwimsuit: Character = {
  "id": "mika_swimsuit",
  "name": "ミカ（水着）",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 3155,
    "defense": 102,
    "hp": 26940,
    "criticalValue": 205,
    "criticalDamage": 200,
    "stability": 1360,
    "accuracy": 514,
    "evasion": 962,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "A",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "mika_swimsuit_ex",
      "name": "あなたとの思い出",
      "description": "",
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
      "id": "mika_swimsuit_normal",
      "name": "かわいい子発見☆",
      "description": "40秒毎に、振動特効を59.8%加算（33秒間）",
      "type": "normal",
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
    },
    "passive": {
      "id": "mika_swimsuit_passive",
      "name": "Pax Vobiscum",
      "description": "通常攻撃の射程を100、攻撃力を21.2%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.2,
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
              "value": 11.76,
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
              "value": 12.32,
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
              "value": 14.56,
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
              "value": 15.12,
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
              "value": 15.68,
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
              "value": 17.92,
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
              "value": 18.48,
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
              "value": 19.04,
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
              "value": 21.28,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "mika_swimsuit_sub",
      "name": "Sursum Corda",
      "description": "全ての攻撃を確定会心に変更/ 振動特効を49.25%加算",
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
