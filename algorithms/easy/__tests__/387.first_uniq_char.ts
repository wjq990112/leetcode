/**
 * @file 387. 字符串中的第一个唯一字符
 */
import firstUniqChar from '../387.first_uniq_char';

describe('387. 字符串中的第一个唯一字符', () => {
  it('input: s = "aabbcc"', () => {
    expect(firstUniqChar('aabbcc')).toEqual(-1);
  });

  it('input: s = "leetcode"', () => {
    expect(firstUniqChar('leetcode')).toEqual(0);
  });

  it('input: s = "loveleetcode"', () => {
    expect(firstUniqChar('loveleetcode')).toEqual(2);
  });

  it('input: s = "dddccdbba"', () => {
    expect(firstUniqChar('dddccdbba')).toEqual(8);
  });
});
