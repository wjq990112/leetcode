/**
 * @file 面试题10-II. 青蛙跳台阶问题
 */
import numWays from '../10-II.num_ways';

describe('面试题10-II. 青蛙跳台阶问题', () => {
  it('input: 0', () => {
    expect(numWays(0)).toEqual(1);
  });

  it('input: 1', () => {
    expect(numWays(1)).toEqual(1);
  });

  it('input: 2', () => {
    expect(numWays(2)).toEqual(2);
  });

  it('input: 7', () => {
    expect(numWays(7)).toEqual(21);
  });
});
