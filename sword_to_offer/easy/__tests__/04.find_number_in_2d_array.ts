/**
 * @file 面试题04. 二维数组中的查找
 */
import findNumberIn2DArray from '../04.find_number_in_2d_array';

describe('面试题04. 二维数组中的查找', () => {
  it('input: [], 0', () => {
    expect(findNumberIn2DArray([], 0)).toBeFalsy();
  });

  it('input: [[-5]], -5', () => {
    expect(findNumberIn2DArray([[-5]], -5)).toBeTruthy();
  });

  it('input: [[1, 1]], 1', () => {
    expect(findNumberIn2DArray([[1, 1]], 1)).toBeTruthy();
  });

  it(`input: [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 5`, () => {
    expect(
      findNumberIn2DArray(
        [
          [1, 4, 7, 11, 15],
          [2, 5, 8, 12, 19],
          [3, 6, 9, 16, 22],
          [10, 13, 14, 17, 24],
          [18, 21, 23, 26, 30]
        ],
        5
      )
    ).toBeTruthy();
  });

  it(`input: [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 20`, () => {
    expect(
      findNumberIn2DArray(
        [
          [1, 4, 7, 11, 15],
          [2, 5, 8, 12, 19],
          [3, 6, 9, 16, 22],
          [10, 13, 14, 17, 24],
          [18, 21, 23, 26, 30]
        ],
        20
      )
    ).toBeFalsy();
  });
});
