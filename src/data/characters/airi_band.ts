import { Character } from '../../types';

export const airiBand: Character = {
  "id": "airi_band",
  "name": "アイリ（バンド）",
  "rarity": 1,
  "attackType": "explosive",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 2861,
    "defense": 132,
    "hp": 34090,
    "criticalValue": 254,
    "criticalDamage": 200,
    "stability": 1376,
    "accuracy": 111,
    "evasion": 1062,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "A",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "airi_band_ex",
      "name": "幸せのメロディ",
      "description": "を加算、を付与（30秒間）",
      "type": "ex",
      "cost": 2,
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
      "id": "airi_band_normal",
      "name": "チョコミントな音の階段",
      "description": "通常攻撃12回毎に、敵1人に対して攻撃力の分のダメージ",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 7.1012,
          "hitCount": 12
        },
        {
          "level": 2,
          "damageMultiplier": 7.4566,
          "hitCount": 12
        },
        {
          "level": 3,
          "damageMultiplier": 7.8114,
          "hitCount": 12
        },
        {
          "level": 4,
          "damageMultiplier": 9.2317,
          "hitCount": 12
        },
        {
          "level": 5,
          "damageMultiplier": 9.5865,
          "hitCount": 12
        },
        {
          "level": 6,
          "damageMultiplier": 9.9419,
          "hitCount": 12
        },
        {
          "level": 7,
          "damageMultiplier": 11.3616,
          "hitCount": 12
        },
        {
          "level": 8,
          "damageMultiplier": 11.717,
          "hitCount": 12
        },
        {
          "level": 9,
          "damageMultiplier": 12.0718,
          "hitCount": 12
        },
        {
          "level": 10,
          "damageMultiplier": 13.4921,
          "hitCount": 12
        }
      ]
    },
    "passive": {
      "id": "airi_band_passive",
      "name": "もっと大きく、もっと遠く",
      "description": "を100、を増加",
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
      "id": "airi_band_sub",
      "name": "染み込む感情",
      "description": "を保有した状態での攻撃時、10%の確率で率を減少（16秒間）（クールタイム5秒）",
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
