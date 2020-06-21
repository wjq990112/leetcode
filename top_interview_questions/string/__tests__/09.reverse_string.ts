/**
 * @file 字符串: 反转字符串
 */
import reverseString from '../09.reverse_string';

describe('字符串: 反转字符串', () => {
  it('input: ["h","e","l","l","o"]', () => {
    let s = ['h', 'e', 'l', 'l', 'o'];
    reverseString(s);
    expect(s).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  it('input: ["H","a","n","n","a","h"]', () => {
    let s = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString(s);
    expect(s).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
