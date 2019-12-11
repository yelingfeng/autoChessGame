import { BaseSkill } from './interface'
/**
 * 技能类
 */
export class Skill {
  private opts: BaseSkill

  constructor(opts: BaseSkill) {
    this.opts = opts
  }

  showSkill() {
    return this.opts.name
  }
}
