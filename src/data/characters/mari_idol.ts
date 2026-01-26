import { Character } from '../../types';

export const mariIdol: Character = {
  "id": "mari_idol",
  "name": "マリー（アイドル）",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "middle",
  "baseStats": {
    "attack": 2043,
    "defense": 122,
    "hp": 26170,
    "criticalValue": 219,
    "criticalDamage": 200,
    "stability": 904,
    "accuracy": 109,
    "evasion": 596,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "mari_idol_ex",
      "name": "溢れるハート",
      "description": "自身を除き味方1人に対して治癒力の265%分を回復し、自身に治癒力の121%分の回復 HPを超えた超過回復量の100%を追加HPに転換 （追加HPの最大値は回復した対象の最大HP50%まで転換） （追加HPは1秒毎に、超過回復量を含む自身が与えた全体回復量の5%ずつ減少）/ を1個獲得",
      "type": "ex",
      "cost": 2,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.3998
        },
        {
          "level": 2,
          "healMultiplier": 1.6098
        },
        {
          "level": 3,
          "healMultiplier": 2.0298
        },
        {
          "level": 4,
          "healMultiplier": 2.2395
        },
        {
          "level": 5,
          "healMultiplier": 2.6595
        }
      ]
    },
    "normal": {
      "id": "mari_idol_normal",
      "name": "慈愛の投げキッス",
      "description": "30秒毎に、自身を除きHPが最も低い味方1人に対して治癒力の136%分の回復",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 0.7205
        },
        {
          "level": 2,
          "healMultiplier": 0.7565
        },
        {
          "level": 3,
          "healMultiplier": 0.7925
        },
        {
          "level": 4,
          "healMultiplier": 0.9365
        },
        {
          "level": 5,
          "healMultiplier": 0.9725
        },
        {
          "level": 6,
          "healMultiplier": 1.0085
        },
        {
          "level": 7,
          "healMultiplier": 1.1528
        },
        {
          "level": 8,
          "healMultiplier": 1.1888
        },
        {
          "level": 9,
          "healMultiplier": 1.2248
        },
        {
          "level": 10,
          "healMultiplier": 1.3688
        }
      ]
    },
    "passive": {
      "id": "mari_idol_passive",
      "name": "たゆまぬ努力",
      "description": "治癒力を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
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
              "type": "healPowerPercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "mari_idol_sub",
      "name": "今だけは楽しんで",
      "description": "HPを25.5%増加/ を3個獲得時、自身を除く味方のスキルコストを1減少（EXスキルの使用1回分）（は初期化されます）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "hpPercent",
              "value": 13.44,
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
              "value": 14.12,
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
              "value": 14.79,
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
              "value": 17.48,
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
              "value": 18.15,
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
              "value": 18.82,
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
              "value": 21.51,
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
              "value": 22.18,
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
              "value": 22.85,
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
              "value": 25.54,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
