// 技能模型枚举
export const enum SkillModelEnum {
  // ----- 基础技能 -----
  // 飞行 ( 可以攻击所有兵种)
  FLY,
  // 践踏  (双倍伤害 -> 弓手)
  TRAMPLE,
  // 冷箭  (双倍伤害 -> 步兵类型和飞行类型)
  COLDARROW,
  // 长矛 (双倍伤害 -> 骑兵)
  LANCE,
  // 盾防 (受到普通攻击时，减少一点伤害)
  SHIELD,
  // 冲阵 (随机减少准备区中一个同伴的等待回合数)
  RUSH,
  // 偷袭 (第一次攻击并命中敌人后造成额外2点伤害)
  SNEAK_ATTACK,
  // 蛊惑(增加一个准备区域中的随机敌人准备回合数)
  BEWITCH,
  // 索命(对最低血量的敌人造成伤害)
  EXACTLIFE,

  // ---- 魔法控制类 -----
  // 冰冻 (对一个随机敌人造成伤害，并有50%几率冰冻敌人，使其失去下回合行动能力)
  FROZEN,
  // 陷阱 (对一个随机敌人使用陷阱，并有75%的几率夹牢敌人，使其失去下回合行动能力)
  TRAPS,
  // 闪电 (对一个随机敌人造成1点闪电伤害)
  LIGHTNING,
  // 洞察 (免疫所有法术)
  INSIGHT,

  // ---- buff类 -----
  // 火龙息(卓耿的火焰 喷完持续掉血 燃烧的敌人每回合结束时损失1点血)
  DRACARYS,
  // 削弱 (每次普通攻击对敌人造成伤害时，使其失去1点攻击力)
  WEAKEN,
  // 毒刃 (每次攻击后对方中毒 下回合开始持续减血)
  POISONBLADE,
  // 刃甲 (受攻击后反弹伤害 )
  BLADEARMOR,
  // 奋击(每次普通攻击对敌人造成伤害后，其攻击力加1点)
  STRIVE,
  // 狂暴 (每次受攻击后 增加1点攻击值)
  FRENZY,
  // 嗜血术 (随机吸血一个单位的HP 到自己身上)
  BLOODLUST,
  // 瘟疫 (普通攻击对敌人造成伤害时，会使其进入瘟疫状态，失去1点攻击和1点血，同一攻击者的瘟疫效果不可叠加)
  PLAGUE,
  // 吸血 (普通攻击每对敌人造成1点伤害，自己回复1点血)
  SUCKBLOOD,
  // 诅咒 (任何攻击此卡或被此卡攻击的敌人会受到诅咒，有50%的几率无法进行普通攻击)
  CURSES,
  // 重生 (死亡时有50%的几率重生并进入准备区域)
  REBIRTH,
  // 召唤 (从墓地随机复活一张任意卡牌进入卡牌堆中)
  SUMMON,
  // 自残 (回合结束时，自己损失1点血)
  SELF_HARM,
  // 急救 (对血量最少的受伤同伴恢复血量)
  FIRST_THERAPY,
  // 丹术 (在其回合结束时，恢复血量)
  ALCHEMY,
  // 威势 - 降低士气
  REDUCE_MORALE,
  // 鼓舞士气 - 增加士气
  BOOST_MORALE,

  // ------群攻类------
  // 炎流星 (攻击所有目标)
  FLAME_METEOR,
  // 横扫 (同时攻击对面和其相邻的敌人)
  SWEEPING
}

/**
 *  卡牌基础接口属性
 */
export interface BaseCard {
  // 卡牌类型
  type: string
  // 卡牌名称
  name: string
  //  阵营
  camp: string
  // 卡牌等级
  rank: string
  // 卡牌兵种
  race: string
  // 回合数
  round: number
  // 生命值
  HP: number
  // 护甲值
  AC: number
  // 资源
  resources: string
  // 技能
  skills: Array<SkillModelEnum>
}
