import { getSkillName } from '@autochess/skill'
import { NormalCard } from './interface'

/**
 * 普通卡牌类
 * [
 *  技能
 *  回合    攻击/血量
 * ]
 */
export class Card {
  private opts: NormalCard

  constructor(opts: NormalCard) {
    this.opts = opts
  }

  showSkill() {
    const skillmsg = this.opts.skills.map(it => {
      return getSkillName(it)
    })
    return skillmsg.join(',')
  }
}
