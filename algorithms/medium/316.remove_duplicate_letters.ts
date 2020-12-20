/**
 * @file 316. 去除重复字母
 */
export default function removeDuplicateLetters(s: string): string {
  if (!s) {
    return '';
  }

  interface Dictionary {
    [key: string]: number;
  }

  const map: Dictionary = {};
  const stack: string[] = [];

  for (const char of s) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  for (const char of s) {
    if (!stack.includes(char)) {
      let len = 0;
      while (
        (len = stack.length) &&
        char < stack[len - 1] &&
        map[stack[len - 1]] > 0
      ) {
        stack.pop();
      }
      stack.push(char);
    }
    map[char]--;
  }

  return stack.join('');
}
