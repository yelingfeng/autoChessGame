import { Effect } from '@autochess/effect'
import { RaceEnum } from '@autochess/card'
import { SkillTypeEnum, ReleaseScopeEnum, EffectTargetEnum } from '../enum'

/**
 * 基础技能接口定义
 * name    ->  技能名称
 * desc    ->  技能描述
 * type    ->  技能类型
 * effects ->  一组技能效果
 * scope   ->  释放目标范围
 * target  ->  技能效果对象
 */
export interface BaseSkill {
  type: SkillTypeEnum
  name: string
  desc: string
  hurt: number
  effects: Array<Effect>
  scope: ReleaseScopeEnum
  target: EffectTargetEnum
}

/**
 * 兵种类技能
 */
export interface RaceSkill extends BaseSkill {
  targets: Array<RaceEnum>
}
