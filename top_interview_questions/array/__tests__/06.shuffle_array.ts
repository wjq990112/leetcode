/**
 * @file 数组: 打乱数组
 */
import Solution from '../06.shuffle_array';

describe('数组: 打乱数组', () => {
  it('input: [1,2,3]', () => {
    const obj = new Solution([1, 2, 3]);
    expect(obj.shuffle()).toEqual(obj.shuffleArr);
    expect(obj.reset()).toEqual([1, 2, 3]);
  });
});
