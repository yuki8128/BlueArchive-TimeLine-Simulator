import { Character } from '../../types';

export const izumi: Character = {
  "id": "izumi",
  "name": "イズミ",
  "nameEn": "Izumi",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 1950,
    "defense": 489,
    "hp": 19900,
    "criticalValue": 244,
    "criticalDamage": 200,
    "stability": 1428,
    "accuracy": 97,
    "evasion": 195,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  "skills": {
    "ex": {
      "id": "izumi_ex",
      "name": "チーズチョコレートバーガー！",
      "description": "治癒力の254%分の回復/ 攻撃速度を38.4%増加（21秒間）",
      "type": "ex",
      "cost": 3,
      "levels": [
        {
          "level": 1,
          "healMultiplier": 1.456
        },
        {
          "level": 2,
          "healMultiplier": 1.6745
        },
        {
          "level": 3,
          "healMultiplier": 1.893
        },
        {
          "level": 4,
          "healMultiplier": 2.1113
        },
        {
          "level": 5,
          "healMultiplier": 2.548
        }
      ]
    },
    "normal": {
      "id": "izumi_normal",
      "name": "よーーい、BANG！",
      "description": "通常攻撃時、20%の確率で敵1人に攻撃力の523%分のダメージ（クールタイム10秒）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.7536,
          "hitCount": 14
        },
        {
          "level": 2,
          "damageMultiplier": 2.8912,
          "hitCount": 14
        },
        {
          "level": 3,
          "damageMultiplier": 3.0289,
          "hitCount": 14
        },
        {
          "level": 4,
          "damageMultiplier": 3.5796,
          "hitCount": 14
        },
        {
          "level": 5,
          "damageMultiplier": 3.7173,
          "hitCount": 14
        },
        {
          "level": 6,
          "damageMultiplier": 3.855,
          "hitCount": 14
        },
        {
          "level": 7,
          "damageMultiplier": 4.4057,
          "hitCount": 14
        },
        {
          "level": 8,
          "damageMultiplier": 4.5434,
          "hitCount": 14
        },
        {
          "level": 9,
          "damageMultiplier": 4.681,
          "hitCount": 14
        },
        {
          "level": 10,
          "damageMultiplier": 5.2317,
          "hitCount": 14
        }
      ]
    },
    "passive": {
      "id": "izumi_passive",
      "name": "次は何を食べよっか？",
      "description": "被回復率を26.6%増加",
      "type": "passive",
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
    "sub": {
      "id": "izumi_sub",
      "name": "美味しいのが一番だよね～",
      "description": "攻撃時、自身の現在のHPに比例して攻撃力の0.7%～4.1%分の追加ダメージ",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 0.022,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 0.023,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 0.0241,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 0.0285,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 0.0296,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 0.0307,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 0.0351,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 0.0362,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 0.0373,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 0.0417,
          "hitCount": 1
        }
      ]
    }
  }
};
