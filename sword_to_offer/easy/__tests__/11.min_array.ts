/**
 * @file 面试题11. 旋转数组的最小数字
 */
import minArray from '../11.min_array';

describe('面试题11. 旋转数组的最小数字', () => {
  it('input: [1]', () => {
    expect(minArray([1])).toEqual(1);
  });

  it('input: [1,3,5]', () => {
    expect(minArray([1, 3, 5])).toEqual(1);
  });

  it('input: [3,4,5,1,2]', () => {
    expect(minArray([3, 4, 5, 1, 2])).toEqual(1);
  });

  it('input: [2,2,2,0,1]', () => {
    expect(minArray([2, 2, 2, 0, 1])).toEqual(0);
  });
});
