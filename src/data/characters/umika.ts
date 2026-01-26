import { Character } from '../../types';

export const umika: Character = {
  "id": "umika",
  "name": "ウミカ",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2715,
    "defense": 119,
    "hp": 19460,
    "criticalValue": 250,
    "criticalDamage": 200,
    "stability": 1396,
    "accuracy": 701,
    "evasion": 798,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "umika_ex",
      "name": "お祭り開始です！",
      "description": "花火発射台を召喚（50秒間）（最大5個まで）/ 花火発射台はウミカの最大HPの42.5%分の値が追加されたHPを持ちます。",
      "type": "ex",
      "cost": 3,
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
      "id": "umika_normal",
      "name": "た～まや～！です！",
      "description": "通常攻撃10回毎に、攻撃力を22.6%増加（30秒間）/ さらに味方の花火発射台全体に攻撃力を122%増加（7秒間）。発射命令を送信",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.93,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 64.38,
              "duration": 7,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 12.53,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 67.6,
              "duration": 7,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 13.12,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 70.82,
              "duration": 7,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 15.51,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 83.7,
              "duration": 7,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.1,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 86.92,
              "duration": 7,
              "target": "ally"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.7,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 90.14,
              "duration": 7,
              "target": "ally"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.08,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 103.01,
              "duration": 7,
              "target": "ally"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 19.68,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 106.23,
              "duration": 7,
              "target": "ally"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.28,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 109.45,
              "duration": 7,
              "target": "ally"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.66,
              "duration": 30,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 122.32,
              "duration": 7,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "umika_passive",
      "name": "現地の熱気",
      "description": "HPを26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
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
              "type": "hpPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "umika_sub",
      "name": "お祭りのときめき",
      "description": "通常攻撃55回毎に、攻撃力を61.3%増加（40秒間）/ さらに自身のスキルコストを3減少（EXスキルの使用1回分）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.26,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.88,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 35.49,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 41.94,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 43.55,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 45.17,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 51.62,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 53.23,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 54.84,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 61.3,
              "duration": 40,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
