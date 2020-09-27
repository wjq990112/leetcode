/**
 * @file 哈希与映射: Excel 表序列号-I
 */
export default function titleToNumber(s: string): number {
  let res = 0;

  for (let char of s) {
    const num = char.charCodeAt(0) - 64;
    res = res * 26 + num;
  }

  return res;
}
