import { ComboBuff } from '../../interface'
import { AddRound, ReduceRound } from '../computed'

/**
 * 增加回合数
 * @param value
 */
export const AddRoundModel = (value: number): ComboBuff => {
  return {
    buffs: [AddRound(value)]
  }
}

/**
 * 减少回合数
 * @param value
 */
export const ReduceRoundModel = (value: number): ComboBuff => {
  return {
    buffs: [ReduceRound(value)]
  }
}
