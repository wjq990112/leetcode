/**
 * @file 数组: 最长连续递增序列
 */
import findLengthOfLCIS from '../find_length_of_LCIS';

describe('数组: 最长连续递增序列', () => {
  it('input: nums = [1,3,5,4,7]', () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toEqual(3);
  });

  it('input: nums = [2,2,2,2,2]', () => {
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toEqual(1);
  });
});
