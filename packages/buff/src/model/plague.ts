import { ComboBuff } from '../interface'
import { ReduceHPLast, ReduceAPLast } from './computed'
/**
 * 瘟疫buff
 * 普通攻击对敌人造成伤害时，会使其进入瘟疫状态，失去1点攻击和1点血，同一攻击者的瘟疫效果不可叠加
 */
export const Plague = (): ComboBuff => {
  return {
    buffs: [ReduceHPLast(1), ReduceAPLast(1)]
  }
}
