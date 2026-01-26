import { Character } from '../../types';

export const eimi: Character = {
  "id": "eimi",
  "name": "エイミ",
  "nameEn": "Eimi",
  "rarity": 3,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1133,
    "defense": 1103,
    "hp": 51240,
    "criticalValue": 195,
    "criticalDamage": 200,
    "stability": 2044,
    "accuracy": 586,
    "evasion": 234,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "S",
    "outdoor": "B",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "eimi_ex",
      "name": "不屈の意志",
      "description": "治癒力の16.4%＋失ったHPの3.4%分の持続回復を付与（20秒間）",
      "type": "ex",
      "cost": 4,
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
        }
      ]
    },
    "normal": {
      "id": "eimi_normal",
      "name": "執念の猛撃",
      "description": "15秒毎に、扇形範囲内の敵に対して攻撃力の564%分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 2.9741,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.1232,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 3.2713,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 3.8657,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 4.0148,
          "hitCount": 1
        },
        {
          "level": 6,
          "damageMultiplier": 4.1639,
          "hitCount": 1
        },
        {
          "level": 7,
          "damageMultiplier": 4.7583,
          "hitCount": 1
        },
        {
          "level": 8,
          "damageMultiplier": 4.9064,
          "hitCount": 1
        },
        {
          "level": 9,
          "damageMultiplier": 5.0555,
          "hitCount": 1
        },
        {
          "level": 10,
          "damageMultiplier": 5.6499,
          "hitCount": 1
        }
      ]
    },
    "passive": {
      "id": "eimi_passive",
      "name": "スペシャリストの休憩",
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
      "id": "eimi_sub",
      "name": "強靱な精神力",
      "description": "HPが50%以下の時、CC抵抗力を38.3%増加",
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
