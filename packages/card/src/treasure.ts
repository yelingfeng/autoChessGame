/**
 * 宝物卡
 */
import { TreasureCard } from './interface'
import { skillMessage } from './skill'

export class Treasure {
  private opts: TreasureCard

  constructor(opts: TreasureCard) {
    this.opts = opts
  }

  showSkill() {
    const skillmsg = this.opts.skills.map(it => {
      return skillMessage[it]
    })
    return skillmsg.join(',')
  }
}
