import { SkillModelEnum } from '@autochess/skill'
import { CardType, CampType, RarityType, RaceType } from '../src/enum/card'
import { GeneralCard } from '../src/interface/generalCard'
import { CostCard } from '../src/interface/costCard'
import { NormalCard } from '../src/interface/normalCard'
import { TreasureEnum } from '../src/enum/treasure'
import { Card } from '../src/base'
import { Generals } from '../src/generals'
import { Treasure } from '../src/treasure'

const base = {
  name: '曹操',
  // 卡牌类型
  type: CardType.GENERALS,
  //  阵营
  camp: CampType.WEI,
  // 卡牌等级
  rarity: RarityType.EPIC,
  // 卡牌兵种
  race: RaceType.GENERALS,
  // 回合0数
  round: 10,
  // 攻击
  AP: 2,
  // 生命值
  HP: 8,
  // 护甲值
  AC: 0,
  // 技能
  skills: [SkillModelEnum.BLADE_ARMOR, SkillModelEnum.AID_CAVALRY]
} as NormalCard

describe('Card spec', () => {
  it('test Card ', () => {
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
      magicArr: [],
      ...base
    } as GeneralCard
    const generals = new Generals(cc)
    console.log(generals)
    expect(generals.showTreasure()).toStrictEqual([0, 1])
  })

  it('test treasure', () => {
    //
    const test = {
      name: '八阵图',
      // 卡牌类型
      type: CardType.TREASURE,
      // 阵营
      camp: CampType.WEI,
      // 技能
      skills: [SkillModelEnum.SOUL_SUMMON]
    } as CostCard
    const T = new Treasure(test)
    expect(T.showSkill()).toBe('战魂召唤')
  })
})
