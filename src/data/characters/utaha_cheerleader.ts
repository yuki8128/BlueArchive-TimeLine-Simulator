import { Character } from '../../types';

export const utahaCheerleader: Character = {
  "id": "utaha_cheerleader",
  "name": "ウタハ（応援団）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 3473,
    "defense": 133,
    "hp": 34260,
    "criticalValue": 252,
    "criticalDamage": 200,
    "stability": 1384,
    "accuracy": 111,
    "evasion": 1067,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "utaha_cheerleader_ex",
      "name": "雷ちゃんMK-III、強化",
      "description": "ターレットを強化します（90秒間）ターレットは強化状態が維持される間、通常攻撃が攻撃力の146%分のダメージを与えるように変更され、ノーマルスキルの発動条件が変更されます。",
      "type": "ex",
      "cost": 5,
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
      "id": "utaha_cheerleader_normal",
      "name": "情熱砲",
      "description": "30秒毎に、敵1人に対して攻撃力の315%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.6611,
          "hitCount": 4
        },
        {
          "level": 2,
          "damageMultiplier": 1.7446,
          "hitCount": 4
        },
        {
          "level": 3,
          "damageMultiplier": 1.8276,
          "hitCount": 4
        },
        {
          "level": 4,
          "damageMultiplier": 2.1598,
          "hitCount": 4
        },
        {
          "level": 5,
          "damageMultiplier": 2.2427,
          "hitCount": 4
        },
        {
          "level": 6,
          "damageMultiplier": 2.3256,
          "hitCount": 4
        },
        {
          "level": 7,
          "damageMultiplier": 2.6578,
          "hitCount": 4
        },
        {
          "level": 8,
          "damageMultiplier": 2.7407,
          "hitCount": 4
        },
        {
          "level": 9,
          "damageMultiplier": 2.8242,
          "hitCount": 4
        },
        {
          "level": 10,
          "damageMultiplier": 3.1564,
          "hitCount": 4
        }
      ]
    },
    "passive": {
      "id": "utaha_cheerleader_passive",
      "name": "応援団長の情熱",
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
      "id": "utaha_cheerleader_sub",
      "name": "応援団長の闘志",
      "description": "弱体状態の敵への攻撃時に、攻撃力の9.7%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.0512,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.0536,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0565,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0665,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0688,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0712,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0818,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0841,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0865,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.0971,
          "hitCount": 1
        }
      ]
    }
  }
};
