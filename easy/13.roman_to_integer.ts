/**
 * @file 13. 罗马数字转整数
 */
export default function romanToInt(s: string): number {
  const map = new Map<string, number>([
    ['E', 0],
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);

  s += 'E';
  let res = 0;

  for (let i = 0, len = s.length - 1; i < len; i++) {
    if ((map.get(s[i]) as number) >= (map.get(s[i + 1]) as number)) {
      res += map.get(s[i]) as number;
    } else {
      res += (map.get(s[i + 1]) as number) - (map.get(s[i]) as number);
      i++;
    }
  }

  return res;
}
