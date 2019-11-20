import { BaseCard } from './interface'
import { skillMessage } from './skill'

/**
 * 卡牌类
 */
export class Card {
  private opts: BaseCard

  constructor(opts: BaseCard) {
    this.opts = opts
  }

  showSkill() {
    const skillmsg = this.opts.skills.map(it => {
      return skillMessage[it]
    })
    return skillmsg.join(',')
  }
}
