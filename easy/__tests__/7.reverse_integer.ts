/**
 * @file 7. 整数反转
 */
import reverseInteger from '../7.reverse_integer';

describe('7. 整数反转', () => {
  it('input: 123', () => {
    expect(reverseInteger(123)).toEqual(321);
  });
  it('input: -123', () => {
    expect(reverseInteger(-123)).toEqual(-321);
  });
  it('input: 120', () => {
    expect(reverseInteger(120)).toEqual(21);
  });
  it('input: 1534236469', () => {
    expect(reverseInteger(1534236469)).toEqual(0);
  });
});
