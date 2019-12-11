import { SkillModelEnum } from '../enum'
/**
 * 技能枚举对应中文名
 */
const skillMessage: { [code: number]: string } = {
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

/**
 * 获取技能名称
 * @param code
 */
export const getSkillName = (code: number): string => {
  return skillMessage[code]
}
