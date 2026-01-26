import { Character } from '../../types';

export const aoba: Character = {
  "id": "aoba",
  "name": "アオバ",
  "rarity": 1,
  "attackType": "sonic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 3047,
    "defense": 931,
    "hp": 43260,
    "criticalValue": 227,
    "criticalDamage": 200,
    "stability": 1724,
    "accuracy": 682,
    "evasion": 207,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "C",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "aoba_ex",
      "name": "しゅ、修理に行かなきゃ……！",
      "description": "指定した位置に移動しながらぶつかった敵に攻撃力の分のダメージを与えノックバック/ 移動後、自身のを増加、を増加（22秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.6706,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 14.76,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "damageMultiplier": 0.7712,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 16.98,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "damageMultiplier": 0.9723,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.4,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "damageMultiplier": 1.0728,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 23.62,
              "duration": 22,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "damageMultiplier": 1.2739,
          "hitCount": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 28.05,
              "duration": 22,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "aoba_normal",
      "name": "じゅ、準備完了……",
      "description": "40秒毎に、を増加（32秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 20.49,
              "duration": 32,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 21.51,
              "duration": 32,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 22.54,
              "duration": 32,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 26.63,
              "duration": 32,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 27.65,
              "duration": 32,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 28.68,
              "duration": 32,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 32.77,
              "duration": 32,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 33.8,
              "duration": 32,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 34.82,
              "duration": 32,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 38.92,
              "duration": 32,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "aoba_passive",
      "name": "絶望的な激務",
      "description": "を増加",
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
      "id": "aoba_sub",
      "name": "期待なんて、してません",
      "description": "通常攻撃12回毎に、を増加（20秒間）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 18.15,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 19.06,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 19.97,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 23.59,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 24.5,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 25.41,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 29.04,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 29.94,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 30.85,
              "duration": 20,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 34.48,
              "duration": 20,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
