import { Character } from '../../types';

export const kazusaBand: Character = {
  "id": "kazusa_band",
  "name": "カズサ（バンド）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2739,
    "defense": 460,
    "hp": 18700,
    "criticalValue": 260,
    "criticalDamage": 200,
    "stability": 1340,
    "accuracy": 104,
    "evasion": 191,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "kazusa_band_ex",
      "name": "歴史的一小節",
      "description": "自身を中心とした円形範囲内の味方の攻撃速度を35.9%増加/ さらに、自身にを2個付与（40秒間）（最大2個まで）",
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
      "id": "kazusa_band_normal",
      "name": "ベースチューニング",
      "description": "35秒毎に、自身の攻撃力を37.2%増加（26秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.63,
              "duration": 26,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.61,
              "duration": 26,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.59,
              "duration": 26,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.52,
              "duration": 26,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.5,
              "duration": 26,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.48,
              "duration": 26,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 31.4,
              "duration": 26,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.39,
              "duration": 26,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.37,
              "duration": 26,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 37.29,
              "duration": 26,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "kazusa_band_passive",
      "name": "慣れ親しんできた舞台",
      "description": "攻撃速度を26.6%増加",
      "type": "passive",
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
    "sub": {
      "id": "kazusa_band_sub",
      "name": "スイーツボーカル",
      "description": "自身の1個毎に、攻撃した時、攻撃力の10.6%分の追加ダメージ（最大2個まで）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.056,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0595,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.062,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0732,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0758,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0784,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0896,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0922,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0956,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.1068,
          "hitCount": 1
        }
      ]
    }
  }
};
