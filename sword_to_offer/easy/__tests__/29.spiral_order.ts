/**
 * @file 面试题29. 顺时针打印矩阵
 */
import spiralOrder from '../29.spiral_order';

describe('面试题29. 顺时针打印矩阵', () => {
  it('input: []', () => {
    expect(spiralOrder([])).toEqual([]);
  });

  it('input: [[1]]', () => {
    expect(spiralOrder([[1]])).toEqual([1]);
  });

  it('input: [[6,9,7]]', () => {
    expect(spiralOrder([[6, 9, 7]])).toEqual([6, 9, 7]);
  });

  it(`input: [
               [1,2,3],
               [4,5,6],
               [7,8,9]
             ]`, () => {
    expect(
      spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ])
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it(`input: [
               [1,2,3,4],
               [5,6,7,8],
               [9,10,11,12]
             ]`, () => {
    expect(
      spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
      ])
    ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });
});
