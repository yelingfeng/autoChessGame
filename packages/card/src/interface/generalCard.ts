import { BaseProperty } from './base'
import { TreasureEnum } from '../enum/treasure'
import { MagicEnum } from '../enum/magic'
/**
 * 武将类卡接口定义
 */
export interface GeneralCard extends BaseProperty {
  // 携带宝物数
  treasure: number
  // 携带法术数
  magic: number
  treasureArr: Array<TreasureEnum>
  magicArr: Array<MagicEnum>
}
