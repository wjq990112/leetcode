/**
 * @file 14. 最长公共前缀
 */
export default function longestCommonPrefix(strs: string[]): string {
  let arrLen = strs.length;
  let res = '';
  let i = 0;

  if (!arrLen || !strs[0].length) {
    return res;
  }

  while (true) {
    let str = strs[0].slice(i, i + 1);
    let isEqual = strs.every((item) => item.slice(i, i + 1) === str);
    if (!isEqual) {
      return res;
    }
    res += str;
    i++;
    if (i >= strs[0].length) {
      return res;
    }
  }
}
