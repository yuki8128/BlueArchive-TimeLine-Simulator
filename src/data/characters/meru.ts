import { Character } from '../../types';

export const meru: Character = {
  "id": "meru",
  "name": "メル",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 4209,
    "defense": 110,
    "hp": 23950,
    "criticalValue": 270,
    "criticalDamage": 200,
    "stability": 916,
    "accuracy": 108,
    "evasion": 1011,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "meru_ex",
      "name": "最強のアイデア",
      "description": "敵1人に対して、攻撃力の分のダメージ/ 攻撃力分の持続ダメージを付与（30秒間）/ さらにを適用（30秒間） の敵への攻撃時に、メルの攻撃力の分の追加ダメージ （このダメージにおいては、会心が発動しません） （最大480発分まで適用されます）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.9116,
          "hitCount": 7
        },
        {
          "level": 2,
          "damageMultiplier": 1.0485,
          "hitCount": 7
        },
        {
          "level": 3,
          "damageMultiplier": 1.4588,
          "hitCount": 7
        },
        {
          "level": 4,
          "damageMultiplier": 1.5953,
          "hitCount": 7
        },
        {
          "level": 5,
          "damageMultiplier": 1.7322,
          "hitCount": 7
        }
      ]
    },
    "normal": {
      "id": "meru_normal",
      "name": "妄想は無限大",
      "description": "50秒毎に、敵1人に対して攻撃力の分のダメージ/ さらに攻撃力の分の持続ダメージを付与（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.7146,
          "hitCount": 2
        },
        {
          "level": 2,
          "damageMultiplier": 0.7502,
          "hitCount": 2
        },
        {
          "level": 3,
          "damageMultiplier": 0.7858,
          "hitCount": 2
        },
        {
          "level": 4,
          "damageMultiplier": 0.9284,
          "hitCount": 2
        },
        {
          "level": 5,
          "damageMultiplier": 0.9646,
          "hitCount": 2
        },
        {
          "level": 6,
          "damageMultiplier": 1.0004,
          "hitCount": 2
        },
        {
          "level": 7,
          "damageMultiplier": 1.1428,
          "hitCount": 2
        },
        {
          "level": 8,
          "damageMultiplier": 1.1784,
          "hitCount": 2
        },
        {
          "level": 9,
          "damageMultiplier": 1.214,
          "hitCount": 2
        },
        {
          "level": 10,
          "damageMultiplier": 1.3572,
          "hitCount": 2
        }
      ]
    },
    "passive": {
      "id": "meru_passive",
      "name": "インプット",
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
      "id": "meru_sub",
      "name": "設定崩壊！",
      "description": "通常攻撃3回毎に強化弾を発射し、攻撃力の分のダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.3939,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.4636,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.533,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.812,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.8814,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.9511,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.2298,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.2995,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.3693,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 2.6479,
          "hitCount": 1
        }
      ]
    }
  }
};
