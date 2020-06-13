/**
 * @file 面试题05. 替换空格
 */
export default function replaceSpace(s: string): string {
  const arr = s.split('');

  const res = arr.map((item) => {
    if (item === ' ') {
      return '%20';
    }
    return item;
  });

  return res.join('');
}
