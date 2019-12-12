import { ComboBuff } from '../interface'
import { TimeType } from '../enum'
import { AlwaysReduceAP } from './basics/base'
/**
 * 削弱buff 减攻
 * 每次普通攻击对敌人造成伤害时，使其失去1点攻击力
 */
export const Weaken: ComboBuff = {
  buffs: [AlwaysReduceAP],
  time: TimeType.ONCE
}
