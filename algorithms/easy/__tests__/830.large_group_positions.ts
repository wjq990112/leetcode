/**
 * @file 830. 较大分组的位置
 */
import largeGroupPositions from '../830.large_group_positions';

describe('830. 较大分组的位置', () => {
  it('input: s = "abbxxxxzzy"', () => {
    expect(largeGroupPositions('abbxxxxzz')).toEqual([[3, 6]]);
  });

  it('input: s = "abc"', () => {
    expect(largeGroupPositions('abc')).toEqual([]);
  });

  it('input: s = "abcdddeeeeaabbbcd"', () => {
    expect(largeGroupPositions('abcdddeeeeaabbbcd')).toEqual([
      [3, 5],
      [6, 9],
      [12, 14]
    ]);
  });

  it('input: s = "aba"', () => {
    expect(largeGroupPositions('aba')).toEqual([]);
  });
});
