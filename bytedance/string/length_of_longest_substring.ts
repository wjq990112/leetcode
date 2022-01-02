/**
 * @file 字符串: 无重复字符的最长子串
 */
export default function lengthOfLongestSubstring(s: string): number {
  let subStr = '';
  let maxLen = 0;

  for (let i = 0, j = 0; i < s.length;) {
    const char = s[j];

    if (char && !subStr.includes(char)) {
      subStr += char;
      j++;
    } else {
      maxLen = maxLen > subStr.length ? maxLen : subStr.length;
      subStr = '';
      i++;
      j = i;
    }
  }

  return maxLen;
}
