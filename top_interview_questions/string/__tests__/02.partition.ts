/**
 * @file 字符串: 分割回文串
 */
import partition from '../02.partition';

describe('字符串: 分割回文串', () => {
  it('input: "aab"', () => {
    expect(partition('aab')).toContainEqual(['aa', 'b']);
    expect(partition('aab')).toContainEqual(['a', 'a', 'b']);
  });
});
