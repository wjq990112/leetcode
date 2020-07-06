/**
 * @file 数组: 两个数组的交集 II
 */
import intersect from '../07.intersect';

describe('数组: 两个数组的交集 II', () => {
  it('input: [1,2,2,1], [2,2]', () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
  });

  it('input: [4,9,5], [9,4,9,8,4]', () => {
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
  });

  it('input: [1,2,2,1], [2]', () => {
    expect(intersect([1, 2, 2, 1], [2])).toEqual([2]);
  });
});
