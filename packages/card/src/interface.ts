import { SkillModelEnum } from './skill'

export const enum CardType {
  // 武将
  GENERALS,
  // 士兵卡
  SOLDIERS,
  // 宝物卡
  TREASURE
}

/**
 * 阵营枚举
 */
export const enum CampEnum {
  // 魏
  WEI,
  // 蜀
  SHU,
  // 吴
  WU,
  // 群
  QUN
}

/**
 * 卡片级别
 */
export const enum RankEnum {
  // 史诗 (红卡)
  EPIC,
  // 珍稀 (橙卡)
  RARE,
  // 卓越 (紫色)
  EXCELLENT,
  // 贵重 (蓝色)
  VALUABLE,
  // 进阶 (绿色)
  ADVANCED,
  // 普通 (白色)
  NORMAL,
  // 基础 (灰色)
  BASEC
}

/**
 * 兵种类型 存在相互克制
 *
 */
export const enum RaceEnum {
  // 武将
  GENERALS,
  // 弓箭手
  AC,
  // 步兵
  FM,
  // 骑兵
  CAVALRY,
  // 野兽
  BEAST,
  // 亡灵
  UD,
  // 龙
  DRAGON,
  // 法术
  MAGIC,
  // 宝物
  TREASURE
}
/**
 * 法术类枚举
 */
export const enum MagicEnum {
  // 轰天雷
  THUNDER
}
/**
 * 宝物类m枚举
 */
export const enum TreasureEnum {
  //  方天画戟
  FTHJ,
  // 青龙偃月刀
  QLYYD
}

/**
 * 基础属性接口
 */
interface BaseProperty {
  // 卡牌类型
  type: CardType
  //  阵营
  camp: CampEnum
  // 卡牌等级
  rank: RankEnum
  // 卡牌兵种
  race: RaceEnum
  // 卡牌名称
  name: string
  // 回合数
  round: number
  // 生命值
  HP: number
  // 护甲值
  AC: number
}

/**
 *  卡牌基础接口属性
 */
export interface BaseCard extends BaseProperty {
  // 技能
  skills: Array<SkillModelEnum>
}
/**
 * 武将类卡接口定义
 */
export interface GeneralCard extends BaseProperty, BaseCard {
  // 携带宝物数
  treasure: number
  // 携带法术数
  magic: number
  treasureArr: Array<TreasureEnum>
  magicArr: Array<MagicEnum>
}
/**
 * 宝物卡接口定义
 */
export interface TreasureCard {
  // 卡牌类型
  type: CardType
  //  阵营
  camp: CampEnum
  // 卡牌名称
  name: string
  // 技能
  skills: Array<SkillModelEnum>
}
