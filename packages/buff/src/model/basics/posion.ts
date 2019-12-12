import { ComboBuff } from '../../interface'
import { AlwaysReduceHP } from './base'

/**
 * 中毒buff
 * 下回合开始持续减血
 */
export const Posion: ComboBuff = {
  buffs: [AlwaysReduceHP]
}
