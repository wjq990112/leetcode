/**
 * @file 字符串: 单词拆分
 */
import wordBreak from '../03.word_break';

describe('字符串: 单词拆分', () => {
  it('input: "leetcode", ["leet","code"]', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toBeTruthy();
  });

  it('input: "applepenapple", ["apple","pen"]', () => {
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toBeTruthy();
  });

  it('input: "catsandog", ["cats","dog","sand","and","cat"]', () => {
    expect(
      wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])
    ).toBeFalsy();
  });
});
