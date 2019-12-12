import { SkillModelEnum, SkillTypeEnum } from '../../enum'
/**
 * 火焰技能模型
 */
export const FlameModel = {
  id: SkillModelEnum.FLAME,
  type: SkillTypeEnum.BUFF,
  name: '火焰',
  desc: '任何攻击此卡或被此卡攻击的敌人会燃烧，燃烧的敌人每回合结束时损失一点血'
}
