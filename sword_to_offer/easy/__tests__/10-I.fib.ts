/**
 * @file 面试题10-I. 斐波那契数列
 */
import fib from '../10-I.fib';

describe('面试题10- I. 斐波那契数列', () => {
  it('input: 2', () => {
    expect(fib(2)).toEqual(1);
  });

  it('input: 5', () => {
    expect(fib(5)).toEqual(5);
  });

  it('input: 10', () => {
    expect(fib(10)).toEqual(55);
  });

  it('input: 45', () => {
    expect(fib(45)).toEqual(134903163);
  });

  it('input: 81', () => {
    expect(fib(81)).toEqual(107920472);
  });
});
