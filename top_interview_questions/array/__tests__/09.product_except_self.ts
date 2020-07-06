/**
 * @file 数组: 除自身以外数组的乘积
 */
import productExceptSelf from '../09.product_except_self';

describe('数组: 除自身以外数组的乘积', () => {
  it('input: [1,2,3,4]', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
});
