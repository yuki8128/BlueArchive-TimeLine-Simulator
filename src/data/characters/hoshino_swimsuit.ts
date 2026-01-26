import { Character } from '../../types';

export const hoshinoSwimsuit: Character = {
  "id": "hoshino_swimsuit",
  "name": "ホシノ（水着）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1999,
    "defense": 738,
    "hp": 31610,
    "criticalValue": 271,
    "criticalDamage": 200,
    "stability": 1824,
    "accuracy": 717,
    "evasion": 164,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "A",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "hoshino_swimsuit_ex",
      "name": "水上支援",
      "description": "自身を中心とした円形範囲内の味方の攻撃力を38.5%増加、爆発特効を99%加算（50秒間）（範囲内にいる間だけ効果を維持）",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.57,
              "duration": 50,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 28.56,
              "duration": 50,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.54,
              "duration": 50,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 34.54,
              "duration": 50,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 38.52,
              "duration": 50,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "hoshino_swimsuit_normal",
      "name": "水上襲撃",
      "description": "40秒毎に、敵1人に対して攻撃力の454%分のダメージ/ さらに自身に治癒力の97.6%分の回復",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.8379,
          "hitCount": 1,
          "healMultiplier": 0.7508
        },
        {
          "level": 2,
          "damageMultiplier": 2.9796,
          "hitCount": 1,
          "healMultiplier": 0.7508
        },
        {
          "level": 3,
          "damageMultiplier": 3.1223,
          "hitCount": 1,
          "healMultiplier": 0.7508
        },
        {
          "level": 4,
          "damageMultiplier": 3.4058,
          "hitCount": 1,
          "healMultiplier": 0.826
        },
        {
          "level": 5,
          "damageMultiplier": 3.5476,
          "hitCount": 1,
          "healMultiplier": 0.826
        },
        {
          "level": 6,
          "damageMultiplier": 3.6893,
          "hitCount": 1,
          "healMultiplier": 0.826
        },
        {
          "level": 7,
          "damageMultiplier": 3.9728,
          "hitCount": 1,
          "healMultiplier": 0.901
        },
        {
          "level": 8,
          "damageMultiplier": 4.1146,
          "hitCount": 1,
          "healMultiplier": 0.901
        },
        {
          "level": 9,
          "damageMultiplier": 4.2573,
          "hitCount": 1,
          "healMultiplier": 0.901
        },
        {
          "level": 10,
          "damageMultiplier": 4.5408,
          "hitCount": 1,
          "healMultiplier": 0.976
        }
      ]
    },
    "passive": {
      "id": "hoshino_swimsuit_passive",
      "name": "猛暑耐久",
      "description": "防御力を16.2%、攻撃力を16.2%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 11.2,
              "duration": 999,
              "target": "self"
            },
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
              "type": "defensePercent",
              "value": 11.48,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 11.48,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 11.76,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 11.76,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 12.88,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 12.88,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 13.16,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 13.16,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 13.44,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 13.44,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 14.56,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 14.56,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 14.84,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 14.84,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 15.12,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 15.12,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 16.24,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "attackPercent",
              "value": 16.24,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "hoshino_swimsuit_sub",
      "name": "浜辺の楽しさ",
      "description": "EXスキルが持続される間、コスト回復力を684増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 360,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 378,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 396,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 468,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 486,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 504,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 576,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 594,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 612,
              "duration": 999,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 684,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
