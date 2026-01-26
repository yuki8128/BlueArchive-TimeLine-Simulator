import { Character } from '../../types';

export const hiyori: Character = {
  "id": "hiyori",
  "name": "ヒヨリ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2126,
    "defense": 113,
    "hp": 15882,
    "criticalValue": 211,
    "criticalDamage": 200,
    "stability": 2171,
    "accuracy": 949,
    "evasion": 188,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "hiyori_ex",
      "name": "い、今支援します！",
      "description": "銃弾を発射。直線上に飛び、最初に命中した敵1体に対して、攻撃力の331%分のダメージ/ さらに同じ部隊に編成されているアリウススクワッドの生徒が2人以下の場合は、命中した敵の防御力を30.1%、3人以上の場合は、命中した敵の防御力を51.6%減少（30秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.0706,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -23.2,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.3814,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -23.2,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.6915,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -26.67,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 3.0023,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -26.67,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 3.3124,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -30.15,
              "duration": 30,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "hiyori_normal",
      "name": "い、痛くなりますよ！",
      "description": "40秒毎に、敵1人に対して、攻撃力の409%分のダメージ さらに防御力を10%減少（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.5585,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -7.72,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.6866,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -7.72,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.814,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -7.72,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 3.0702,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -8.5,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 3.1976,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -8.5,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 3.3257,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -8.5,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 3.5819,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -9.27,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 3.7093,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -9.27,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 3.8374,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -9.27,
              "duration": 30,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 4.0936,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.04,
              "duration": 30,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "hiyori_passive",
      "name": "雑誌に書いてありました",
      "description": "会心ダメージ率を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "hiyori_sub",
      "name": "付録の力です",
      "description": "味方の攻撃力を17.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
