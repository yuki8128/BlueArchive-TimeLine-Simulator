import { Character } from '../../types';

export const shun: Character = {
  "id": "shun",
  "name": "シュン",
  "nameEn": "Shun",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3224,
    "defense": 118,
    "hp": 19310,
    "criticalValue": 252,
    "criticalDamage": 200,
    "stability": 1980,
    "accuracy": 908,
    "evasion": 201,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "shun_ex",
      "name": "悪い子はどこですか？",
      "description": "通常攻撃を攻撃力が最も高い敵1人を優先対象とし153%ダメージを与えるものに強化し、通常攻撃の通常攻撃の射程を24.4%増加、会心値を50%増加、攻撃速度を18.8%減少（30秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 26.35,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 30.3,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 38.2,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 42.16,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critRateFlat",
              "value": 50.06,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "shun_normal",
      "name": "みなさん、集中してください！",
      "description": "戦闘開始時、スキルコストを3.8獲得（戦闘中に1回のみ）",
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
      "id": "shun_passive",
      "name": "教官としての品格",
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
      "id": "shun_sub",
      "name": "梅花園の教育",
      "description": "攻撃時、中型の敵に対して攻撃力の96.4%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.5078,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.5332,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.5586,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.6602,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.6856,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.7109,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.8125,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.8379,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.8633,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.9648,
          "hitCount": 1
        }
      ]
    }
  }
};
