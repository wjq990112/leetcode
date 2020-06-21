/**
 * @file 字符串: 单词搜索 II
 */
import findWords from '../06.find_words';

describe('字符串: 单词搜索 II', () => {
  it('input: [["a"]], ["ab"]', () => {
    expect(findWords([['a']], ['ab'])).toEqual([]);
  });

  it('input: [["a","a"]], ["a"]', () => {
    expect(findWords([['a', 'a']], ['a'])).toEqual(['a']);
  });

  it('input: [["a","b"],["c","d"]], ["acdb"]', () => {
    expect(
      findWords(
        [
          ['a', 'b'],
          ['c', 'd']
        ],
        ['acdb']
      )
    ).toEqual(['acdb']);
  });

  it(`input: [
               ['o','a','a','n'],
               ['e','t','a','e'],
               ['i','h','k','r'],
               ['i','f','l','v']
             ], ["oath","pea","eat","rain"]`, () => {
    expect(
      findWords(
        [
          ['o', 'a', 'a', 'n'],
          ['e', 't', 'a', 'e'],
          ['i', 'h', 'k', 'r'],
          ['i', 'f', 'l', 'v']
        ],
        ['oath', 'pea', 'eat', 'rain']
      )
    ).toEqual(['oath', 'eat']);
  });
});
