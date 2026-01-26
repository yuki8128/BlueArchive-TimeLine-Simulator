import { Character } from '../../types';

export const eri: Character = {
  "id": "eri",
  "name": "エリ",
  "rarity": 3,
  "attackType": "sonic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3059,
    "defense": 114,
    "hp": 18540,
    "criticalValue": 209,
    "criticalDamage": 200,
    "stability": 1900,
    "accuracy": 944,
    "evasion": 190,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "eri_ex",
      "name": "閃光のアルカナ",
      "description": "敵1人に対して、攻撃力の1368%分のダメージ を2個保有時、この攻撃を強化してダメージを0.5倍加算。その後、自身のは初期化されます。",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 7.2036,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 8.2846,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 10.4459,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 11.5262,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 13.6874,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "eri_normal",
      "name": "魔導書の導き",
      "description": "35秒毎に、敵1人の会心ダメージ抵抗率を28%減少（28秒間）/ 攻撃力の327%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.0464,
          "hitCount": 3
        },
        {
          "level": 2,
          "damageMultiplier": 2.1485,
          "hitCount": 3
        },
        {
          "level": 3,
          "damageMultiplier": 2.2506,
          "hitCount": 3
        },
        {
          "level": 4,
          "damageMultiplier": 2.4555,
          "hitCount": 3
        },
        {
          "level": 5,
          "damageMultiplier": 2.5576,
          "hitCount": 3
        },
        {
          "level": 6,
          "damageMultiplier": 2.6597,
          "hitCount": 3
        },
        {
          "level": 7,
          "damageMultiplier": 2.8646,
          "hitCount": 3
        },
        {
          "level": 8,
          "damageMultiplier": 2.9667,
          "hitCount": 3
        },
        {
          "level": 9,
          "damageMultiplier": 3.0688,
          "hitCount": 3
        },
        {
          "level": 10,
          "damageMultiplier": 3.2737,
          "hitCount": 3
        }
      ]
    },
    "passive": {
      "id": "eri_passive",
      "name": "吉兆",
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
      "id": "eri_sub",
      "name": "巨匠を目指して",
      "description": "振動特効を49.2%加算/ 強化されていないEXスキルで敵を倒した時、を1個獲得（は最大2個まで重複）",
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
