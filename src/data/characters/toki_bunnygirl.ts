import { Character } from '../../types';

export const tokiBunnygirl: Character = {
  "id": "toki_bunnygirl",
  "name": "トキ（バニーガール）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2682,
    "defense": 118,
    "hp": 22250,
    "criticalValue": 252,
    "criticalDamage": 200,
    "stability": 1384,
    "accuracy": 707,
    "evasion": 791,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "toki_bunnygirl_ex",
      "name": "特殊武装：アームギア",
      "description": "敵1人に対して、攻撃力の1045%分のダメージ",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 5.5037,
          "hitCount": 24
        },
        {
          "level": 2,
          "damageMultiplier": 6.3299,
          "hitCount": 24
        },
        {
          "level": 3,
          "damageMultiplier": 7.9807,
          "hitCount": 24
        },
        {
          "level": 4,
          "damageMultiplier": 8.8061,
          "hitCount": 24
        },
        {
          "level": 5,
          "damageMultiplier": 10.4576,
          "hitCount": 24
        }
      ]
    },
    "normal": {
      "id": "toki_bunnygirl_normal",
      "name": "エージェントの秘密道具",
      "description": "40秒毎に、敵1人に対して、攻撃力の591%分のダメージ 会心ダメージ抵抗率を25.9%減少（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.1135,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.2693,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 3.4251,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 4.0477,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 4.2035,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 4.3593,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 4.9819,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 5.1377,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 5.2928,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 5.9153,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "toki_bunnygirl_passive",
      "name": "熟練の技量",
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
      "id": "toki_bunnygirl_sub",
      "name": "武装の取り扱い",
      "description": "EXスキルの発動と同時に、爆発特効を35.4%加算（20秒間）",
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
