import { ComboBuff } from '../interface'
import { ReduceAPLast } from './computed'
/**
 * 削弱buff 减攻
 * 每次普通攻击对敌人造成伤害时，使其失去1点攻击力
 */
export const Weaken = (): ComboBuff => {
  return {
    buffs: [ReduceAPLast(1)]
  }
}
