import { FlyModel } from '../src/model/fly'
import { SkillModelEnum, SkillTypeEnum } from '../src/enum'

describe('model test', () => {
  it('Fly model', () => {
    expect(FlyModel.id).toEqual(SkillModelEnum.FLY)
    expect(FlyModel.type).toEqual(SkillTypeEnum.PASSIVE)
  })
})
