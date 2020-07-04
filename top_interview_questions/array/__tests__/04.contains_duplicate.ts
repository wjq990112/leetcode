/**
 * @file 数组: 存在重复元素
 */
import containsDuplicate from '../04.contains_duplicate';

describe('数组: 存在重复元素', () => {
  it('input: [1,2,3,1]', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
  });

  it('input: [1,2,3,4]', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
  });

  it('input: [1,1,1,3,3,4,3,2,4,2]', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
  });
});
