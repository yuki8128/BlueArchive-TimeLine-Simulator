import { Character } from '../../types';

export const nagisa: Character = {
  "id": "nagisa",
  "name": "ナギサ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2801,
    "defense": 394,
    "hp": 14755,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1132,
    "accuracy": 759,
    "evasion": 977,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "nagisa_ex",
      "name": "Time On Target",
      "description": "円形範囲内の敵に対して、攻撃力の分のダメージ/ 対象が軽装備の場合、攻撃前にを減少（15秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.8251,
          "hitCount": 20,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -30.97,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 5.5489,
          "hitCount": 20,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -30.97,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 6.2727,
          "hitCount": 20,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -35.62,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 6.9965,
          "hitCount": 20,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -35.62,
              "duration": 15,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 7.7203,
          "hitCount": 20,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -40.26,
              "duration": 15,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "nagisa_normal",
      "name": "Afternoon Tea",
      "description": "50秒毎に、HPが最も低い味方1人に対して治癒力の分の回復/ 対象がトリニティ総合学園に所属する生徒の場合、治癒力の分の回復",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.4703
        },
        {
          "level": 2,
          "healMultiplier": 1.5438
        },
        {
          "level": 3,
          "healMultiplier": 1.6173
        },
        {
          "level": 4,
          "healMultiplier": 1.9113
        },
        {
          "level": 5,
          "healMultiplier": 1.9848
        },
        {
          "level": 6,
          "healMultiplier": 2.0583
        },
        {
          "level": 7,
          "healMultiplier": 2.3523
        },
        {
          "level": 8,
          "healMultiplier": 2.4258
        },
        {
          "level": 9,
          "healMultiplier": 2.4995
        },
        {
          "level": 10,
          "healMultiplier": 2.7935
        }
      ]
    },
    "passive": {
      "id": "nagisa_passive",
      "name": "Pride of Tea Party",
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
      "id": "nagisa_sub",
      "name": "Noblesse oblige",
      "description": "爆発タイプの味方の率を増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
