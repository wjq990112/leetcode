/**
 * @file 9. 回文数
 */
import palindromeNumber from '../9.palindrome_number';

describe('9. 回文数', () => {
  it('input: 121', () => {
    expect(palindromeNumber(121)).toBeTruthy();
  });

  it('input: -121', () => {
    expect(palindromeNumber(-121)).toBeFalsy();
  });

  it('input: 10', () => {
    expect(palindromeNumber(10)).toBeFalsy();
  });
});
