/**
 * @file 205. 同构字符串
 */
import isIsomorphic from '../205.is_isomorphic';

describe('205. 同构字符串', () => {
  it('input: s = "egg", t = "add"', () => {
    expect(isIsomorphic('egg', 'add')).toBeTruthy();
  });

  it('input: s = "foo", t = "bar"', () => {
    expect(isIsomorphic('foo', 'bar')).toBeFalsy();
  });

  it('input: s = "paper", t = "title"', () => {
    expect(isIsomorphic('paper', 'title')).toBeTruthy();
  });
});
