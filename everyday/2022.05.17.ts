/**
 * @file 验证外星语词典
 * @url https://leetcode.cn/problems/verifying-an-alien-dictionary/
 */
function isAlienSorted(words: string[], order: string): boolean {
  const map: Record<string, number> = {};
  for (let i = 0; i < order.length; i++) {
    const element = order[i];
    map[element] = i + 1;
  }
  for (let i = 1; i < words.length; i++) {
    let isValid;
    const minLength = Math.min(words[i - 1].length, words[i].length);
    for (let j = 0; j < minLength; j++) {
      const prev = map[words[i - 1][j]];
      const curr = map[words[i][j]];
      if (prev < curr) {
        isValid = true;
        break;
      }
      if (prev > curr) {
        return false;
      }
    }
    if (!isValid) {
      if (words[i - 1].length > words[i].length) {
        return false;
      }
    }
  }
  return true;
}
