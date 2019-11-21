import { Effect } from './effect'
/**
 * 技能类型
 * ACTIVE  -> 主动
 * PASSIVE -> 被动
 * BUFF   ->  状态
 * OTHER  -> 其他
 */
export const enum SkillTypeEnum {
  ACTIVE,
  PASSIVE,
  BUFF,
  OTHER
}

/**
 * 影响范围
 * ME   -> 自己
 * ENEMY -> 敌人
 * TEAM  -> 队友
 * ALL   -> 所有人
 */
export const enum EffectTargetEnum {
  ME,
  ENEMY,
  TEAM,
  ALL
}
/**
 *
 *  释放目标类型
 *  ME -> 自身
 *  SINGLE_ENEMY  ->  单个敌人
 *  SINGLE_TEAM   ->  单个队友
 *  ALL_ENEMY     ->  群体敌人
 *  ALL_TEAM      ->  群体队友
 */

export const enum ReleaseTargetEnum {
  ME,
  SINGLE_ENEMY,
  SINGLE_TEAM,
  ALL_ENEMY,
  ALL_TEAM
}

/**
 * 基础技能接口定义
 * name    ->  技能名称
 * desc    ->  技能描述
 * type    ->  技能类型
 * effect  ->  一组技能效果
 * events  ->  事件
 * release ->  释放目标对象
 * target  ->  技能效果对象
 * hurt    ->  伤害
 * probability -> 释放概率
 */
export interface BaseSkill {
  name: string
  desc: string
  hurt: number
  events: []
  type: SkillTypeEnum
  probability: number
  effect: Array<Effect>
  release: ReleaseTargetEnum
  target: EffectTargetEnum
}
