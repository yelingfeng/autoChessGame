import { SkillModelEnum } from '@autochess/skill'
import { BaseProperty } from './base'
/**
 *  法术类 宝物类卡
 */
export interface CostCard extends BaseProperty {
  // 技能列表
  skills: Array<SkillModelEnum>
}
