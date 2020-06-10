/**
 * @file 1. 两数之和
 */
import twoSum from '../1.two_sum';

describe('1. 两数之和', () => {
  it('input: nums = [2, 7, 11, 15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it('input: nums = [0, 4, 3, 0], target = 0', () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });
  it('input: nums = [-3, 4, 3, 90], target = 0', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });
});
