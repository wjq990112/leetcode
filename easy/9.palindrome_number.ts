/**
 * @file 9. 回文数
 */
export default function isPalindrome(x: number): boolean {
  let num = String(x);
  let reverseNum = num.split('').reverse().join('');
  return num === reverseNum;
}
