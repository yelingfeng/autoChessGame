/**
 * 宝物卡
 */
import { getSkillName } from '@autochess/skill'
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
      return getSkillName(it)
    })
    return skillmsg.join(',')
  }
}
