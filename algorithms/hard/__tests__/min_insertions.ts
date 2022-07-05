import minInsertions from '../min_insertions';

describe('1312. 让字符串成为回文串的最少插入次数', () => {
  it('input: s = "zzazz"', () => {
    expect(minInsertions('zzazz')).toEqual(0);
  });

  it('input: s = "mbadm"', () => {
    expect(minInsertions('mbadm')).toEqual(2);
  });

  it('input: s = "leetcode"', () => {
    expect(minInsertions('leetcode')).toEqual(5);
  });
});
