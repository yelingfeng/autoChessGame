import { ComboBuff } from '@autochess/buff'
import { EffectTypeEnum } from './enum/index'

/**
 * 基础effect 接口
 * effectType -> 技能效果类型
 * buff -> ComboBuff
 */
export interface Effect {
  effectType: EffectTypeEnum
  buff?: ComboBuff
}

export { EffectTypeEnum }
