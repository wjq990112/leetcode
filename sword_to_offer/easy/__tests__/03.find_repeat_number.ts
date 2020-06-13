/**
 * @file 面试题03. 数组中重复的数字
 */
import findRepeatNumber from '../03.find_repeat_number';

describe('面试题03. 数组中重复的数字', () => {
  it('input: [2, 3, 1, 0, 2, 5, 3]', () => {
    expect(`${findRepeatNumber([2, 3, 1, 0, 2, 5, 3])}`).toMatch(/2|3/g);
  });
});
