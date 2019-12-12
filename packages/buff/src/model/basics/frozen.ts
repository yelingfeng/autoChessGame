import { StopOnce } from './base'
import { ComboBuff } from '../../interface'
/**
 * 冻结
 * 禁止一回合行动 包括陷阱和冰封技能
 */
export const Forzen: ComboBuff = {
  buffs: [StopOnce]
}
