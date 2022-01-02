/**
 * @file 字符串: 字符串的排列
 */
export default function checkInclusion(s1: string, s2: string): boolean {
  let result = false;
  const s1Len = s1.length;
  const s2Len = s2.length;

  if (s2Len < s1Len) {
    return result;
  }

  for (let i = 0; i < s2Len; i++) {
    const startIndex = i;
    const endIndex = i + s1Len;

    if (endIndex > s2Len) {
      break;
    }

    let resStr = s1;
    const subStr = s2.slice(startIndex, endIndex);

    for (let j = 0, subStrLen = subStr.length; j < subStrLen; j++) {
      const char = subStr[j];
      const indexOfChar = resStr.indexOf(char);
      if (indexOfChar < 0) {
        break;
      }
      resStr = resStr.slice(0, indexOfChar) + resStr.slice(indexOfChar + 1);
    }

    if (!resStr.length) {
      result = true;
      break;
    }
  }

  return result;
}
