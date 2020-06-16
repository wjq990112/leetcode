/**
 * @file 面试题10-I. 斐波那契数列
 */
export default function fib(n: number): number {
  if (n < 2) {
    return n;
  }

  let a = 1;
  let b = 1;

  for (let i = 2; i < n; i++) {
    [a, b] = [b, (a + b) % 1000000007];
  }

  return b;
}
