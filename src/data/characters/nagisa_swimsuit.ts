import { Character } from '../../types';

export const nagisaSwimsuit: Character = {
  "id": "nagisa_swimsuit",
  "name": "ナギサ（水着）",
  "rarity": 3,
  "attackType": "sonic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2437,
    "defense": 589,
    "hp": 22023,
    "criticalValue": 264,
    "criticalDamage": 200,
    "stability": 1081,
    "accuracy": 792,
    "evasion": 1037,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "A",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "nagisa_swimsuit_ex",
      "name": "Teatime in Wartime",
      "description": "味方1人に対して、コストオーバー状態を付与（26秒間）/ 会心ダメージ率を78.6%増加（26秒間）/ （コストオーバー：生徒が編成可能な最大数まで編成され、誰も退却していない場合、保有コストを最大5コストまで超過して消費可能、超過した分はマイナスのコストとして差し引かれます）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 54.25,
              "duration": 26,
              "target": "ally"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 58.32,
              "duration": 26,
              "target": "ally"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 66.46,
              "duration": 26,
              "target": "ally"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 70.52,
              "duration": 26,
              "target": "ally"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 78.66,
              "duration": 26,
              "target": "ally"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "nagisa_swimsuit_normal",
      "name": "Crush, Tear, Curl",
      "description": "35秒毎に、敵1人の会心ダメージ抵抗率を38.2%減少（27秒間）/ 攻撃力の376%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.981,
          "hitCount": 20
        },
        {
          "level": 2,
          "damageMultiplier": 2.0797,
          "hitCount": 20
        },
        {
          "level": 3,
          "damageMultiplier": 2.1784,
          "hitCount": 20
        },
        {
          "level": 4,
          "damageMultiplier": 2.5746,
          "hitCount": 20
        },
        {
          "level": 5,
          "damageMultiplier": 2.674,
          "hitCount": 20
        },
        {
          "level": 6,
          "damageMultiplier": 2.7727,
          "hitCount": 20
        },
        {
          "level": 7,
          "damageMultiplier": 3.1689,
          "hitCount": 20
        },
        {
          "level": 8,
          "damageMultiplier": 3.2676,
          "hitCount": 20
        },
        {
          "level": 9,
          "damageMultiplier": 3.367,
          "hitCount": 20
        },
        {
          "level": 10,
          "damageMultiplier": 3.7632,
          "hitCount": 20
        }
      ]
    },
    "passive": {
      "id": "nagisa_swimsuit_passive",
      "name": "Work & Seaside Balance",
      "description": "会心ダメージ率を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
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
              "type": "critDamagePercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "nagisa_swimsuit_sub",
      "name": "Lazy Ladies",
      "description": "味方の会心ダメージ率を17.3%増加",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 9.12,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 9.57,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 10.03,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 11.86,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 12.31,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 12.77,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 14.59,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.04,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 15.5,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "critDamagePercent",
              "value": 17.32,
              "duration": 999,
              "target": "allAllies"
            }
          ]
        }
      ]
    }
  }
};
