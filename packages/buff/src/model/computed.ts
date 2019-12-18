import { Buff } from '../interface'
import { BehaviorEnum, ContinueType } from '../enum'

/** 飞行模式 一次 */
export const FlyStatus = (): Buff => {
  return {
    behavior: BehaviorEnum.FLY,
    time: ContinueType.ONCE
  }
}

/**
 * 禁止一回合
 * @param value
 */
export const StopRoundOnce = (value: number): Buff => {
  return {
    behavior: BehaviorEnum.STOP_ACTION,
    time: ContinueType.ONCE,
    value
  }
}

/**
 * 减少 HP 持续
 * @param value
 */
export const ReduceHPLast = (value: number): Buff => {
  return {
    behavior: BehaviorEnum.REDUCE_HP,
    time: ContinueType.ALWAYS,
    value
  }
}

/**
 * 减少 攻击 持续
 * @param value
 */
export const ReduceAPLast = (value: number): Buff => {
  return {
    behavior: BehaviorEnum.REDUCE_AP,
    time: ContinueType.ALWAYS,
    value
  }
}

/**
 * 减少 防御 持续
 * @param value
 */
export const ReduceACLast = (value: number): Buff => {
  return {
    behavior: BehaviorEnum.REDUCE_AC,
    time: ContinueType.ALWAYS,
    value
  }
}

/**
 * 加 攻击 持续
 */
export const AddAPLast = (value: number): Buff => {
  return {
    behavior: BehaviorEnum.ADD_AP,
    time: ContinueType.ALWAYS,
    value
  }
}
/**
 * 增加攻击 持续1回合
 * @param value
 */
export const AddAPOnce = (value: number): Buff => {
  return {
    behavior: BehaviorEnum.ADD_AP,
    time: ContinueType.ONCE,
    value
  }
}

/**
 * 增加 血量 持续到最后
 * @param value
 */
export const AddHPLast = (value: number): Buff => {
  return {
    behavior: BehaviorEnum.ADD_HP,
    time: ContinueType.ALWAYS,
    value
  }
}

/**
 * 永久加防
 * @param value
 */
export const AddACLast = (value: number): Buff => {
  return {
    behavior: BehaviorEnum.ADD_AC,
    time: ContinueType.ALWAYS,
    value
  }
}
