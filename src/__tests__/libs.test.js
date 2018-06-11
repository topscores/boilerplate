import { plus } from '../libs'

describe('libs', () => {
  describe('plus', () => {
    it('calculates a + b', () => {
      expect(plus(3, 5)).toBe(8)
    })
  })
})
