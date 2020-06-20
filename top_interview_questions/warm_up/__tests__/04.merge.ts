/**
 * @file 开始之前: 合并两个有序数组
 */
import merge from '../04.merge';

describe('开始之前: 合并两个有序数组', () => {
  it('input: [1,2,3,0,0,0], 3, [2,5,6], 3', () => {
    let nums1 = [1, 2, 3, 0, 0, 0];
    let m = 3;
    let nums2 = [2, 5, 6];
    let n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('input: [0], 0, [1], 1', () => {
    let nums1 = [0];
    let m = 0;
    let nums2 = [1];
    let n = 1;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });
});
