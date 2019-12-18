import { ComboBuff } from '../../interface'
import { AddAPLast } from '../computed'
/**
 * 攻击buff 模型
 * @value
 * @desc 增加{value}攻击
 */
export const AttactModel = (value: number): ComboBuff => {
  return {
    buffs: [AddAPLast(value)]
  }
}
