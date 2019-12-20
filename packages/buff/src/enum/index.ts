/**
 * buff行为
 * ADD_HP        -> 增加生命值
 * ADD_AC        -> 增加护甲值
 * ADD_AP        -> 增加攻击力
 * ADD_ROUND     -> 增加回合数
 * ADD_MORALE    -> 增加士气
 * REDUCE_AP     -> 减少攻击力
 * REDUCE_HP     -> 减少生命值
 * REDUCE_AC     -> 减少护甲值
 * REDUCE_MORALE -> 减少士气
 * REDUCE_ROUND  -> 减少回合数
 * STOP_ACTION   -> 禁止行动
 */
export enum BehaviorEnum {
  // 增加生命值
  ADD_HP = 'ADD_HP',
  // 增加护甲值
  ADD_AC = 'ADD_AC',
  // 增加攻击力
  ADD_AP = 'ADD_AP',
  //  增加回合数
  ADD_ROUND = 'ADD_ROUND',
  // 增加士气
  ADD_MORALE = 'ADD_MORALE',
  // 减少攻击力
  REDUCE_AP = 'REDUCE_AP',
  // 减少生命值
  REDUCE_HP = 'REDUCE_HP',
  // 减少护甲值
  REDUCE_AC = 'REDUCE_AC',
  // 减少回合数
  REDUCE_ROUND = 'REDUCE_ROUND',
  // 减少士气
  REDUCE_MORALE = 'REDUCE_MORALE',
  // 禁止行动
  STOP_ACTION = 'STOP_ACTION',
  // 飞行模式
  FLY = 'FLY'
}

/**
 * 持续时间类型
 */
export enum ContinueType {
  // NONE
  NONE = 'NONE',
  // 一次
  ONCE = 'ONCE',
  // 永久
  ALWAYS = 'ALWAYS'
}
