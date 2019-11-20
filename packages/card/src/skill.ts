/**
 * 技能模型枚举
 *
 * 基础技能 用户端定义
 *
 */
export const enum SkillModelEnum {
  // ----- 基础技能 -----
  // 飞行 ( 可以攻击所有兵种)
  FLY,
  // 践踏  (双倍伤害 -> 弓手)
  TRAMPLE,
  // 冷箭  (双倍伤害 -> 步兵类型和飞行类型)
  COLD_ARROW,
  // 长枪击 (双倍伤害 -> 骑兵)
  LANCE,
  // 盾防 (受到普通攻击时，减少一点伤害)
  SHIELD,
  // 冲阵 (随机减少准备区中一个同伴的等待回合数)
  RUSH,
  // 偷袭 (第一次攻击并命中敌人后造成额外2点伤害)
  SNEAK_ATTACK,
  // 蛊惑(增加一个准备区域中的随机敌人准备2个回合数)
  BEWITCH,
  // 魅惑 (增加一个准备区域中的随机敌人4个准备回合数)
  CHARM,
  // 索命(对最低血量的敌人造成伤害)
  BULLY_LIFE,
  // 死战 死亡时，对对面和其相邻的敌人造成1点伤害。
  DEAD_BATTLE,
  // 铁壁 受到敌人的普通攻击时，只受到1点伤害。
  IRON_WALL,
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
  // 火焰 任何攻击此卡或被此卡攻击的敌人会燃烧，燃烧的敌人每回合结束时损失一点血。
  FLAME,
  // 火焰燃 使战场中所有的敌人燃烧，燃烧的敌人每回合结束时损失一点血。
  ALL_FLAME,
  // 火龙息(卓耿的火焰 喷完持续掉血 燃烧的敌人每回合结束时损失1点血)
  DRACARYS,
  // 龙怒 对对面敌人造成一点伤害并灼伤敌人，同时降低敌方2点士气。
  DRAGON_FURY,
  // 削弱 (每次普通攻击对敌人造成伤害时，使其失去1点攻击力)
  WEAKEN,
  // 毒刃 (每次攻击后对方中毒 下回合开始持续减血)
  POISON_BLADE,
  // 刃甲 (受攻击后反弹伤害 )
  BLADE_ARMOR,
  // 奋击(每次普通攻击对敌人造成伤害后，其攻击力加1点)
  STRIVE,
  // 狂暴 (每次受攻击后 增加1点攻击值)
  FRENZY,
  // 嗜血术 (随机吸血一个单位的HP 到自己身上)
  STEAL,
  // 瘟疫 (普通攻击对敌人造成伤害时，会使其进入瘟疫状态，失去1点攻击和1点血，同一攻击者的瘟疫效果不可叠加)
  PLAGUE,
  // 吸血 (普通攻击每对敌人造成1点伤害，自己回复1点血)
  VAMPIRE,
  // 诅咒 (任何攻击此卡或被此卡攻击的敌人会受到诅咒，有50%的几率无法进行普通攻击)
  CURSES,
  // 重生 (死亡时有50%的几率重生并进入准备区域)
  REBIRTH,
  // 召唤 (从墓地随机复活一张任意卡牌进入卡牌堆中 50%)
  SUMMON,
  // 战魂召唤 (从墓地复活一个同伴（宝物和术除外）并进入战场 70%)
  SOUL_SUMMON,
  // 自残 (回合结束时，自己损失1点血)
  SELF_HARM,
  // 急救 (对血量最少的受伤同伴恢复血量)
  EMERGENCY,
  // 丹术 (在其回合结束时，恢复血量)
  ALCHEMY,
  // 威势 - 降低士气
  REDUCE_MORALE,
  // 鼓舞士气 - 增加士气
  BOOST_MORALE,
  // 鸣鼓：回复己方士气
  RESTORE_MORALE,
  // 水镜术 当受到炎流星，闪电或冰封等技能攻击时，可反弹1点伤害给攻击者
  WATER_MIRROR,
  // 涅槃 (减少1点血对所有敌人造成2点火焰伤害，死亡时有50%的几率重生并进入准备区域)
  NIRVANA,
  // 军魂 (每一个在战场中的同伴（武将或士兵）使该卡牌加一点攻击力)
  MILITARY_SOUL,

  // ------群体类------
  // 炎流星 (攻击所有目标)
  FLAME_METEOR,
  // 横扫 (同时攻击对面和其相邻的敌人)
  SWEEPING,
  // 激励骑兵(若此卡在战场中，所有骑兵类型同伴增加1点攻击)
  AID_CAVALRY,
  // 激励弓手（若此卡在战场中，所有弓兵类型同伴增加1点攻击）黄盖
  AID_AC,
  // 激励步兵 (若此卡在战场中，所有步兵类型同伴增加1点攻击)
  AID_FM,
  // 激励全军（若此卡在战场中，所有同伴增加1点攻击）刘备
  AID_ALL,
  // 保护士兵 (若此卡在战场中，所有己方步兵类型的同伴均增加1点血)
  SUPPORT_FM,
  // 保护弓手 若此卡在战场中，所有弓手类型的同伴均增加1点血。
  SUPPORT_AC,
  // 残废敌军：使战场中所有敌人失去1点攻击力
  WEAKEN_ENEMY,
  // 全军突击：使战场汇总所有己方同伴增加1点攻击力
  ALL_RUSH,
  // 群疗：所有同伴恢复1点血
  ALL_HEALTH,
  // 瘟疫蔓延：使战场中所有敌人，进入瘟疫状态
  ALL_PLAGUE,
  // 陷阱连阵：对战场中所有敌人使用陷阱
  ALL_TRAPS,
  // 万毒阵：使战场中所有敌人中毒，使其在下一个回合结束时损失1点血
  ALL_POISON,
  // 飞行翼: 使战场中所有己方同伴获得飞行技能，持续一回合
  ALL_FLY,
  // 驱空：使战场中所有敌人的飞行技能失效。
  LOSS_FLY,
  // 连锁枪 (随机攻击一个敌人，与该敌人同名的敌人均受到伤害) 赵云
  CHAIN_SPEAR
}

/**
 * 技能枚举对应中文名
 */
export const skillMessage: { [code: number]: string } = {
  [SkillModelEnum.FLY]: '飞行',
  [SkillModelEnum.FLAME]: '火焰',
  [SkillModelEnum.LANCE]: '长枪击',
  [SkillModelEnum.TRAPS]: '陷阱',
  [SkillModelEnum.RUSH]: '冲阵',
  [SkillModelEnum.STEAL]: '嗜血术',
  [SkillModelEnum.CHARM]: '魅惑',
  [SkillModelEnum.WEAKEN]: '削弱',
  [SkillModelEnum.STRIVE]: '奋击',
  [SkillModelEnum.PLAGUE]: '瘟疫',
  [SkillModelEnum.SUMMON]: '召唤',
  [SkillModelEnum.CURSES]: '诅咒',
  [SkillModelEnum.SHIELD]: '盾防',
  [SkillModelEnum.FRENZY]: '狂暴',
  [SkillModelEnum.FROZEN]: '冰冻',
  [SkillModelEnum.REBIRTH]: '重生',
  [SkillModelEnum.VAMPIRE]: '吸血',
  [SkillModelEnum.INSIGHT]: '洞察',
  [SkillModelEnum.TRAMPLE]: '践踏',
  [SkillModelEnum.BEWITCH]: '蛊惑',
  [SkillModelEnum.ALCHEMY]: '丹术',
  [SkillModelEnum.NIRVANA]: '涅槃',
  [SkillModelEnum.SWEEPING]: '横扫',
  [SkillModelEnum.SELF_HARM]: '自残',
  [SkillModelEnum.EMERGENCY]: '急救',
  [SkillModelEnum.DRACARYS]: '火龙息',
  [SkillModelEnum.LIGHTNING]: '闪电',
  [SkillModelEnum.IRON_WALL]: '铁壁',
  [SkillModelEnum.COLD_ARROW]: '冷箭',
  [SkillModelEnum.SNEAK_ATTACK]: '偷袭',
  [SkillModelEnum.BULLY_LIFE]: '索命',
  [SkillModelEnum.DEAD_BATTLE]: '死战',
  [SkillModelEnum.ALL_FLAME]: '火焰燃',
  [SkillModelEnum.DRAGON_FURY]: '龙怒',
  [SkillModelEnum.POISON_BLADE]: '毒刃',
  [SkillModelEnum.BLADE_ARMOR]: '刃甲',
  [SkillModelEnum.SOUL_SUMMON]: '战魂召唤',
  [SkillModelEnum.REDUCE_MORALE]: '威势',
  [SkillModelEnum.BOOST_MORALE]: '鼓舞士气',
  [SkillModelEnum.RESTORE_MORALE]: '鸣鼓',
  [SkillModelEnum.WATER_MIRROR]: '水镜术',
  [SkillModelEnum.MILITARY_SOUL]: '军魂',
  [SkillModelEnum.FLAME_METEOR]: '炎流星',
  [SkillModelEnum.AID_CAVALRY]: '激励骑兵',
  [SkillModelEnum.AID_AC]: '激励弓手',
  [SkillModelEnum.AID_FM]: '激励步兵',
  [SkillModelEnum.AID_ALL]: '激励全军',
  [SkillModelEnum.ALL_FLY]: '飞行翼',
  [SkillModelEnum.LOSS_FLY]: '驱空',
  [SkillModelEnum.ALL_PLAGUE]: '瘟疫蔓延',
  [SkillModelEnum.ALL_HEALTH]: '群疗',
  [SkillModelEnum.ALL_TRAPS]: '陷阱连阵',
  [SkillModelEnum.ALL_POISON]: '万毒阵',
  [SkillModelEnum.CHAIN_SPEAR]: '连锁枪'
}
