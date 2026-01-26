import { Character } from '../../types';

export const kanna: Character = {
  "id": "kanna",
  "name": "カンナ",
  "rarity": 3,
  "attackType": "piercing",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2071,
    "defense": 377,
    "hp": 15847,
    "criticalValue": 211,
    "criticalDamage": 200,
    "stability": 1081,
    "accuracy": 792,
    "evasion": 1036,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "kanna_ex",
      "name": "公安局長の手腕",
      "description": "敵1人に対して攻撃力の分のダメージ その後、味方がその敵に与えたダメージのを15秒間されていき、その後蓄積した分の貫通タイプのダメージを与えます。（ダメージの蓄積は最大でカンナの攻撃力のまで） （15秒後に発動する貫通タイプのダメージにおいては、会心が発動しません）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.5292,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.609,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.6881,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.7679,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.847,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "kanna_normal",
      "name": "苛烈な尋問",
      "description": "30秒毎に、敵1人に対して攻撃力の分のダメージ/ を減少（20秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.9775,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -7.6,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.0769,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -7.98,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.1756,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -8.36,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.5711,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -9.88,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.6698,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.26,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 2.7685,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.64,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 3.164,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -12.16,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 3.2627,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -12.53,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 3.3621,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -12.92,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 3.7576,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -14.43,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "kanna_passive",
      "name": "狂犬の執念",
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
      "id": "kanna_sub",
      "name": "公安局特製弾",
      "description": "貫通タイプの味方のを増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
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
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 13.4,
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
              "value": 14.04,
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
              "value": 16.59,
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
              "value": 17.23,
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
              "value": 17.87,
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
              "value": 20.42,
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
              "value": 21.05,
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
              "value": 21.7,
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
              "value": 24.25,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
