/**
 * @file 模拟面试: 两数之和
 */
export default function getSum(a: number, b: number): number {
  if ((a & b) === 0) {
    return a | b;
  }

  return getSum(a ^ b, (a & b) << 1);
}
