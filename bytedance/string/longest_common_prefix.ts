/**
 * @file 字符串: 最长公共前缀
 */
export default function longestCommonPrefix(strs: string[]): string {
  let prefix = '';

  if (!strs.length) {
    return prefix;
  }

  prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    let j = 0;
    for (; j < str.length; j++) {
      const char = str[j];
      if (char !== prefix[j]) {
        break;
      }
    }
    prefix = prefix.slice(0, j);

    if (!prefix) {
      return prefix;
    }
  }

  return prefix;
}
