/**
 * @file 14. 最长公共前缀
 */
import longestCommonPrefix from '../14.longest_common_prefix';

describe('14. 最长公共前缀', () => {
  it('input: ["flower","flow","flight"]', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
  });

  it('input: ["dog","racecar","car"]', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
  });

  it('input: []', () => {
    expect(longestCommonPrefix([])).toEqual('');
  });

  it('input: [""]', () => {
    expect(longestCommonPrefix([''])).toEqual('');
  });

  it('input: ["a"]', () => {
    expect(longestCommonPrefix(['a'])).toEqual('a');
  });

  it('input: ["aa","aa"]', () => {
    expect(longestCommonPrefix(['aa', 'aa'])).toEqual('aa');
  });
});
