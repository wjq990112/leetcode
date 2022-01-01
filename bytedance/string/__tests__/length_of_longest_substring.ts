/**
 * @file 字符串: 无重复字符的最长子串
 */
import lengthOfLongestSubstring from '../length_of_longest_substring';

describe('字符串: 无重复字符的最长子串', () => {
  it('input: "abcabcbb"', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  });

  it('input: "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
  });

  it('input: "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
  });

  it('input: ""', () => {
    expect(lengthOfLongestSubstring("")).toEqual(0);
  });

  it('input: " "', () => {
    expect(lengthOfLongestSubstring(" ")).toEqual(1);
  });
})

