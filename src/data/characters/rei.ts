import { Character } from '../../types';

export const rei: Character = {
  "id": "rei",
  "name": "レイ",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 6258,
    "defense": 118,
    "hp": 16950,
    "criticalValue": 203,
    "criticalDamage": 200,
    "stability": 984,
    "accuracy": 761,
    "evasion": 196,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "D",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "rei_ex",
      "name": "ミレニアムの4番バッター！",
      "description": "円形範囲内の敵に対して、攻撃力の401%分のダメージ",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.1116,
          "hitCount": 18
        },
        {
          "level": 2,
          "damageMultiplier": 2.4282,
          "hitCount": 18
        },
        {
          "level": 3,
          "damageMultiplier": 3.0615,
          "hitCount": 18
        },
        {
          "level": 4,
          "damageMultiplier": 3.3785,
          "hitCount": 18
        },
        {
          "level": 5,
          "damageMultiplier": 4.0118,
          "hitCount": 18
        }
      ]
    },
    "normal": {
      "id": "rei_normal",
      "name": "ファインプレー",
      "description": "敵を4人倒した時、攻撃速度を57.3%増加（20秒間）/ 「アウト」を1回獲得（クールタイム10秒）",
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
      "id": "rei_passive",
      "name": "明日の強打者",
      "description": "会心値を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
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
              "type": "critRateFlat",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "rei_sub",
      "name": "スリーアウトチェンジ",
      "description": "振動特効を65.6%加算/ 「アウト」を3回獲得時、自身のスキルコストを3減少（EXスキルの使用1回分） （「アウト」は初期化されます）",
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
