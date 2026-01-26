import { Character } from '../../types';

export const pinaGuide: Character = {
  "id": "pina_guide",
  "name": "フィーナ（ガイド）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "special",
  "position": "back",
  "baseStats": {
    "attack": 3180,
    "defense": 391,
    "hp": 14617,
    "criticalValue": 255,
    "criticalDamage": 200,
    "stability": 1573,
    "accuracy": 498,
    "evasion": 195,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "pina_guide_ex",
      "name": "お仕事モードデス！",
      "description": "敵1人に対して、攻撃力の分のダメージ/ 保有時、ダメージを0.15倍加算/ （対象の現在のHPに比例してダメージが1～1.5倍に変更）（対象のHPが少ないほどダメージが大きくなります）",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 12.0008,
          "hitCount": 7
        },
        {
          "level": 2,
          "damageMultiplier": 13.8005,
          "hitCount": 7
        },
        {
          "level": 3,
          "damageMultiplier": 17.4006,
          "hitCount": 7
        },
        {
          "level": 4,
          "damageMultiplier": 19.201,
          "hitCount": 7
        },
        {
          "level": 5,
          "damageMultiplier": 22.8011,
          "hitCount": 7
        }
      ]
    },
    "normal": {
      "id": "pina_guide_normal",
      "name": "引率シマス！",
      "description": "自身を除く味方がEXスキルを7回使用する度に、を付与（40秒間）/ HPが最も低い味方1人に対して、を増加（40秒間）",
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
      "id": "pina_guide_passive",
      "name": "エー、アチラをご覧クダサイ！",
      "description": "を増加",
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
      "id": "pina_guide_sub",
      "name": "発破の準備完了デス！",
      "description": "味方のを加算",
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
