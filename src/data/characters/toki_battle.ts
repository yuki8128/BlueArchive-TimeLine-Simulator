import { Character } from '../../types';

export const tokiBattle: Character = {
  "id": "toki_battle",
  "name": "トキ（臨戦）",
  "rarity": 1,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2154,
    "defense": 137,
    "hp": 26500,
    "criticalValue": 216,
    "criticalDamage": 200,
    "stability": 912,
    "accuracy": 108,
    "evasion": 704,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "B",
    "indoor": "C"
  },
  "skills": {
    "ex": {
      "id": "toki_battle_ex",
      "name": "スペシャルウェポン：デュアルエネルギーピストル",
      "description": "指定した対象が敵の場合は攻撃力の1071%分のダメージおよび気絶状態を付与（3秒間）、味方の場合は治癒力の218%分の回復および弱体状態を1つ解除/ のチャージ段階によって気絶状態を1.3秒増加、弱体状態の解除個数が1つ増加/ 発射後、のチャージ段階は初期化されます。",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 7.3875,
          "hitCount": 1,
          "healMultiplier": 1.5055
        },
        {
          "level": 2,
          "damageMultiplier": 7.9415,
          "hitCount": 1,
          "healMultiplier": 1.6183
        },
        {
          "level": 3,
          "damageMultiplier": 9.0494,
          "hitCount": 1,
          "healMultiplier": 1.8443
        },
        {
          "level": 4,
          "damageMultiplier": 9.6033,
          "hitCount": 1,
          "healMultiplier": 1.957
        },
        {
          "level": 5,
          "damageMultiplier": 10.7112,
          "hitCount": 1,
          "healMultiplier": 2.183
        }
      ]
    },
    "normal": {
      "id": "toki_battle_normal",
      "name": "パーフェクトメイド、パーフェクトリコン",
      "description": "40秒毎に、攻撃力を47.5%増加（30秒間）/ を1段階チャージ（最大で2段階まで）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 25.05,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.3,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.56,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.57,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.81,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 35.07,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 40.08,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 41.33,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 42.59,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 47.59,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "toki_battle_passive",
      "name": "新たな趣味？",
      "description": "攻撃力を16.2%、治癒力を16.2%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "healPowerPercent",
              "value": 11.2,
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
              "value": 11.48,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "healPowerPercent",
              "value": 11.48,
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
              "value": 11.76,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "healPowerPercent",
              "value": 11.76,
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
              "value": 12.88,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "healPowerPercent",
              "value": 12.88,
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
              "value": 13.16,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "healPowerPercent",
              "value": 13.16,
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
              "value": 13.44,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "healPowerPercent",
              "value": 13.44,
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
              "value": 14.56,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "healPowerPercent",
              "value": 14.56,
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
              "value": 14.84,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "healPowerPercent",
              "value": 14.84,
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
              "value": 15.12,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "healPowerPercent",
              "value": 15.12,
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
              "value": 16.24,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "healPowerPercent",
              "value": 16.24,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "toki_battle_sub",
      "name": "迅速行動、報告は後ほど",
      "description": "防御タイプが重装甲の敵を攻撃時、攻撃力の11.8%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0626,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0652,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0685,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0812,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0838,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0872,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0998,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.1025,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.1058,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.1184,
          "hitCount": 1
        }
      ]
    }
  }
};
