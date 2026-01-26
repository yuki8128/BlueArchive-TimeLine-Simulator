import { Character } from '../../types';

export const ichikaSwimsuit: Character = {
  "id": "ichika_swimsuit",
  "name": "イチカ（水着）",
  "rarity": 1,
  "attackType": "sonic",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 2361,
    "defense": 609,
    "hp": 22782,
    "criticalValue": 256,
    "criticalDamage": 200,
    "stability": 1569,
    "accuracy": 665,
    "evasion": 780,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "B",
    "indoor": "C"
  },
  "skills": {
    "ex": {
      "id": "ichika_swimsuit_ex",
      "name": "隠されし爪",
      "description": "敵1人の会心ダメージ抵抗率を35.3%減少（30秒間）/ さらに攻撃力の242%分のダメージ/ 指定した敵に対して集中砲火状態（30秒間）",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.2782,
          "hitCount": 20
        },
        {
          "level": 2,
          "damageMultiplier": 1.4693,
          "hitCount": 20
        },
        {
          "level": 3,
          "damageMultiplier": 1.8529,
          "hitCount": 20
        },
        {
          "level": 4,
          "damageMultiplier": 2.0447,
          "hitCount": 20
        },
        {
          "level": 5,
          "damageMultiplier": 2.4276,
          "hitCount": 20
        }
      ]
    },
    "normal": {
      "id": "ichika_swimsuit_normal",
      "name": "支援射撃",
      "description": "35秒毎に、敵1人に対して会心抵抗値を15.2%減少、会心ダメージ抵抗率を20.5%減少（20秒間）/ さらに攻撃力の103%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.5474,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.5747,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.602,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.7112,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.7392,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.7665,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.8757,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.903,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.9303,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 1.0395,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "ichika_swimsuit_passive",
      "name": "模範的な射撃の姿勢",
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
      "id": "ichika_swimsuit_sub",
      "name": "正義実現委員会の仲裁者",
      "description": "味方の攻撃速度を17.3%増加",
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
