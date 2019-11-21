import { BaseSkill } from './interface'

export class Skill {
  private opts: BaseSkill

  constructor(opts: BaseSkill) {
    this.opts = opts
  }

  showSkill() {
    return this.opts.effect
  }
}
