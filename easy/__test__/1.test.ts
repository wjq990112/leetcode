/**
 * @file 1. 两数之和
 */
import _1 from '../1';

describe('1. 两数之和', () => {
  it('nums = [2, 7, 11, 15], target = 9', () => {
    expect(_1([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it('nums = [0, 4, 3, 0], target = 0', () => {
    expect(_1([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });
  it('nums = [-3, 4, 3, 90], target = 0', () => {
    expect(_1([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });
});
