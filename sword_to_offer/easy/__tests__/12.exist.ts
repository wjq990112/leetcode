/**
 * @file 面试题12. 矩阵中的路径
 */
import exist from '../12.exist';

describe('面试题12. 矩阵中的路径', () => {
  it('input: [], ""', () => {
    expect(exist([], '')).toBeTruthy();
  });

  it('input: [], "abcd"', () => {
    expect(exist([], 'abcd')).toBeFalsy();
  });

  it('input: [["a","a"]], "aa"', () => {
    expect(exist([['a', 'a']], 'aa')).toBeTruthy();
  });

  it('input: [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"', () => {
    expect(
      exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E']
        ],
        'ABCCED'
      )
    ).toBeTruthy();
  });

  it('input: [["a","b"],["c","d"]], "abcd"', () => {
    expect(
      exist(
        [
          ['a', 'b'],
          ['c', 'd']
        ],
        'abcd'
      )
    ).toBeFalsy();
  });
});
