import { Character } from '../../types';

export const renge: Character = {
  "id": "renge",
  "name": "レンゲ",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3117,
    "defense": 118,
    "hp": 19270,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1976,
    "accuracy": 910,
    "evasion": 197,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "renge_ex",
      "name": "百花繚乱式射撃術",
      "description": "扇形範囲内の敵に対して攻撃力の分の持続ダメージを付与（20秒間）/ 攻撃力の分のダメージ",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.6451,
          "hitCount": 9
        },
        {
          "level": 2,
          "damageMultiplier": 3.0422,
          "hitCount": 9
        },
        {
          "level": 3,
          "damageMultiplier": 3.8352,
          "hitCount": 9
        },
        {
          "level": 4,
          "damageMultiplier": 4.2323,
          "hitCount": 9
        },
        {
          "level": 5,
          "damageMultiplier": 5.0253,
          "hitCount": 9
        }
      ]
    },
    "normal": {
      "id": "renge_normal",
      "name": "燃え上がる情熱",
      "description": "30秒毎に、状態を付与。を増加（22秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.83,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.82,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.81,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.77,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.77,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.75,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 31.71,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.71,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.7,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 37.66,
              "duration": 22,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "renge_passive",
      "name": "百花繚乱の鬼教官",
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
      "id": "renge_sub",
      "name": "切り込み隊長としての本分",
      "description": "状態での攻撃時、攻撃力の分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0457,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0478,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0504,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0592,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0619,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0639,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0726,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0753,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0773,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.0867,
          "hitCount": 1
        }
      ]
    }
  }
};
