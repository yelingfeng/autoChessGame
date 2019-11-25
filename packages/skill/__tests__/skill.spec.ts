import { Buff, BehaviorEnum } from '@autoChess/buff'
import { Skill } from '../src'
import { Effect, EffectTypeEnum } from '../src/effect'
import { SkillTypeEnum, EffectTargetEnum, ReleaseTargetEnum, BaseSkill } from '../src/interface'

describe('skill', () => {
  it('test skill effect', () => {
    const e1 = {
      // 控制类
      effectType: EffectTypeEnum.CONTROL,
      // buff 是禁止一回合行动
      buff: [
        {
          behavior: BehaviorEnum.STOP_ACTION,
          time: 1
        } as Buff
      ]
    } as Effect
    const s1: BaseSkill = {
      name: '冰封',
      desc: '对一个随机敌人造成伤害，并有50%几率冰冻敌人，使其失去下回合行动能力',
      type: SkillTypeEnum.ACTIVE,
      hurt: 2,
      probability: 50,
      events: [],
      effects: [e1],
      release: ReleaseTargetEnum.SINGLE_ENEMY,
      target: EffectTargetEnum.ENEMY
    }
    const skill = new Skill(s1)
    console.log(skill, s1.effects[0])
  })
})
