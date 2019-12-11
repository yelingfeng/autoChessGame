/**
 * 兵种类型 存在相互克制
 *  1. 武将(generals)
 *  2. 弓箭手(ac)
 *  3. 步兵(fm)
 *  4. 骑兵(cavalry)
 *  5. 野兽(beast)
 *  6. 亡灵(ud)
 *  7. 龙 (dragon)
 */
export const enum RaceType {
  // 武将
  GENERALS = 1,
  // 弓箭手
  AC = 2,
  // 步兵
  FM = 3,
  // 骑兵
  CAVALRY = 4,
  // 野兽
  BEAST = 5,
  // 亡灵
  UD = 6,
  // 龙
  DRAGON = 7
}
