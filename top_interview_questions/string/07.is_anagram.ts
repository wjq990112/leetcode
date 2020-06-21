/**
 * @file 字符串: 有效的字母异位词
 */
export default function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let str = s.split('');

  for (let char of t) {
    let index = str.indexOf(char);
    if (index !== -1) {
      str.splice(index, 1);
    } else {
      return false;
    }
  }

  return !str.length;
}
