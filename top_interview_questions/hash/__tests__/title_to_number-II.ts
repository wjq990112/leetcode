/**
 * @file 哈希与映射: Excel 表序列号-I
 */
import titleToNumber from '../title_to_number-II';

describe('哈希与映射: Excel 表序列号', () => {
  it('input: "A"', () => {
    expect(titleToNumber('A')).toEqual(1);
  });

  it('input: "AA"', () => {
    expect(titleToNumber('AA')).toEqual(27);
  });

  it('input: "ZY"', () => {
    expect(titleToNumber('ZY')).toEqual(701);
  });
});
