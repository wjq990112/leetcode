/**
 * @file 字符串: 实现模板字符串
 */
import stringTemplate from '../08.string_template';

describe('字符串: 实现模板字符串', () => {
  it('input: "test", {}', () => {
    expect(stringTemplate('test', {})).toEqual('test');
  });

  it('input: "hello, ${name}", { name: "jack" }', () => {
    expect(stringTemplate('hello, ${name}', { name: 'jack' })).toEqual(
      'hello, jack'
    );
  });

  it('input: "test complex template: ${name} should do ${things}", { name: "Jack", things: "LeetCode" }', () => {
    expect(
      stringTemplate('test complex template: ${name} should do ${things}', {
        name: 'Jack',
        things: 'LeetCode'
      })
    ).toEqual('test complex template: Jack should do LeetCode');
  });
});
