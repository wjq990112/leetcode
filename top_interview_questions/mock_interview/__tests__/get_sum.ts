/**
 * @file 模拟面试: 两数之和
 */
import getSum from '../get_sum';

describe('模拟面试: 两数之和', () => {
  it('input: 1, 2', () => {
    expect(getSum(1, 2)).toEqual(3);
  });

  it('input: 4, 5', () => {
    expect(getSum(4, 5)).toEqual(9);
  });
});
