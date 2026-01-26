import { Character } from '../../types';

export const aruNewyear: Character = {
  "id": "aru_newyear",
  "name": "アル（正月）",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3160,
    "defense": 118,
    "hp": 19300,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1976,
    "accuracy": 909,
    "evasion": 197,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "B",
    "indoor": "S"
  },
  "skills": {
    "ex": {
      "id": "aru_newyear_ex",
      "name": "ハードボイルド・羽根つきショット",
      "description": "保有していた「悪行」1個につき、スキルコストを0.7獲得（「悪行」の数は初期化されます） 敵1人に対して、攻撃力の340%分のダメージ。打った羽根を中心として周囲にまだ攻撃が当たっていない敵がいる場合、羽根が飛んで再度攻撃力の340%分のダメージを与えます（最大11回まで）",
      "type": "ex",
      "cost": 6,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.7936,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.0629,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.6009,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.8702,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 3.4082,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "aru_newyear_normal",
      "name": "ノワール・羽根つきシュート",
      "description": "30秒毎に、円形範囲内の敵に対して攻撃力の321%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 1.6938,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 1.7789,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 1.8634,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 2.2019,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 2.287,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 2.3714,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 2.7099,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 2.795,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 2.8795,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 3.218,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "aru_newyear_passive",
      "name": "ゴージャスな社長の気品",
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
      "id": "aru_newyear_sub",
      "name": "パーフェクトな社長の流儀",
      "description": "味方が敵を6体倒す毎に、自身に対して「悪行」を1個獲得（「悪行」は最大6個分まで保有が可能で、効果が重複）。悪行1個につき、防御力を5.3%減少",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -26.88,
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
              "value": -25.27,
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
              "value": -23.66,
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
              "value": -16.13,
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
              "value": -14.79,
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
              "value": -13.44,
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
              "value": -9.41,
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
              "value": -8.34,
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
              "value": -7.26,
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
              "value": -5.38,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    }
  }
};
