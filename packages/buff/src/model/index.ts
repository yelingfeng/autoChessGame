import { Buff } from '../interface'
import { BehaviorEnum, TimeType } from '../enum'

/**
 * 禁止一回合
 */
export const StopOnce: Buff = {
  behavior: BehaviorEnum.STOP_ACTION,
  time: TimeType.ONCE
}
