/**
 * @file 面试题10-II. 青蛙跳台阶问题
 */
export default function numWays(n: number): number {
  if (n < 2) {
    return 1;
  }

  let a = 1;
  let b = 1;

  for (let i = 1; i < n; i++) {
    [a, b] = [b, (a + b) % 1000000007];
  }

  return b;
}
