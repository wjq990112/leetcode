/**
 * @file 7. 整数反转
 */
export default function reverse(x: number): number {
  let num = String(x);
  let res = '';
  if (/-/g.test(num)) {
    res = '-' + num.slice(1, num.length).split('').reverse().join('');
  } else {
    res = num.slice(0, num.length).split('').reverse().join('');
  }
  if (Number(res) > Math.pow(2, 31) - 1 || Number(res) < -Math.pow(2, 31)) {
    return 0;
  }
  return Number(res);
}
