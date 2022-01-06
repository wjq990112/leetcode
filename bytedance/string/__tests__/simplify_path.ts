/**
 * @file 字符串: 简化路径
 */
import simplifyPath from '../simplify_path';

describe('字符串: 简化路径', () => {
  it('input: path = "/home/"', () => {
    expect(simplifyPath('/home/')).toEqual('/home');
  });

  it('input: path = "/../"', () => {
    expect(simplifyPath('/../')).toEqual('/');
  });

  it('input: path = "/home//foo/"', () => {
    expect(simplifyPath('/home//foo/')).toEqual('/home/foo');
  });

  it('input: path = "/a/./b/../../c/"', () => {
    expect(simplifyPath('/a/./b/../../c/')).toEqual('/c');
  });
});
