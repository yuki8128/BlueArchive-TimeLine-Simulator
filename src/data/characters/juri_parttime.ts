import { Character } from '../../types';

export const juriParttime: Character = {
  "id": "juri_parttime",
  "name": "ジュリ（アルバイト）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 2145,
    "defense": 991,
    "hp": 46010,
    "criticalValue": 216,
    "criticalDamage": 200,
    "stability": 1832,
    "accuracy": 649,
    "evasion": 220,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "juri_parttime_ex",
      "name": "最後の仕上げです！",
      "description": "敵1人に対して、攻撃力の分のダメージ/ 攻撃力の分の持続ダメージを付与（16秒間） を付与（間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.7036,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 4.2598,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 5.3706,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 5.926,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 7.0368,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "juri_parttime_normal",
      "name": "アルバイトの本気",
      "description": "45秒毎に、自身を除きHPが最も低い味方1人と自身のを増加（32秒間）",
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
      "id": "juri_parttime_passive",
      "name": "不屈の心",
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
      "id": "juri_parttime_sub",
      "name": "ジュリの心得！",
      "description": "自身がCC状態になった時、治癒力の分の回復",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.975
        },
        {
          "level": 2,
          "healMultiplier": 1.0238
        },
        {
          "level": 3,
          "healMultiplier": 1.0725
        },
        {
          "level": 4,
          "healMultiplier": 1.2675
        },
        {
          "level": 5,
          "healMultiplier": 1.3163
        },
        {
          "level": 6,
          "healMultiplier": 1.365
        },
        {
          "level": 7,
          "healMultiplier": 1.56
        },
        {
          "level": 8,
          "healMultiplier": 1.6088
        },
        {
          "level": 9,
          "healMultiplier": 1.6575
        },
        {
          "level": 10,
          "healMultiplier": 1.8525
        }
      ]
    }
  }
};
