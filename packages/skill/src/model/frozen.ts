import { SkillModelEnum, SkillTypeEnum } from '../enum'
/**
 * 冰冻模型
 */
export const ForzenModel = {
  id: SkillModelEnum.FROZEN,
  type: SkillTypeEnum.BUFF,
  name: '冰冻',
  desc: '对一个随机敌人造成伤害，并有50%几率冰冻敌人，使其失去下回合行动能力'
}
