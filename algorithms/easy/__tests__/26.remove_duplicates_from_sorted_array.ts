/**
 * @file 26. 删除排序数组中的重复项
 */
import removeDuplicates from '../26.remove_duplicates_from_sorted_array';

describe('26. 删除排序数组中的重复项', () => {
  it('input: [1,1,2]', () => {
    expect(removeDuplicates([1, 1, 2])).toEqual(2);
  });

  it('input: [0,0,1,1,1,2,2,3,3,4]', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
  });
});
