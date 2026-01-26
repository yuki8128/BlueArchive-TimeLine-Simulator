import { Character } from '../../types';

export const hoshinoBattleDealer: Character = {
  "id": "hoshino_battle_dealer",
  "name": "ホシノ（臨戦）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 3258,
    "defense": 179,
    "hp": 16670,
    "criticalValue": 200,
    "criticalDamage": 200,
    "stability": 1992,
    "accuracy": 601,
    "evasion": 179,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "hoshino_battle_dealer_ex",
      "name": "集中突破",
      "description": "敵1人に対して、攻撃力の分のダメージ/ 円形範囲内の敵に対して、攻撃力の分のダメージ",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.7854,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 0.9031,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 1.1392,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 1.2569,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 1.4923,
          "hitCount": 3
        }
      ]
    },
    "normal": {
      "id": "hoshino_battle_dealer_normal",
      "name": "拳銃速射",
      "description": "ファストローディング用の残弾数が0になった時、敵1人に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.1101,
          "hitCount": 8
        },
        {
          "level": 2,
          "damageMultiplier": 2.2158,
          "hitCount": 8
        },
        {
          "level": 3,
          "damageMultiplier": 2.3209,
          "hitCount": 8
        },
        {
          "level": 4,
          "damageMultiplier": 2.7432,
          "hitCount": 8
        },
        {
          "level": 5,
          "damageMultiplier": 2.8482,
          "hitCount": 8
        },
        {
          "level": 6,
          "damageMultiplier": 2.954,
          "hitCount": 8
        },
        {
          "level": 7,
          "damageMultiplier": 3.3756,
          "hitCount": 8
        },
        {
          "level": 8,
          "damageMultiplier": 3.4813,
          "hitCount": 8
        },
        {
          "level": 9,
          "damageMultiplier": 3.5871,
          "hitCount": 8
        },
        {
          "level": 10,
          "damageMultiplier": 4.0087,
          "hitCount": 8
        }
      ]
    },
    "passive": {
      "id": "hoshino_battle_dealer_passive",
      "name": "戦術的視野の拡大",
      "description": "を300、率を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 21.28,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "hoshino_battle_dealer_sub",
      "name": "制圧攻撃",
      "description": "全ての攻撃が敵の防御力を無視/ を増加/ EXスキル、またはノーマルスキルの使用時、すぐにリロードした後、最初の通常攻撃は扇形範囲内の敵に対して攻撃力の分のダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.7901,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 7.4,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 0.83,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 7.77,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 0.8692,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 8.14,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 1.0275,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 9.62,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 1.0667,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 9.99,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "damageMultiplier": 1.1066,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 10.36,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "damageMultiplier": 1.2642,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.83,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "damageMultiplier": 1.3041,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 12.21,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "damageMultiplier": 1.3433,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 12.58,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "damageMultiplier": 1.5016,
          "hitCount": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.05,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
