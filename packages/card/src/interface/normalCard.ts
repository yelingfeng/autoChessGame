import { SkillModelEnum } from '@autochess/skill'
import { BaseProperty } from './base'
/**
 *
 * 卡牌基础接口属性
 * @interface NormalCard
 * @extends {BaseProperty}
 */
export interface NormalCard extends BaseProperty {
  // 技能列表
  skills: Array<SkillModelEnum>
}
