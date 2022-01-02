/**
 * @file 字符串: 字符串的排列
 */
import checkInclusion from '../check_inclusion';

describe('字符串: 字符串的排列', () => {
  it('input: s1 = "ab" s2 = "eidbaooo"', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBeTruthy();
  });

  it('input: s1 = "ab" s2 = "eidboaoo"', () => {
    expect(checkInclusion('ab', 'eidboaoo')).toBeFalsy();
  });

  it('input: s1 = "abc" s2 = "bbbca"', () => {
    expect(checkInclusion('abc', 'bbbca')).toBeTruthy();
  });

  it('input: s1 = "abc" s2 = "cccccbabbbaaaa"', () => {
    expect(checkInclusion('abc', 'cccccbabbbaaaa')).toBeTruthy();
  });

  it('input: s1 = "abcdxabcde" s2 = "abcdeabcdx"', () => {
    expect(checkInclusion('abcdxabcde', 'abcdeabcdx')).toBeTruthy();
  });
});
