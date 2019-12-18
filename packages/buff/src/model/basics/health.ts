import { ComboBuff } from '../../interface'
import { AddHPLast } from '../computed'
/**
 * 加血buff模型
 * @param value
 * @desc 每回合回{value}血
 */
export const HealthModel = (value: number): ComboBuff => {
  return {
    buffs: [AddHPLast(value)]
  }
}
