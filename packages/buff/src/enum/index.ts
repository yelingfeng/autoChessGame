/**
 * buff行为
 * ADD_HP -> 增加生命值
 * ADD_AC -> 增加护甲值
 * ADD_AP -> 增加攻击力
 * REDUCE_AP -> 减少攻击力
 * REDUCE_HP -> 减少生命值
 * REDUCE_AC -> 减少护甲值
 * STOP_ACTION -> 禁止行动
 */
export enum BehaviorEnum {
  // 增加生命值
  ADD_HP = 'ADD_HP',
  // 增加护甲值
  ADD_AC = 'ADD_AC',
  // 增加攻击力
  ADD_AP = 'ADD_AP',
  // 减少攻击力
  REDUCE_AP = 'REDUCE_AP',
  // 减少生命值
  REDUCE_HP = 'REDUCE_HP',
  // 减少护甲值
  REDUCE_AC = 'REDUCE_AC',
  // 禁止行动
  STOP_ACTION = 'STOP_ACTION'
}

/**
 * 时间类型
 */
export enum TimeType {
  // NONE
  NONE = 'NONE',
  // 一次
  ONCE = 'ONCE',
  // 永久
  ALWAYS = 'ALWAYS'
}
