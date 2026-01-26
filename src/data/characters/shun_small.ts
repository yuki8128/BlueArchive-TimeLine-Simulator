import { Character } from '../../types';

export const shunSmall: Character = {
  "id": "shun_small",
  "name": "シュン（幼女）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 4192,
    "defense": 119,
    "hp": 19460,
    "criticalValue": 200,
    "criticalDamage": 200,
    "stability": 1992,
    "accuracy": 902,
    "evasion": 199,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "shun_small_ex",
      "name": "そういうのはダメなんですよ？",
      "description": "敵1人に対して、攻撃力の分のダメージ（この攻撃は敵の防御力を無視します）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.9312,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 6.559,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 7.1176,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 7.6081,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 8.0301,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "shun_small_normal",
      "name": "危ないのはめっ、です！",
      "description": "25秒毎に、敵1人に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.673,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.7569,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.8404,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.1749,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.2589,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.3424,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.6769,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.7604,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.8444,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 3.1789,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "shun_small_passive",
      "name": "意気軒昂",
      "description": "を増加",
      "type": "passive",
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
    "sub": {
      "id": "shun_small_sub",
      "name": "アンバランス",
      "description": "EXスキルの使用時、を21.7%減少（20秒間）/ 20秒後に、を増加（20秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -21.78,
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
              "value": -21.78,
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
              "value": -21.78,
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
              "value": -21.78,
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
              "value": -21.78,
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
              "value": -21.78,
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
              "value": -21.78,
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
              "value": -21.78,
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
              "value": -21.78,
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
              "value": -21.78,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
