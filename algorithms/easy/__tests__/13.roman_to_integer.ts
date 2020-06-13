/**
 * @file 13. 罗马数字转整数
 */
import romanToInt from '../13.roman_to_integer';

describe('13. 罗马数字转整数', () => {
  it('input: "III"', () => {
    expect(romanToInt('III')).toEqual(3);
  });

  it('input: "IV"', () => {
    expect(romanToInt('IV')).toEqual(4);
  });

  it('input: "IX"', () => {
    expect(romanToInt('IX')).toEqual(9);
  });

  it('input: "LVIII"', () => {
    expect(romanToInt('LVIII')).toEqual(58);
  });

  it('input: "MCMXCIV"', () => {
    expect(romanToInt('MCMXCIV')).toEqual(1994);
  });
});
