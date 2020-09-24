/**
 * @file 模拟面试: 快乐数
 */
export default function isHappy(n: number): boolean {
  const resArr: number[] = [];

  while (n !== 1) {
    const str = String(n);
    const arr = str.split('');
    const res = arr.reduce(
      (prev, curr) => (prev += Math.pow(Number(curr), 2)),
      0
    );

    if (resArr.includes(res)) {
      return false;
    }

    resArr.push(res);
    n = res;
  }

  return true;
}
