import { CardType, CampType, RarityType, RaceType } from '../enum/card'
/**
 * 基础属性接口
 */
export interface BaseProperty {
  // 卡牌类型
  readonly type: CardType
  //  阵营
  readonly camp: CampType
  // 卡牌等级
  readonly rarity: RarityType
  // 卡牌名称
  readonly name: string
  // 卡牌兵种
  readonly race?: RaceType
  // 回合数
  round: number
  // 攻击力
  AP?: number
  // 生命值
  HP?: number
  // 护甲值
  AC?: number
}
