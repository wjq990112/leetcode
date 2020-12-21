/**
 * @file 746. 使用最小花费爬楼梯
 */
import minCostClimbingStairs from '../746.min_cost_climbing_stairs';

describe('746. 使用最小花费爬楼梯', () => {
  it('cost = [10, 15, 20]', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toEqual(15);
  });

  it('cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]', () => {
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toEqual(
      6
    );
  });
});
