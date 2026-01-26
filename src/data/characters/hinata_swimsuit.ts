import { Character } from '../../types';

export const hinataSwimsuit: Character = {
  "id": "hinata_swimsuit",
  "name": "ヒナタ（水着）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 3000,
    "defense": 399,
    "hp": 14927,
    "criticalValue": 250,
    "criticalDamage": 200,
    "stability": 1145,
    "accuracy": 750,
    "evasion": 1098,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "hinata_swimsuit_ex",
      "name": "楽しい水遊び",
      "description": "円形範囲内の敵に対して、攻撃力の911%分のダメージ（この攻撃は敵の防御力を80%無視します）",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.795,
          "hitCount": 15
        },
        {
          "level": 2,
          "damageMultiplier": 5.5146,
          "hitCount": 15
        },
        {
          "level": 3,
          "damageMultiplier": 6.9531,
          "hitCount": 15
        },
        {
          "level": 4,
          "damageMultiplier": 7.672,
          "hitCount": 15
        },
        {
          "level": 5,
          "damageMultiplier": 9.1105,
          "hitCount": 15
        }
      ]
    },
    "normal": {
      "id": "hinata_swimsuit_normal",
      "name": "涼しい水浴び",
      "description": "40秒毎に、敵1人に対して、水風船を投擲して攻撃力の164%分のダメージ。投擲された水風船を中心として周囲にまだ攻撃が当たっていない敵がいる場合、水風船がその方向へ跳ねて同じダメージ（最大6回まで） （この攻撃は敵の防御力を80%無視します）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.8631,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.9065,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.9492,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 1.1221,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 1.1655,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 1.2082,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 1.3811,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 1.4238,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 1.4672,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 1.6401,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "hinata_swimsuit_passive",
      "name": "遠征隊の情熱",
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
      "id": "hinata_swimsuit_sub",
      "name": "慈愛の手",
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
