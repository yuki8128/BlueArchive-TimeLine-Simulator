import { Character } from '../../types';

export const koyuki: Character = {
  "id": "koyuki",
  "name": "コユキ",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3471,
    "defense": 456,
    "hp": 18560,
    "criticalValue": 209,
    "criticalDamage": 200,
    "stability": 1332,
    "accuracy": 104,
    "evasion": 190,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "koyuki_ex",
      "name": "トリッキーな変数",
      "description": "円形範囲内の敵に対して、爆弾1個を投擲しダメージを与えます。 銃弾：攻撃力の分のダメージ 電界：攻撃力の分のダメージ 爆炎：攻撃力の分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.338,
          "hitCount": 10
        },
        {
          "level": 2,
          "damageMultiplier": 2.6889,
          "hitCount": 10
        },
        {
          "level": 3,
          "damageMultiplier": 3.3901,
          "hitCount": 10
        },
        {
          "level": 4,
          "damageMultiplier": 3.7404,
          "hitCount": 10
        },
        {
          "level": 5,
          "damageMultiplier": 4.4415,
          "hitCount": 10
        }
      ]
    },
    "normal": {
      "id": "koyuki_normal",
      "name": "1人だと思いましたか！？",
      "description": "30秒毎に、敵1人に対して攻撃力の分のダメージ、対象の付近に敵がいる場合、付近の敵2体に対して同じダメージ/ 発動後すぐにリロード",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.028,
          "hitCount": 40
        },
        {
          "level": 2,
          "damageMultiplier": 2.1294,
          "hitCount": 40
        },
        {
          "level": 3,
          "damageMultiplier": 2.2309,
          "hitCount": 40
        },
        {
          "level": 4,
          "damageMultiplier": 2.6366,
          "hitCount": 40
        },
        {
          "level": 5,
          "damageMultiplier": 2.738,
          "hitCount": 40
        },
        {
          "level": 6,
          "damageMultiplier": 2.8395,
          "hitCount": 40
        },
        {
          "level": 7,
          "damageMultiplier": 3.2452,
          "hitCount": 40
        },
        {
          "level": 8,
          "damageMultiplier": 3.3466,
          "hitCount": 40
        },
        {
          "level": 9,
          "damageMultiplier": 3.448,
          "hitCount": 40
        },
        {
          "level": 10,
          "damageMultiplier": 3.8538,
          "hitCount": 40
        }
      ]
    },
    "passive": {
      "id": "koyuki_passive",
      "name": "ミラクルを信じてますか？",
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
      "id": "koyuki_sub",
      "name": "カオス理論",
      "description": "EXスキルの発動と同時に、使用した爆弾の種類によってを増加（40秒間） 銃弾：を増加 電界：を増加 爆炎：を増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.33,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.1,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.86,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.93,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.69,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.46,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 24.53,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.29,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.05,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 29.12,
              "duration": 40,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
