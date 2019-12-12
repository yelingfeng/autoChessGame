import { ComboBuff } from '../interface'
import { AlwaysReduceHP, AlwaysReduceAP } from './basics/base'
import { TimeType } from '../enum'
/**
 * 瘟疫buff
 * 普通攻击对敌人造成伤害时，会使其进入瘟疫状态，失去1点攻击和1点血，同一攻击者的瘟疫效果不可叠加
 */
export const Plague: ComboBuff = {
  buffs: [AlwaysReduceHP, AlwaysReduceAP],
  time: TimeType.ONCE
}
