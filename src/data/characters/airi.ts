import { Character } from '../../types';

export const airi: Character = {
  "id": "airi",
  "name": "アイリ",
  "nameEn": "Airi",
  "rarity": 2,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 1674,
    "defense": 120,
    "hp": 16859,
    "criticalValue": 199,
    "criticalDamage": 200,
    "stability": 1615,
    "accuracy": 99,
    "evasion": 1196,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "D",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "airi_ex",
      "name": "勿体ないけど……えぇいっ！",
      "description": "円形範囲内の敵に対して、攻撃力の464%分のダメージ/ さらに移動速度を22.8%減少、攻撃速度を26.2%減少（20秒間）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.6544,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.0527,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 3.451,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 3.8486,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 4.6452,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "airi_normal",
      "name": "頭がキーンってするかも……",
      "description": "25秒毎に、敵1人に対して攻撃速度を35.1%減少（30秒間）",
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
      "id": "airi_passive",
      "name": "デザートの力",
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
      "id": "airi_sub",
      "name": "アイリの声援",
      "description": "味方の攻撃速度を17.3%増加",
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
