/**
 * @file 20. 有效的括号
 */
import isValid from '../20.valid_parentheses';

describe('20. 有效的括号', () => {
  it('input: "()"', () => {
    expect(isValid('()')).toBeTruthy();
  });

  it('input: "()[]{}"', () => {
    expect(isValid('()[]{}')).toBeTruthy();
  });

  it('input: "(]"', () => {
    expect(isValid('(]')).toBeFalsy();
  });

  it('input: "([)]"', () => {
    expect(isValid('([)]')).toBeFalsy();
  });

  it('input: "{[]}"', () => {
    expect(isValid('{[]}')).toBeTruthy();
  });
});
