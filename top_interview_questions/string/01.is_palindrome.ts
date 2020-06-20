/**
 * @file 字符串: 验证回文串
 */
export default function isPalindrome(s: string): boolean {
  let str = s.toLowerCase().replace(/[^\w]/g, '');
  let len = str.length;

  let p1 = 0;
  let p2 = len - 1;

  while (p2 > p1) {
    if (str[p2] !== str[p1]) {
      return false;
    }
    p1++;
    p2--;
  }

  return true;
}
