import { Character } from '../../types';

export const takane: Character = {
  "id": "takane",
  "name": "タカネ",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1961,
    "defense": 136,
    "hp": 26320,
    "criticalValue": 218,
    "criticalDamage": 200,
    "stability": 908,
    "accuracy": 109,
    "evasion": 699,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "takane_ex",
      "name": "評論家の一筆",
      "description": "自身を除く味方1人に対して、治癒力の310%分の回復/ 自身に治癒力の124%分の回復/ 「穏やかな評」を付与(30秒間)",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.6358
        },
        {
          "level": 2,
          "healMultiplier": 1.8813
        },
        {
          "level": 3,
          "healMultiplier": 2.372
        },
        {
          "level": 4,
          "healMultiplier": 2.6173
        },
        {
          "level": 5,
          "healMultiplier": 3.108
        }
      ]
    },
    "normal": {
      "id": "takane_normal",
      "name": "少女の身だしなみ",
      "description": "自身を除くHPが50%以下の味方に対して、治癒力の68.1%分の回復（クールタイム25秒）/ （対象の現在のHPに比例して回復量が1～3倍に変更）（対象のHPが少ないほど回復量が大きくなります）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.3588
        },
        {
          "level": 2,
          "healMultiplier": 0.3765
        },
        {
          "level": 3,
          "healMultiplier": 0.3945
        },
        {
          "level": 4,
          "healMultiplier": 0.4663
        },
        {
          "level": 5,
          "healMultiplier": 0.4843
        },
        {
          "level": 6,
          "healMultiplier": 0.502
        },
        {
          "level": 7,
          "healMultiplier": 0.5738
        },
        {
          "level": 8,
          "healMultiplier": 0.5918
        },
        {
          "level": 9,
          "healMultiplier": 0.6098
        },
        {
          "level": 10,
          "healMultiplier": 0.6813
        }
      ]
    },
    "passive": {
      "id": "takane_passive",
      "name": "100万本の薔薇",
      "description": "治癒力を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "takane_sub",
      "name": "舞台上の銃",
      "description": "「穏やかな評」を保有した状態での攻撃時、攻撃力の40.2%分の追加ダメージ/ 30%の確率で会心抵抗値を12.9%減少（13秒間）（クールタイム5秒）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.2117,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.2228,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.233,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.2757,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.286,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.297,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.3389,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.3499,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.3602,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.4028,
          "hitCount": 1
        }
      ]
    }
  }
};
