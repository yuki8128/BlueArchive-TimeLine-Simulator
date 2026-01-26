import { Character } from '../../types';

export const natsuBand: Character = {
  "id": "natsu_band",
  "name": "ナツ（バンド）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1669,
    "defense": 147,
    "hp": 33990,
    "criticalValue": 203,
    "criticalDamage": 200,
    "stability": 1372,
    "accuracy": 101,
    "evasion": 823,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "natsu_band_ex",
      "name": "偉大なる響き",
      "description": "自身を中心とした円形範囲内の味方に対して2秒毎に、治癒力の25.2%分の回復（24秒間）/ さらに自身に「シュガーラッシュ」を2個付与（25秒間）（最大2個まで）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.1328
        },
        {
          "level": 2,
          "healMultiplier": 0.1528
        },
        {
          "level": 3,
          "healMultiplier": 0.1925
        },
        {
          "level": 4,
          "healMultiplier": 0.2125
        },
        {
          "level": 5,
          "healMultiplier": 0.2523
        }
      ]
    },
    "normal": {
      "id": "natsu_band_normal",
      "name": "プランニング＆マネジメント",
      "description": "通常攻撃15回毎に、治癒力を35.3%増加（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 18.58,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 19.51,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 20.44,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 24.15,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 25.08,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 26.01,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 29.73,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 30.65,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 31.58,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "healPowerPercent",
              "value": 35.3,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "natsu_band_passive",
      "name": "スイート・ストローク",
      "description": "通常攻撃の射程を100、攻撃速度を21.2%増加",
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
      "id": "natsu_band_sub",
      "name": "ロックの導き",
      "description": "味方が「シュガーラッシュ」を6個獲得時、「リズムアップ」を1個獲得（最大4個まで）/ 自身の攻撃時、20%の確率で攻撃を受けた対象の攻撃力を減少（20秒間）（クールタイム5秒） 自身の「リズムアップ」の数によって、攻撃力減少量が変更されます 0個：攻撃力を5%減少 1個：攻撃力を7.5%減少 2個：攻撃力を10%減少 3個：攻撃力を12.5%減少 4個：攻撃力を15%減少",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -2.64,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -2.77,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -2.9,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -3.43,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -3.55,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -3.69,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -4.21,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -4.34,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -4.48,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": -5,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    }
  }
};
