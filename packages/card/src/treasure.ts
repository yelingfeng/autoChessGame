/**
 * 宝物卡
 */
import { skillMessage } from '@autochess/skill'
import { CostCard } from './interface/costCard'
/**
 * 宝物卡
 */
export class Treasure {
  private opts: CostCard

  constructor(opts: CostCard) {
    this.opts = opts
  }

  showSkill() {
    const skillmsg = this.opts.skills.map(it => {
      return skillMessage[it]
    })
    return skillmsg.join(',')
  }
}
