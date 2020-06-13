/**
 * @file 27. 移除元素
 */
import removeElement from '../27.remove_element';

describe('27. 移除元素', () => {
  it('input: nums = [3,2,2,3], val = 3', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
  });

  it('input: nums = [0,1,2,2,3,0,4,2], val = 2', () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
  });
});
