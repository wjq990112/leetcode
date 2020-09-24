/**
 * @file 模拟面试: 快乐数
 */
import isHappy from '../is_happy';

describe('模拟面试: 快乐数', () => {
  it('input: 19', () => {
    expect(isHappy(19)).toBeTruthy();
  });

  it('input: 2', () => {
    expect(isHappy(2)).toBeFalsy();
  });
});
