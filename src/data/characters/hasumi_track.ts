import { Character } from '../../types';

export const hasumiTrack: Character = {
  "id": "hasumi_track",
  "name": "ハスミ（体操服）",
  "rarity": 1,
  "attackType": "mystic",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 3056,
    "defense": 118,
    "hp": 16970,
    "criticalValue": 202,
    "criticalDamage": 200,
    "stability": 1972,
    "accuracy": 912,
    "evasion": 197,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "C",
    "indoor": "A"
  },
  "skills": {
    "ex": {
      "id": "hasumi_track_ex",
      "name": "鋼の意志のピアッシング弾",
      "description": "敵1人に対して攻撃力の859%分のダメージ/ 追加で最大2コストを消耗して、1コストあたりのダメージが30%増加します。/ （コスト増減スキルの効果は基本コストを基準として計算します）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.5252,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 5.2038,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 6.561,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 7.2396,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 8.5974,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "hasumi_track_normal",
      "name": "スポーツ射撃",
      "description": "25秒毎に、敵1人に対して攻撃力の470%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.4745,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 2.5984,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 2.7216,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 3.2165,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 3.3404,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 3.4643,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 3.9585,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 4.0824,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 4.2063,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 4.7012,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "hasumi_track_passive",
      "name": "出場への心構え",
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
      "id": "hasumi_track_sub",
      "name": "大会の高揚感",
      "description": "攻撃時、大型の敵に対して攻撃力の41.5%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.2184,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.2296,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.2408,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.2842,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.2954,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.3059,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.35,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.3605,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.3717,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.4151,
          "hitCount": 1
        }
      ]
    }
  }
};
