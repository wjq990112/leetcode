/**
 * @file 字符串: 最长公共前缀
 */
import longestCommonPrefix from '../longest_common_prefix'

describe('字符串: 最长公共前缀', () => {
  it('input: ["flower","flow","flight"]', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual('fl');
  });

  it('input: ["dog","racecar","car"]', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual('');
  });

  it('input: ["ab", "a"]', () => {
    expect(longestCommonPrefix(["ab", "a"])).toEqual('a');
  });
});
