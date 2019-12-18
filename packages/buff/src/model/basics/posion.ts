import { ComboBuff } from '../../interface'
import { ReduceHPLast } from '../computed'

/**
 * 中毒buff模型
 * @param value
 * @desc 下回合开始 每回合减{value}HP血量
 */
export const PosionModel = (value: number): ComboBuff => {
  return {
    buffs: [ReduceHPLast(value)]
  }
}
