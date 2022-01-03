/**
 * @file 字符串: 字符串相乘
 */
import multiply from '../multiply';

describe('字符串: 字符串相乘', () => {
  it('input: num1 = "2", num2 = "3"', () => {
    expect(multiply('2', '3')).toEqual('6');
  });

  it('input: num1 = "123", num2 = "456"', () => {
    expect(multiply('123', '456')).toEqual('56088');
  });

  it('input: num1 = "0", num2 = "0"', () => {
    expect(multiply('0', '0')).toEqual('0');
  });
});
