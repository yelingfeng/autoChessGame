import { ComboBuff } from '../../interface'
import { AddACLast } from '../computed'
/**
 * 盾防BUFF模型
 * @param value
 * @desc 永久增加{value}防御
 */
export const ShieldModel = (value: number): ComboBuff => {
  return {
    buffs: [AddACLast(value)]
  }
}
