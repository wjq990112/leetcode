/**
 * @file 字符串: 字符串中的第一个唯一字符
 */
import firstUniqChar from '../08.first_uniq_char';

describe('字符串: 字符串中的第一个唯一字符', () => {
  it('input: ""', () => {
    expect(firstUniqChar('')).toEqual(-1);
  });

  it('input: "leetcode"', () => {
    expect(firstUniqChar('leetcode')).toEqual(0);
  });

  it('input: "loveleetcode"', () => {
    expect(firstUniqChar('loveleetcode')).toEqual(2);
  });
});
