/**
 * @file 字符串: 验证回文串
 */
import isPalindrome from '../01.is_palindrome';

describe('字符串: 验证回文串', () => {
  it('input: ""', () => {
    expect(isPalindrome('')).toBeTruthy();
  });

  it('input: "A man, a plan, a canal: Panama"', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
  });

  it('input: "race a car"', () => {
    expect(isPalindrome('race a car')).toBeFalsy();
  });

  it('input: "0P"', () => {
    expect(isPalindrome('0P')).toBeFalsy();
  });
});
