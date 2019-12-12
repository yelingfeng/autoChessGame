import { BehaviorEnum, TimeType } from '../enum'
/**
 *  基础功能
 *  probability -> 释放概率
 *  time -> 持续时间
 */
interface Base {
  probability?: number
  time?: TimeType
}

/**
 *  buff接口
 *  behavior -> 行为
 *  value -> 数值
 */
export interface Buff extends Base {
  behavior: BehaviorEnum
  value?: number
}

/**
 * 复合buff接口
 */
export interface ComboBuff extends Base {
  buffs: Array<Buff>
}
