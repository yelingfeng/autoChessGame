import { BehaviorEnum, ContinueType } from '../enum'
/**
 *  基础功能
 *  probability -> 释放概率
 *  time -> 持续时间
 */
interface Base {
  probability?: number
  time?: ContinueType
}
