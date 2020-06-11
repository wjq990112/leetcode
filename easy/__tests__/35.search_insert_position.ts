/**
 * @file 35. 搜索插入位置
 */
import searchInsert from '../35.search_insert_position';

describe('35. 搜索插入位置', () => {
  it('input: [1], 2', () => {
    expect(searchInsert([1], 2)).toEqual(1);
  });

  it('input: [1,3], 0', () => {
    expect(searchInsert([1, 3], 0)).toEqual(0);
  });

  it('input: [1,3,5,6], 5', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
  });

  it('input: [1,3,5,6], 2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
  });

  it('input: [1,3,5,6], 7', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4);
  });

  it('input: [1,3,5,6], 0', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toEqual(0);
  });

  it('input: [1,3,5,7,9], 10', () => {
    expect(searchInsert([1, 3, 5, 7, 9], 10)).toEqual(5);
  });

  it('input: [1,3,5,7,9], 0', () => {
    expect(searchInsert([1, 3, 5, 7, 9], 0)).toEqual(0);
  });
});
