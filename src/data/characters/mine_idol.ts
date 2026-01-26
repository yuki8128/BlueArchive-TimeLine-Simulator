import { Character } from '../../types';

export const mineIdol: Character = {
  "id": "mine_idol",
  "name": "ミネ（アイドル）",
  "rarity": 1,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 2329,
    "defense": 896,
    "hp": 41610,
    "criticalValue": 234,
    "criticalDamage": 200,
    "stability": 1656,
    "accuracy": 702,
    "evasion": 199,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "B",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "mine_idol_ex",
      "name": "スーパーアイドルランディング",
      "description": "指定した位置に移動した後、を増加（30秒間）/ を5個獲得（は最大30個まで重複）/ 舞台装置を召喚し自身を除く味方3人を舞台装置の位置に移動させ、舞台装置に到着した対象に対して、を増加（30秒間）",
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
      "id": "mine_idol_normal",
      "name": "あなたに決めました",
      "description": "30秒毎に、自身が持つを10個単位で消耗し、敵1人に対してダメージおよび減少（20秒間） 消耗なし：攻撃力の分のダメージ/を減少 10個：攻撃力の分のダメージ/を減少 20個：攻撃力の分のダメージ/を減少 30個：攻撃力の分のダメージ/を減少",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.0836,
          "hitCount": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -16.71,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 2.1874,
          "hitCount": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -16.71,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 2.2919,
          "hitCount": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -16.71,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 2.5002,
          "hitCount": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.39,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 2.6039,
          "hitCount": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.39,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 2.7085,
          "hitCount": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -18.39,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 2.9167,
          "hitCount": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -20.05,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 3.0205,
          "hitCount": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -20.05,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 3.125,
          "hitCount": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -20.05,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 3.3333,
          "hitCount": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -21.73,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "mine_idol_passive",
      "name": "長時間ライブ",
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
      "id": "mine_idol_sub",
      "name": "ファンの声援",
      "description": "自身を除く味方が消耗したコスト分、を獲得（は最大30個まで重複）/ を10個獲得時、を増加（20秒間）（効果は重複しない）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 12.1,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 12.71,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 13.31,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 15.73,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 16.34,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 16.94,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 19.36,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 19.97,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 20.57,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 22.99,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
