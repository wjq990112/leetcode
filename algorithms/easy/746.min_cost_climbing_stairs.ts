/**
 * @file 746. 使用最小花费爬楼梯
 */
export default function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  let prev = 0;
  let curr = 0;
  for (let i = 2; i <= n; i++) {
    let next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
    prev = curr;
    curr = next;
  }
  return curr;
}
