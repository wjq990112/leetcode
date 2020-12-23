/**
 * @file 387. 字符串中的第一个唯一字符
 */
export default function firstUniqChar(s: string): number {
  const hashMap: { [key: string]: number } = {};

  for (const char of s) {
    if (hashMap[char]) {
      hashMap[char]++;
    } else {
      hashMap[char] = 1;
    }
  }

  for (const [key, value] of Object.entries(hashMap)) {
    if (value === 1) {
      return s.indexOf(key);
    }
  }

  return -1;
}
