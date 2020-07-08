/**
 * @file 堆/栈/队列: 有序矩阵中第K小的元素
 */
import kthSmallest from '../04.k_th_smallest';

describe('堆/栈/队列: 有序矩阵中第K小的元素', () => {
  it(`input: [
               [ 1,  5,  9],
               [10, 11, 13],
               [12, 13, 15]
             ], 8`, () => {
    expect(
      kthSmallest(
        [
          [1, 5, 9],
          [10, 11, 13],
          [12, 13, 15]
        ],
        8
      )
    ).toEqual(13);
  });
});
