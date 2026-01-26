import { Character } from '../../types';

export const hoshinoBattleTank: Character = {
  "id": "hoshino_battle_tank",
  "name": "ホシノ（臨戦）",
  "rarity": 3,
  "attackType": "mystic",
  "role": "striker",
  "position": "front",
  "baseStats": {
    "attack": 1218,
    "defense": 1077,
    "hp": 50020,
    "criticalValue": 200,
    "criticalDamage": 200,
    "stability": 1992,
    "accuracy": 601,
    "evasion": 239,
    "costRecovery": 700
  },
  "terrain": {
    "urban": "A",
    "outdoor": "S",
    "indoor": "D"
  },
  "skills": {
    "ex": {
      "id": "hoshino_battle_tank_ex",
      "name": "防御姿勢強化",
      "description": "指定した位置に移動した後、遮蔽物の役割をする盾を持ち上げて遮蔽状態を付与、さらにを増加（40秒間）/ 遮蔽物は、ホシノ（臨戦）の最大HPのの分の値が追加されたHPを持ちます。 （遮蔽物の防御タイプはホシノ（臨戦）と同じです）",
      "type": "ex",
      "cost": 4,
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 82.58,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 94.97,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 119.74,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 132.13,
              "duration": 40,
              "target": "self"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 156.9,
              "duration": 40,
              "target": "self"
            }
          ]
        }
      ]
    },
    "normal": {
      "id": "hoshino_battle_tank_normal",
      "name": "プレート交換",
      "description": "40秒毎に、を装着してを減少/ （は25回攻撃を受けたら解除）",
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
      "id": "hoshino_battle_tank_passive",
      "name": "近距離戦闘システム",
      "description": "を、を増加",
      "type": "passive",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "attackPercent",
              "value": 11.2,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 11.2,
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
              "value": 11.48,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 11.48,
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
              "value": 11.76,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 11.76,
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
              "value": 12.88,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 12.88,
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
              "value": 13.16,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 13.16,
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
              "value": 13.44,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 13.44,
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
              "value": 14.56,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 14.56,
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
              "value": 14.84,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 14.84,
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
              "value": 15.12,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 15.12,
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
              "value": 16.24,
              "duration": 999,
              "target": "self"
            },
            {
              "type": "hpPercent",
              "value": 16.24,
              "duration": 999,
              "target": "self"
            }
          ]
        }
      ]
    },
    "sub": {
      "id": "hoshino_battle_tank_sub",
      "name": "有効戦術",
      "description": "攻撃時、20%の確率でを減少（20秒間）（クールタイム5秒）",
      "type": "sub",
      "levels": [
        {
          "level": 1,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.17,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 2,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -10.68,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 3,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -11.18,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 4,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -13.21,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 5,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -13.72,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 6,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -14.24,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 7,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -16.27,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 8,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -16.78,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 9,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -17.28,
              "duration": 20,
              "target": "enemy"
            }
          ]
        },
        {
          "level": 10,
          "buffEffects": [
            {
              "type": "defensePercent",
              "value": -19.31,
              "duration": 20,
              "target": "enemy"
            }
          ]
        }
      ]
    }
  }
};
