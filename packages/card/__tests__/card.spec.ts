import { sum } from '../src'

describe('card test', () => {
  it('test sum 1+2 => 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
