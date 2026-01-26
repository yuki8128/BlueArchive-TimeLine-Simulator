import { Character } from '../../types';

export const tsubaki: Character = {
  "id": "tsubaki",
  "name": "ツバキ",
  "nameEn": "Tsubaki",
  "rarity": 2,
  "attackType": "piercing",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1719,
    "defense": 182,
    "hp": 50940,
    "criticalValue": 196,
    "criticalDamage": 200,
    "stability": 1420,
    "accuracy": 98,
    "evasion": 1416,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "A",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "tsubaki_ex",
      "name": "戦闘用シールド、装着",
      "description": "を増加（30秒間）/ 円形範囲内の敵にを付与（間）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 28.11,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 32.32,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 36.54,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 40.75,
              "duration": 30,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": 44.97,
              "duration": 30,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "tsubaki_normal",
      "name": "疲れたら寝るのが一番",
      "description": "HPが30%以下の時、治癒力の分の回復 （戦闘中に1回のみ）",
      "type": "normal",
      "levels": [
        {
          "level": 1,
          "healMultiplier": 3.4928
        },
        {
          "level": 2,
          "healMultiplier": 3.6675
        },
        {
          "level": 3,
          "healMultiplier": 3.842
        },
        {
          "level": 4,
          "healMultiplier": 4.5408
        },
        {
          "level": 5,
          "healMultiplier": 4.7153
        },
        {
          "level": 6,
          "healMultiplier": 4.89
        },
        {
          "level": 7,
          "healMultiplier": 5.5885
        },
        {
          "level": 8,
          "healMultiplier": 5.763
        },
        {
          "level": 9,
          "healMultiplier": 5.9378
        },
        {
          "level": 10,
          "healMultiplier": 6.6363
        }
      ]
    },
    "passive": {
      "id": "tsubaki_passive",
      "name": "胆力",
      "description": "を増加",
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
      "id": "tsubaki_sub",
      "name": "手慣れたリロード",
      "description": "リロード中のを減少",
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
