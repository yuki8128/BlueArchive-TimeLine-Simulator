import { Character } from '../../types';

export const reisa: Character = {
  "id": "reisa",
  "name": "レイサ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1711,
    "defense": 980,
    "hp": 45500,
    "criticalValue": 218,
    "criticalDamage": 200,
    "stability": 1812,
    "accuracy": 655,
    "evasion": 217,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "reisa_ex",
      "name": "挑戦状を受け取ってください！",
      "description": "扇形範囲内の敵に対して、攻撃力の707%分のダメージ 自身の弱体状態を1つ解除",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.7221,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 4.2807,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 5.3972,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 5.955,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 7.0715,
          "hitCount": 3
        }
      ]
    },
    "normal": {
      "id": "reisa_normal",
      "name": "勝利のポーズ！",
      "description": "50秒毎に、治癒力の43.1%分の持続回復を付与（30秒間）",
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
      "id": "reisa_passive",
      "name": "一日中でも！",
      "description": "攻撃力を16.2%、HPを16.2%増加",
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
            },
            {
              "type": "hpPercent",
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
              "value": 11.48,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 11.48,
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
              "value": 11.76,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 11.76,
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
              "value": 12.88,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 12.88,
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
              "value": 13.16,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 13.16,
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
              "value": 13.44,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 13.44,
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
              "value": 14.56,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 14.56,
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
              "value": 14.84,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 14.84,
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
              "value": 15.12,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 15.12,
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
              "value": 16.24,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 16.24,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "reisa_sub",
      "name": "宇沢レイサの存在感",
      "description": "EXスキルで敵を命中した時、対象の防御力を11.4%減少（25秒間） さらに挑発状態を付与（1秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -6,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -6.3,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -6.61,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -7.8,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -8.1,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -8.4,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -9.6,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -9.9,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.2,
              "duration": 25,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -11.4,
              "duration": 25,
              "target": "enemy"
            }
          ]
        }
      ]
    }
  }
};
