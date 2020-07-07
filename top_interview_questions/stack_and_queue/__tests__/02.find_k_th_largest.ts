/**
 * @file 堆/栈/队列: 数组中的第K个最大元素
 */
import findKthLargest from '../02.find_k_th_largest';

describe('堆/栈/队列: 数组中的第K个最大元素', () => {
  it('input: [3,2,1,5,6,4], 2', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
  });

  it('input: [3,2,3,1,2,4,5,5,6], 4', () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4);
  });
});
