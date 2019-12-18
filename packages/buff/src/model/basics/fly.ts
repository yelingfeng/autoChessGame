import { ComboBuff } from '../../interface'
import { FlyStatus } from '../computed'
/**
 * 飞行buff模型
 * @desc 增加飞行能力
 */
export const FlyModel = (): ComboBuff => {
  return {
    buffs: [FlyStatus()]
  }
}
