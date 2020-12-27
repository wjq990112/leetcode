/**
 * @file 205. 同构字符串
 */
export default function isIsomorphic(s: string, t: string): boolean {
  for (let i = 0, len = s.length; i < len; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (s.indexOf(sChar) !== t.indexOf(tChar)) {
      return false;
    }
  }

  return true;
}
