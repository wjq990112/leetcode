/**
 * @file 数组: 乘积最大子数组
 */
import maxProduct from '../01.max_product';

describe('数组: 乘积最大子数组', () => {
  it('input: [2,3,-2,4]', () => {
    expect(maxProduct([2, 3, -2, 4])).toEqual(6);
  });

  it('input: [-2,0,-1]', () => {
    expect(maxProduct([-2, 0, -1])).toEqual(0);
  });

  it('input: [0,2]', () => {
    expect(maxProduct([0, 2])).toEqual(2);
  });

  it('input: [-2,3,-4]', () => {
    expect(maxProduct([-2, 3, -4])).toEqual(24);
  });

  it('input: [-3,0,1,-2]', () => {
    expect(maxProduct([-3, 0, 1, -2])).toEqual(1);
  });

  it('input: [3,-1,4]', () => {
    expect(maxProduct([3, -1, 4])).toEqual(4);
  });

  it('input: [-1,-2,-3,0]', () => {
    expect(maxProduct([-1, -2, -3, 0])).toEqual(6);
  });
});
