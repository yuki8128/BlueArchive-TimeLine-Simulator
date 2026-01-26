import { Character } from '../../types';

export const saoriDress: Character = {
  "id": "saori_dress",
  "name": "サオリ（ドレス）",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2465,
    "defense": 117,
    "hp": 22050,
    "criticalValue": 203,
    "criticalDamage": 200,
    "stability": 1372,
    "accuracy": 713,
    "evasion": 784,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "saori_dress_ex",
      "name": "目撃者排除",
      "description": "円形範囲内の敵に対して、攻撃力の1002%分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.2752,
          "hitCount": 8
        },
        {
          "level": 2,
          "damageMultiplier": 6.0657,
          "hitCount": 8
        },
        {
          "level": 3,
          "damageMultiplier": 7.6484,
          "hitCount": 8
        },
        {
          "level": 4,
          "damageMultiplier": 8.4397,
          "hitCount": 8
        },
        {
          "level": 5,
          "damageMultiplier": 10.0215,
          "hitCount": 8
        }
      ]
    },
    "normal": {
      "id": "saori_dress_normal",
      "name": "美しさの裏側",
      "description": "敵を8人倒した時、スキルコストを2.17、「戦場の感覚」を1個獲得（戦闘中に3回のみ）",
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
      "id": "saori_dress_passive",
      "name": "花茨",
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
      "id": "saori_dress_sub",
      "name": "加速する感覚",
      "description": "獲得した「戦場の感覚」の個数によって攻撃速度を増加/ 1個：攻撃速度を27.5%増加 2個：攻撃速度を59.7%増加 3個：攻撃速度を101%増加",
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
