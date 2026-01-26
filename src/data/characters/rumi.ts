import { Character } from '../../types';

export const rumi: Character = {
  "id": "rumi",
  "name": "ルミ",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1346,
    "defense": 141,
    "hp": 32650,
    "criticalValue": 211,
    "criticalDamage": 200,
    "stability": 1316,
    "accuracy": 528,
    "evasion": 1036,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "C",
    "outdoor": "C",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "rumi_ex",
      "name": "天下一味！",
      "description": "自身を除く味方1人に対してチャーハンを渡して回復、対象の付近にまだ回復を受けていない味方がいる場合、チャーハンがその方向に跳ねて回復（最大4回まで） 1番目、4番目の対象：治癒力の分の回復 2番目、3番目の対象：治癒力の分の回復",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.1748
        },
        {
          "level": 2,
          "healMultiplier": 1.351
        },
        {
          "level": 3,
          "healMultiplier": 1.7035
        },
        {
          "level": 4,
          "healMultiplier": 1.8798
        },
        {
          "level": 5,
          "healMultiplier": 2.232
        }
      ]
    },
    "normal": {
      "id": "rumi_normal",
      "name": "クレーマーお断り！",
      "description": "30秒毎に、扇形範囲内の敵に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.268,
          "hitCount": 10
        },
        {
          "level": 2,
          "damageMultiplier": 2.3808,
          "hitCount": 10
        },
        {
          "level": 3,
          "damageMultiplier": 2.4945,
          "hitCount": 10
        },
        {
          "level": 4,
          "damageMultiplier": 2.9476,
          "hitCount": 10
        },
        {
          "level": 5,
          "damageMultiplier": 3.0613,
          "hitCount": 10
        },
        {
          "level": 6,
          "damageMultiplier": 3.175,
          "hitCount": 10
        },
        {
          "level": 7,
          "damageMultiplier": 3.6281,
          "hitCount": 10
        },
        {
          "level": 8,
          "damageMultiplier": 3.7417,
          "hitCount": 10
        },
        {
          "level": 9,
          "damageMultiplier": 3.8546,
          "hitCount": 10
        },
        {
          "level": 10,
          "damageMultiplier": 4.3085,
          "hitCount": 10
        }
      ]
    },
    "passive": {
      "id": "rumi_passive",
      "name": "商会長の矜持",
      "description": "を100、を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
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
              "type": "healPowerPercent",
              "value": 11.76,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 12.32,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 14.56,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 15.12,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 15.68,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 17.92,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 18.48,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 19.04,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 21.28,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "rumi_sub",
      "name": "記憶に残る味",
      "description": "EXスキルで回復した味方に対して、治癒力の分のを付与（60秒間）",
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
