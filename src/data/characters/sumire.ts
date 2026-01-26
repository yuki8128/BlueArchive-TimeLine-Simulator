import { Character } from '../../types';

export const sumire: Character = {
  "id": "sumire",
  "name": "スミレ",
  "nameEn": "Sumire",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1894,
    "defense": 726,
    "hp": 31460,
    "criticalValue": 198,
    "criticalDamage": 200,
    "stability": 2016,
    "accuracy": 594,
    "evasion": 198,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "sumire_ex",
      "name": "スパートをかけます！",
      "description": "扇形範囲内の敵に対して、攻撃力の1410%分のダメージ",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 7.4227,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 8.5361,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 10.7629,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 11.8763,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 14.1031,
          "hitCount": 3
        }
      ]
    },
    "normal": {
      "id": "sumire_normal",
      "name": "ウォーミングアップ",
      "description": "40秒毎に、攻撃力を47.9%増加（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.23,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.49,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.75,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.8,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 34.06,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 35.32,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 40.37,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 41.63,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 42.89,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 47.93,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "sumire_passive",
      "name": "ピンポイントアタック",
      "description": "HPを26.6%増加",
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
      "id": "sumire_sub",
      "name": "テンションアップ",
      "description": "自身がCC状態ではない時、防御力を25.5%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 13.44,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 14.12,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 14.79,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 17.48,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 18.15,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 18.82,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 21.51,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 22.18,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 22.85,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 25.54,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
