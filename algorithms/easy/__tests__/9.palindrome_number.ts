/**
 * @file 9. 回文数
 */
import isPalindrome from '../9.palindrome_number';

describe('9. 回文数', () => {
  it('input: 121', () => {
    expect(isPalindrome(121)).toBeTruthy();
  });

  it('input: -121', () => {
    expect(isPalindrome(-121)).toBeFalsy();
  });

  it('input: 10', () => {
    expect(isPalindrome(10)).toBeFalsy();
  });
});
