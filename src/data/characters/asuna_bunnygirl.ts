import { Character } from '../../types';

export const asunaBunnygirl: Character = {
  "id": "asuna_bunnygirl",
  "name": "アスナ（バニーガール）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2038,
    "defense": 113,
    "hp": 21310,
    "criticalValue": 210,
    "criticalDamage": 200,
    "stability": 1324,
    "accuracy": 736,
    "evasion": 757,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "asuna_bunnygirl_ex",
      "name": "ねぇねぇこれ見て！",
      "description": "円形範囲内の敵に対して、を減少（40秒間）/ さらに、攻撃力の分のダメージ",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.7404,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.96,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 3.1516,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -18.96,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 3.5629,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -21.8,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 3.9735,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -21.8,
              "duration": 40,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 4.3847,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -24.64,
              "duration": 40,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "asuna_bunnygirl_normal",
      "name": "楽しくやろう！",
      "description": "35秒毎に、を増加（23秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 18.45,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.37,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.3,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.14,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 23.06,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 23.99,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.83,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.75,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.68,
              "duration": 23,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.52,
              "duration": 23,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "asuna_bunnygirl_passive",
      "name": "もっともっと楽しもう！",
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
      "id": "asuna_bunnygirl_sub",
      "name": "これはおまけだよ！",
      "description": "EXスキルの使用時、を増加（30秒間）",
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
