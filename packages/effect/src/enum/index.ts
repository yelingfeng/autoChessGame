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
