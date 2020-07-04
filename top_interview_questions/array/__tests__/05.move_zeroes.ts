/**
 * @file 数组: 移动零
 */
import moveZeroes from '../05.move_zeroes';

describe('数组: 移动零', () => {
  it('input: [0,1,0,3,12]', () => {
    const params = [0, 1, 0, 3, 12];
    moveZeroes(params);
    expect(params).toEqual([1, 3, 12, 0, 0]);
  });

  it('input: [0,0,1]', () => {
    const params = [0, 0, 1];
    moveZeroes(params);
    expect(params).toEqual([1, 0, 0]);
  });
});
