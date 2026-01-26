import { Character } from '../../types';

export const kanoe: Character = {
  "id": "kanoe",
  "name": "カノエ",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 5689,
    "defense": 1026,
    "hp": 47630,
    "criticalValue": 210,
    "criticalDamage": 200,
    "stability": 1900,
    "accuracy": 630,
    "evasion": 228,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "kanoe_ex",
      "name": "おいしいよぉ……",
      "description": "治癒力の96%分の持続回復を付与（20秒間） さらに弱体状態を1つ解除",
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
      "id": "kanoe_normal",
      "name": "想いを込めた……",
      "description": "30秒毎に、円形範囲内の敵に対して会心抵抗値を21.1%減少（20秒間）/ 攻撃力の117%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.6198,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.651,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.6818,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.8059,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.8368,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.8679,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.9917,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 1.0229,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 1.0537,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 1.1778,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "kanoe_passive",
      "name": "おともだち",
      "description": "HPを26.6%増加",
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
      "id": "kanoe_sub",
      "name": "前世の加護",
      "description": "コスト回復力を342増加/ 同じ部隊に編成されている防御タイプが重装甲のストライカーの味方1人毎に、コスト回復力が追加で85増加（自身は除外し、最大3人分まで）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 180,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 189,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 198,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 234,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 243,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 252,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 288,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 297,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 306,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 342,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
