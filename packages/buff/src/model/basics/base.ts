import { Buff } from '../../interface'
import { BehaviorEnum, TimeType } from '../../enum'
/** 飞行模式 */
export const FlyStatus: Buff = {
  behavior: BehaviorEnum.FLY,
  time: TimeType.ONCE
}

/**
 * 减少 1 HP永久
 */
export const AlwaysReduceHP: Buff = {
  behavior: BehaviorEnum.REDUCE_HP,
  time: TimeType.ALWAYS,
  value: 1
}
/**
 * 减少 1攻击 永久
 */
export const AlwaysReduceAP: Buff = {
  behavior: BehaviorEnum.REDUCE_AP,
  time: TimeType.ALWAYS,
  value: 1
}

/**
 * 加 1攻击 永久
 */
export const AlwaysAddAP: Buff = {
  behavior: BehaviorEnum.ADD_AP,
  time: TimeType.ALWAYS,
  value: 1
}
/**
 * 增加 1攻击 持续1回合
 */
export const OnceAddAp: Buff = {
  behavior: BehaviorEnum.ADD_AP,
  time: TimeType.ONCE,
  value: 1
}

/**
 * 禁止一回合
 */
export const StopOnce: Buff = {
  behavior: BehaviorEnum.STOP_ACTION,
  time: TimeType.ONCE
}

/**
 * 每回合加1 HP
 */
export const AlawysAddHP: Buff = {
  behavior: BehaviorEnum.ADD_HP,
  time: TimeType.ALWAYS,
  value: 1
}

/**
 * 加 1防
 */
export const AlawysAddAC: Buff = {
  behavior: BehaviorEnum.ADD_AC,
  time: TimeType.ALWAYS,
  value: 1
}
