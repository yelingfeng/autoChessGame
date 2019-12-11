import { Buff, BehaviorEnum } from '@autoChess/buff'
import { Effect } from '@autochess/effect'
import { Skill } from '../src'
import { SkillTypeEnum, EffectTargetEnum, ReleaseScopeEnum } from '../src/enum'
import { BaseSkill } from '../src/interface'

describe('skill', () => {
  it('test skill effect', () => {
    const e1 = {
      // buff 是禁止一回合行动
      buff: [
        {
          behavior: BehaviorEnum.STOP_ACTION,
          probability: 50,
          time: 1
        } as Buff
      ]
    } as Effect
    const s1: BaseSkill = {
      name: '冰封',
      desc: '对一个随机敌人造成伤害，并有50%几率冰冻敌人，使其失去下回合行动能力',
      type: SkillTypeEnum.ACTIVE,
      hurt: 2,
      effects: [e1],
      scope: ReleaseScopeEnum.SINGLE_ENEMY,
      target: EffectTargetEnum.ENEMY
    }
    const skill = new Skill(s1)
    console.log(skill, s1.effects[0])
  })
})
