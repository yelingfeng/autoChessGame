/**
 * buff行为
 * ADD_HP -> 增加生命值
 * ADD_AC -> 增加护甲值
 * ADD_AP -> 增加攻击力
 * REDUCE_AP -> 减少攻击力
 * REDUCE_HP -> 减少生命值
 * REDUCE_AC -> 减少护甲值
 */
export const enum BehaviorEnum {
  // 增加生命值
  ADD_HP,
  // 增加护甲值
  ADD_AC,
  // 增加攻击力
  ADD_AP,
  // 减少攻击力
  REDUCE_AP,
  // 减少生命值
  REDUCE_HP,
  // 减少护甲值
  REDUCE_AC,
  // 禁止行动
  STOP_ACTION
}

/**
 *  buff接口
 *  behavior -> 行为
 *  time -> 持续时间
 */
export interface Buff {
  behavior: BehaviorEnum
  time: number
}
