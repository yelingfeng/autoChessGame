import { ComboBuff } from '../../interface'
import { AddAPOnce } from '../computed'
/**
 * 偷袭buff
 * 增加1攻击 一回合
 */
export const SneakModel = (value: number): ComboBuff => {
  return {
    buffs: [AddAPOnce(value)]
  }
}
