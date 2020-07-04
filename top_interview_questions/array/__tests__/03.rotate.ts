/**
 * @file 数组: 旋转数组
 */
import rotate from '../03.rotate';

describe('数组: 旋转数组', () => {
  it('input: [1,2,3,4,5,6,7], 3', () => {
    const params = [1, 2, 3, 4, 5, 6, 7];
    rotate(params, 3);
    expect(params).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('input: [-1,-100,3,99], 2', () => {
    const params = [-1, -100, 3, 99];
    rotate(params, 2);
    expect(params).toEqual([3, 99, -1, -100]);
  });
});
