import { Buff, ComboBuff } from '../interface'
import { BehaviorEnum, TimeType } from '../enum'
/**
 * 减少 1 HP
 */
const AlwaysReduceHP: Buff = {
  behavior: BehaviorEnum.REDUCE_HP,
  time: TimeType.ALWAYS,
  value: 1
}
/**
 * 减少 1 攻击
 */
const AlwaysReduceAP: Buff = {
  behavior: BehaviorEnum.REDUCE_AP,
  time: TimeType.ALWAYS,
  value: 1
}

/**
 * 瘟疫buff
 * 普通攻击对敌人造成伤害时，会使其进入瘟疫状态，失去1点攻击和1点血，同一攻击者的瘟疫效果不可叠加
 */
export const PLAGUE: ComboBuff = {
  buffs: [AlwaysReduceHP, AlwaysReduceAP]
}
