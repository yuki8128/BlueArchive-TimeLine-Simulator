import { Character } from '../../types';

export const wakamoSwimsuit: Character = {
  "id": "wakamo_swimsuit",
  "name": "ワカモ（水着）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3685,
    "defense": 118,
    "hp": 19200,
    "criticalValue": 203,
    "criticalDamage": 200,
    "stability": 1968,
    "accuracy": 914,
    "evasion": 196,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "wakamo_swimsuit_ex",
      "name": "秘色の花占い",
      "description": "敵1人に対して攻撃力の1074%分のダメージ 攻撃時に気絶状態を付与（1.1秒間） 最後の攻撃は気絶状態を付与し（4.1秒間）さらにノックバック",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.6539,
          "hitCount": 6
        },
        {
          "level": 2,
          "damageMultiplier": 6.5023,
          "hitCount": 6
        },
        {
          "level": 3,
          "damageMultiplier": 8.1979,
          "hitCount": 6
        },
        {
          "level": 4,
          "damageMultiplier": 9.0463,
          "hitCount": 6
        },
        {
          "level": 5,
          "damageMultiplier": 10.7425,
          "hitCount": 6
        }
      ]
    },
    "normal": {
      "id": "wakamo_swimsuit_normal",
      "name": "ただ、あなた様のため",
      "description": "60秒毎に被ダメージ量が増加する代わりに攻撃力増加(全3段階)/ 攻撃力:31.5%/61.8%/99% 被ダメージ量:9.6%/19.2%/28.9%",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.73,
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
              "value": 22.27,
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
              "value": 22.82,
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
              "value": 24.99,
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
              "value": 25.53,
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
              "value": 26.07,
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
              "value": 28.25,
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
              "value": 28.79,
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
              "value": 29.33,
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
              "value": 31.5,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "wakamo_swimsuit_passive",
      "name": "あふれ出す恋心",
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
      "id": "wakamo_swimsuit_sub",
      "name": "真夏の情熱",
      "description": "HPが30%以下の敵を攻撃した時、攻撃力の98.1%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.5166,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.5425,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.5683,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.6716,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.6975,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.7233,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.8266,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.8524,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.8783,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.9816,
          "hitCount": 1
        }
      ]
    }
  }
};
