/**
 * @file 316. 去除重复字母
 */
import removeDuplicateLetters from '../316.remove_duplicate_letters';

describe('316. 去除重复字母', () => {
  it('input: s = "bcabc"', () => {
    expect(removeDuplicateLetters('bcabc')).toEqual('abc');
  });

  it('input: s = "cbacdcbc"', () => {
    expect(removeDuplicateLetters('cbacdcbc')).toEqual('acdb');
  });
});
