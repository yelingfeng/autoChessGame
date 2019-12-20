import { ComboBuff } from '../../interface'
import { AddMorale, ReduceMorale } from '../computed'

/**
 * 减少士气
 * @param value
 */
export const ReduceMoraleModel = (value: number): ComboBuff => {
  return {
    buffs: [ReduceMorale(value)]
  }
}

/**
 * 增加士气
 * @param value
 */
export const AddMoraleModel = (value: number): ComboBuff => {
  return {
    buffs: [AddMorale(value)]
  }
}
