import { Character } from '../../types';

export const hoshino: Character = {
  "id": "hoshino",
  "name": "ホシノ",
  "nameEn": "Hoshino",
  "rarity": 3,
  "attackType": "piercing",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1749,
    "defense": 1052,
    "hp": 48880,
    "criticalValue": 205,
    "criticalDamage": 200,
    "stability": 1948,
    "accuracy": 615,
    "evasion": 246,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "hoshino_ex",
      "name": "戦術的鎮圧",
      "description": "扇形範囲内の敵に対して、攻撃力の697%分のダメージを与え1ヒットごとに敵をノックバック/ さらに気絶状態を付与（1.4秒間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 4.3599,
          "hitCount": 5
        },
        {
          "level": 2,
          "damageMultiplier": 5.0138,
          "hitCount": 5
        },
        {
          "level": 3,
          "damageMultiplier": 5.6677,
          "hitCount": 5
        },
        {
          "level": 4,
          "damageMultiplier": 6.3215,
          "hitCount": 5
        },
        {
          "level": 5,
          "damageMultiplier": 6.9754,
          "hitCount": 5
        }
      ]
    },
    "normal": {
      "id": "hoshino_normal",
      "name": "応急手当",
      "description": "HPが30%以下の時、治癒力の191%分の持続回復を付与（20秒間） （戦闘中に1回のみ）",
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
      "id": "hoshino_passive",
      "name": "対策委員会の委員長",
      "description": "防御力を26.6%増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
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
              "type": "defensePercent",
              "value": 26.6,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "hoshino_sub",
      "name": "鎮圧のベテラン",
      "description": "EXスキルの使用中、治癒力の205%分のシールド効果を発動",
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
