import { Character } from '../../types';

export const nozomi: Character = {
  "id": "nozomi",
  "name": "ノゾミ",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2950,
    "defense": 97,
    "hp": 21590,
    "criticalValue": 213,
    "criticalDamage": 200,
    "stability": 932,
    "accuracy": 106,
    "evasion": 922,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "nozomi_ex",
      "name": "ブースターオン！",
      "description": "直線範囲内の指定した敵に対して、攻撃力の1045%分のダメージ、その他の敵に対して、攻撃力の147%分のダメージ/ 追加で最大2コストを消耗して、1コストあたりのダメージが25%増加します。/ （コスト増減スキルの効果は基本コストを基準として計算します）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.5036,
          "hitCount": 5
        },
        {
          "level": 2,
          "damageMultiplier": 6.3289,
          "hitCount": 5
        },
        {
          "level": 3,
          "damageMultiplier": 7.9794,
          "hitCount": 5
        },
        {
          "level": 4,
          "damageMultiplier": 8.8053,
          "hitCount": 5
        },
        {
          "level": 5,
          "damageMultiplier": 10.4559,
          "hitCount": 5
        }
      ]
    },
    "normal": {
      "id": "nozomi_normal",
      "name": "こっちこっち～！",
      "description": "通常攻撃12回毎に、振動特効を53.9%加算（26秒間）",
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
      "id": "nozomi_passive",
      "name": "急行準備",
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
      "id": "nozomi_sub",
      "name": "出発進行！",
      "description": "全ての攻撃を確定会心に変更/ 自身の攻撃速度を25.5%増加、会心ダメージ率を25.5%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 13.44,
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
              "value": 14.12,
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
              "value": 14.79,
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
              "value": 17.48,
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
              "value": 18.15,
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
              "value": 18.82,
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
              "value": 21.51,
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
              "value": 22.18,
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
              "value": 22.85,
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
              "value": 25.54,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
