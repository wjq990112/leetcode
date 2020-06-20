/**
 * @file 开始之前: 多数元素
 */
import majorityElement from '../02.majority_element';

describe('开始之前: 多数元素', () => {
  it('input: [1]', () => {
    expect(majorityElement([1])).toEqual(1);
  });

  it('input: [3,2,3]', () => {
    expect(majorityElement([3, 2, 3])).toEqual(3);
  });

  it('input: [2,2,1,1,1,2,2]', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
  });
});
