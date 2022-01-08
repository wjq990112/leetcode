/**
 * @file 数组: 三数之和
 */
import threeSum from '../three_sum';

describe('数组: 三数之和', () => {
  it('input: nums = [-1,0,1,2,-1,-4]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it('input: nums = []', () => {
    expect(threeSum([])).toEqual([]);
  });

  it('input: nums = [0]', () => {
    expect(threeSum([0])).toEqual([]);
  });
});
