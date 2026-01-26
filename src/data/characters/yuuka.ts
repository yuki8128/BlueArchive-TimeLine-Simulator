import { Character } from '../../types';

export const yuuka: Character = {
  "id": "yuuka",
  "name": "ユウカ",
  "nameEn": "Yuuka",
  "rarity": 2,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1084,
    "defense": 179,
    "hp": 50100,
    "criticalValue": 200,
    "criticalDamage": 200,
    "stability": 1396,
    "accuracy": 100,
    "evasion": 1440,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "B",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "yuuka_ex",
      "name": "Q.E.D",
      "description": "治癒力の分の効果を発動（間）",
      "type": "ex",
      "cost": 3,
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
        }
      ]
    },
    "normal": {
      "id": "yuuka_normal",
      "name": "I.F.F",
      "description": "15秒毎に、敵1人に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.0197,
          "hitCount": 9
        },
        {
          "level": 2,
          "damageMultiplier": 3.1708,
          "hitCount": 9
        },
        {
          "level": 3,
          "damageMultiplier": 3.3219,
          "hitCount": 9
        },
        {
          "level": 4,
          "damageMultiplier": 3.9262,
          "hitCount": 9
        },
        {
          "level": 5,
          "damageMultiplier": 4.0773,
          "hitCount": 9
        },
        {
          "level": 6,
          "damageMultiplier": 4.2284,
          "hitCount": 9
        },
        {
          "level": 7,
          "damageMultiplier": 4.8317,
          "hitCount": 9
        },
        {
          "level": 8,
          "damageMultiplier": 4.9828,
          "hitCount": 9
        },
        {
          "level": 9,
          "damageMultiplier": 5.1338,
          "hitCount": 9
        },
        {
          "level": 10,
          "damageMultiplier": 5.7382,
          "hitCount": 9
        }
      ]
    },
    "passive": {
      "id": "yuuka_passive",
      "name": "最適解の導出",
      "description": "を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "yuuka_sub",
      "name": "高速暗算",
      "description": "隠れている時、治癒力の分の回復（クールタイム10秒）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.75
        },
        {
          "level": 2,
          "healMultiplier": 0.7875
        },
        {
          "level": 3,
          "healMultiplier": 0.825
        },
        {
          "level": 4,
          "healMultiplier": 0.975
        },
        {
          "level": 5,
          "healMultiplier": 1.0125
        },
        {
          "level": 6,
          "healMultiplier": 1.05
        },
        {
          "level": 7,
          "healMultiplier": 1.2
        },
        {
          "level": 8,
          "healMultiplier": 1.2375
        },
        {
          "level": 9,
          "healMultiplier": 1.275
        },
        {
          "level": 10,
          "healMultiplier": 1.425
        }
      ]
    }
  }
};
