import { StopRoundOnce } from '../computed'
import { ComboBuff } from '../../interface'
/**
 * 禁锢buff模型
 * @param value
 * @desc 禁止一回合行动 包括陷阱和冰封技能
 */
export const ForzenModel = (value: number): ComboBuff => {
  return {
    buffs: [StopRoundOnce(value)]
  }
}
