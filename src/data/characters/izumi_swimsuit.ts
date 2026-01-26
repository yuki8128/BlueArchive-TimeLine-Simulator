import { Character } from '../../types';

export const izumiSwimsuit: Character = {
  "id": "izumi_swimsuit",
  "name": "イズミ（水着）",
  "rarity": 1,
  "attackType": "explosive",
  "role": "striker",
  "position": "back",
  "baseStats": {
    "attack": 2327,
    "defense": 460,
    "hp": 18730,
    "criticalValue": 207,
    "criticalDamage": 200,
    "stability": 1344,
    "accuracy": 103,
    "evasion": 192,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "B",
    "outdoor": "A",
    "indoor": "C"
  },
  "skills": {
    "ex": {
      "id": "izumi_swimsuit_ex",
      "name": "つめた～いココナッツジュース！",
      "description": "敵1人に対して、ココナッツを投擲して攻撃力の分のダメージ。投擲されたココナッツを中心として周囲にまだ攻撃が当たっていない敵がいる場合、ココナッツがその方向へ跳ねて再度ダメージを与えます（2回目以降ダメージ量は初撃の値の10％ずつ減少）（最大5回まで） さらにを付与（間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "damageMultiplier": 3.3269,
          "hitCount": 1
        },
        {
          "level": 2,
          "damageMultiplier": 3.8257,
          "hitCount": 1
        },
        {
          "level": 3,
          "damageMultiplier": 4.3244,
          "hitCount": 1
        },
        {
          "level": 4,
          "damageMultiplier": 4.8238,
          "hitCount": 1
        },
        {
          "level": 5,
          "damageMultiplier": 5.3226,
          "hitCount": 1
        }
      ]
    },
    "normal": {
      "id": "izumi_swimsuit_normal",
      "name": "甘酸っぱくて美味しい！",
      "description": "35秒毎に、を増加（30秒間）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 20.23,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 21.24,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 22.26,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 26.3,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 27.31,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 28.32,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 32.37,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 33.38,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 34.39,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 38.43,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "passive": {
      "id": "izumi_swimsuit_passive",
      "name": "さぁ、ご飯食べたし頑張ろ～！",
      "description": "を増加",
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
      "id": "izumi_swimsuit_sub",
      "name": "美味しいけどキーンってなるね～",
      "description": "攻撃時、10%の確率でを付与（間）（クールタイム20秒）",
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
