/**
 * 技能效果 类型
 * RACE    -> 种族技能(专属的技能 包括飞行 种族克制)
 * CONTROL -> 控制类 (冰冻、陷阱、诅咒)
 * MORALE  -> 士气类 (增减、士气)
 * WEAKEN  -> 削弱类 (削弱、残废、瘟疫、自残)
 * ATTACT  -> 攻击类 (造成攻击伤害)
 * ABSORB  -> 吸收效果类(吸血、治疗)
 * REFLEX  -> 反射类 (反弹伤害、战死)
 * SHIELD  -> 防御类 (抵御伤害)
 * BASE_BUFF -> 基础buff (增加攻击、血、士气、回合数等)
 * STATUS_BUFF -> 状态buff (持续掉血 、掉攻等)
 * OTHER -> 其他类特殊buff
 */
export const enum EffectTypeEnum {
  RACE,
  CONTROL,
  MORALE,
  WEAKEN,
  ATTACT,
  SHIELD,
  BASE_BUFF,
  STATUS_BUFF,
  OTHER
}

/**
 * 行为模型类型
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
  STOP_ACTION = 'STOP_ACTION',
  // 飞行模式
  FLY = 'FLY'
}

/**
 * 持续类型
 */
export enum ContinueType {
  // NONE
  NONE = 'NONE',
  // 一次
  ONCE = 'ONCE',
  // 永久
  ALWAYS = 'ALWAYS'
}
