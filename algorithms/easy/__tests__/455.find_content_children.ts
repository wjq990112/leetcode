/**
 * @file 455. 分发饼干
 */
import findContentChildren from '../455.find_content_children';

describe('455. 分发饼干', () => {
  it('input: g = [1,2,3], s = [1,1]', () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toEqual(1);
  });

  it('input: g = [1,2], s = [1,2,3]', () => {
    expect(findContentChildren([1, 2], [1, 2, 3])).toEqual(2);
  });

  it('input: g = [10,9,8,7], s = [5,6,7,8]', () => {
    expect(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])).toEqual(2);
  });
});
