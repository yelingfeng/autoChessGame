import { Card } from '../src'
import { CardType, CampEnum, RankEnum, RaceEnum, TreasureEnum, GeneralCard } from '../src/interface'
import { SkillModelEnum } from '../src/skill'
import { Generals } from '../src/generals'

const base = {
  name: '曹操',
  // 卡牌类型
  type: CardType.GENERALS,
  //  阵营
  camp: CampEnum.WEI,
  // 卡牌等级
  rank: RankEnum.EPIC,
  // 卡牌兵种
  race: RaceEnum.GENERALS,
  // 回合0数
  round: 10,
  // 生命值
  HP: 8,
  // 护甲值
  AC: 2,
  // 技能
  skills: [SkillModelEnum.BLADE_ARMOR, SkillModelEnum.AID_CAVALRY]
}

describe('card', () => {
  it('test Card showSkill func', () => {
    const card = new Card(base)
    console.log(card.showSkill())
    expect(card.showSkill()).toBe('刃甲,激励骑兵')
  })

  it('test generals ', () => {
    // 定义曹操
    const cc = {
      treasure: 2,
      magic: 0,
      treasureArr: [TreasureEnum.FTHJ, TreasureEnum.QLYYD],
      ...base
    } as GeneralCard
    const generals = new Generals(cc)
    console.log(generals)
    expect(generals.showTreasure()).toStrictEqual([0, 1])
  })
})
