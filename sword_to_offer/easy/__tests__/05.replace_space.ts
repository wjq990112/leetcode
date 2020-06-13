/**
 * @file 面试题05. 替换空格
 */
import replaceSpace from '../05.replace_space';

describe('面试题05. 替换空格', () => {
  it('input: "We are happy."', () => {
    expect(replaceSpace('We are happy.')).toEqual('We%20are%20happy.');
  });
});
