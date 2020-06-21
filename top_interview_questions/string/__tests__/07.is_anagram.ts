/**
 * @file 字符串: 有效的字母异位词
 */
import isAnagram from '../07.is_anagram';

describe('字符串: 有效的字母异位词', () => {
  it('input: "ab", "a"', () => {
    expect(isAnagram('ab', 'a')).toBeFalsy();
  });

  it('input: "anagram", "nagaram"', () => {
    expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
  });

  it('input: "rat", "cat"', () => {
    expect(isAnagram('rat', 'cat')).toBeFalsy();
  });
});
