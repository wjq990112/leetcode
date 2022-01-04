/**
 * @file 字符串: 翻转字符串里的单词
 */
export default function reverseWords(s: string): string {
  const strArr = s.trim().split(/\s+/);
  let i = 0;
  let j = strArr.length - 1;

  while (i < j) {
    [strArr[j], strArr[i]] = [strArr[i], strArr[j]];
    i++;
    j--;
  }

  return strArr.join(' ');
}
