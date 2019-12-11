import { SkillModelEnum, SkillTypeEnum } from '../enum'
/**
 * 飞行技能模型
 * @id SkillModelEnum.FLY
 * @name 飞行
 * @type 被动技能
 * @description 只有弓手、飞行类型敌人能对其造成普通攻击伤害
 */
export const FlyModel = {
  id: SkillModelEnum.FLY,
  type: SkillTypeEnum.PASSIVE,
  name: '飞行',
  desc: '只有弓手、飞行类型敌人能对其造成普通攻击伤害'
}
