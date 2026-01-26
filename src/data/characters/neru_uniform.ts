import { Character } from '../../types';

export const neruUniform: Character = {
  "id": "neru_uniform",
  "name": "ネル（制服）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 3161,
    "defense": 96,
    "hp": 25510,
    "criticalValue": 215,
    "criticalDamage": 200,
    "stability": 1288,
    "accuracy": 107,
    "evasion": 993,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "A",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "neru_uniform_ex",
      "name": "かかって来いよ",
      "description": "自身と敵1人をに変更（70秒間） の敵に攻撃時、自身の与えるダメージを0.2倍加算/ EXスキルをすぐに1回ドロー/ 中は「怪我しても知らねえからな」にスキルが変更されます。",
      "type": "ex",
      "cost": 1,
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
      "id": "neru_uniform_normal",
      "name": "ちょっと遊んでみるか",
      "description": "35秒毎に、貫通特効を58.8%加算（25秒間）",
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
      "id": "neru_uniform_passive",
      "name": "もう終わりか？",
      "description": "通常攻撃の射程を100、攻撃力を21.2%増加",
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
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
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
              "type": "attackPercent",
              "value": 21.28,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "neru_uniform_sub",
      "name": "狙いは正確ってな",
      "description": "自身の与えるダメージ量を24.2%増加/ を1個獲得する度に、スキル「怪我しても知らねえからな」の与えるダメージを0.35倍加算",
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
