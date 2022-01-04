/**
 * @file 字符串: 翻转字符串里的单词
 */
import reverseWords from '../reverse_words';

describe('字符串: 翻转字符串里的单词', () => {
  it('input: s = "the sky is blue"', () => {
    expect(reverseWords('the sky is blue')).toEqual('blue is sky the');
  });

  it('input: s = "  hello world  "', () => {
    expect(reverseWords('  hello world  ')).toEqual('world hello');
  });

  it('input: s = "a good   example"', () => {
    expect(reverseWords('a good   example')).toEqual('example good a');
  });

  it('input: s = "  Bob    Loves  Alice   "', () => {
    expect(reverseWords('  Bob    Loves  Alice   ')).toEqual('Alice Loves Bob');
  });

  it('input: s = "Alice does not even like bob"', () => {
    expect(reverseWords('Alice does not even like bob')).toEqual(
      'bob like even not does Alice'
    );
  });
});
