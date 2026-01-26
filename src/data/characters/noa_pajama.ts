import { Character } from '../../types';

export const noaPajama: Character = {
  "id": "noa_pajama",
  "name": "ノア（パジャマ）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 1588,
    "defense": 114,
    "hp": 24880,
    "criticalValue": 261,
    "criticalDamage": 200,
    "stability": 952,
    "accuracy": 104,
    "evasion": 1050,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "noa_pajama_ex",
      "name": "消灯後はお静かに",
      "description": "敵1人に対して、攻撃力の1442%分のダメージ/ さらに弱点把握状態を付与（20秒間） 弱点把握状態の敵への攻撃時に、ノア（パジャマ）の攻撃力の33.4%分の追加ダメージ （このダメージにおいては、会心が発動しません） （最大240発分まで適用されます）",
      "type": "ex",
      "cost": 5,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 7.5913,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 8.7299,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 11.0071,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 12.1457,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 14.4228,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "noa_pajama_normal",
      "name": "お気に入りの枕",
      "description": "「消灯後はお静かに」を2回使用時、コスト回復力を803増加（30秒間）/ 「消灯後はお静かに」を「しっ、消灯します」に変更（EXスキルの使用1回分）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 423,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 444,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 465,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 550,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 571,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 592,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 676,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 697,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 719,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "costRecoveryFlat",
              "value": 803,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "noa_pajama_passive",
      "name": "冷徹なる書記",
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
      "id": "noa_pajama_sub",
      "name": "書記の勘",
      "description": "通常攻撃10回毎に、貫通特効を88.9%加算（10秒間）",
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
