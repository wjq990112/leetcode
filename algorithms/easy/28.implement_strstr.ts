/**
 * @file 28. 实现 strStr()
 */
export default function strStr(haystack: string, needle: string): number {
  if (!needle.length) {
    return 0;
  }

  return haystack.indexOf(needle);
}
