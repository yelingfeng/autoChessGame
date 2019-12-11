import { GeneralCard } from './interface/generalCard'
/**
 * 武将卡
 * [
 *   宝物
 *   法术
 *   带兵量
 * ]
 */
export class Generals {
  private opts: GeneralCard

  constructor(opts: GeneralCard) {
    this.opts = opts
    this.init()
  }

  init() {
    this.showTreasure()
  }

  showTreasure() {
    const treasureMsg = this.opts.treasureArr.map(it => {
      return it
    })
    return treasureMsg
  }
}
