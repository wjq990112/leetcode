/**
 * @file 20. 有效的括号
 */
export default function isValid(s: string): boolean {
  const map = new Map<string, string>([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ]);
  const stack = [];

  for (const char of s) {
    if (map.has(char)) {
      stack.push(char);
    } else {
      if (stack.length) {
        if (map.get(stack.pop() as string) !== char) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return !stack.length;
}
