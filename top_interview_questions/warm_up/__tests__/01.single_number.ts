/**
 * @file 开始之前: 只出现一次的数字
 */
import singleNumber from '../01.single_number';

describe('开始之前: 只出现一次的数字', () => {
  it('input: [2,2,1]', () => {
    expect(singleNumber([2, 2, 1])).toEqual(1);
  });

  it('input: [4,1,2,1,2]', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
  });
});
