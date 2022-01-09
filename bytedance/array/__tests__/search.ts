/**
 * @file 数组: 搜索旋转排序数组
 */
import search from '../search';

describe('数组: 搜索旋转排序数组', () => {
  it('input: nums = [4,5,6,7,0,1,2], target = 0', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
  });

  it('input: nums = [4,5,6,7,0,1,2], target = 3', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
  });

  it('input: nums = [1], target = 0', () => {
    expect(search([1], 0)).toEqual(-1);
  });
});
