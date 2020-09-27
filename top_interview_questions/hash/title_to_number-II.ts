/**
 * @file 哈希与映射: Excel 表序列号-II
 */
export default function titleToNumber(s: string): number {
  const len = s.length;
  let res = 0;
  let count = s.length - 1;

  for (let char of s) {
    res = res + (char.charCodeAt(0) - 64) * Math.pow(26, count);
    count--;
  }

  return res;
}
