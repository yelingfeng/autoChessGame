import { IBuff } from '@autochess/buff'
import { EffectTypeEnum } from './enum/index'

/**
 * 基础effect 接口
 * effectType -> 技能效果类型
 * buff -> Buff数组
 */
export interface Effect {
  effectType: EffectTypeEnum
  buff?: Array<IBuff>
}
