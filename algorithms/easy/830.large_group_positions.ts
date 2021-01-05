/**
 * @file 830. 较大分组的位置
 */
export default function largeGroupPositions(s: string): number[][] {
  return Array.from(s.matchAll(/(.)\1\1+/g), (v) => [
    v.index,
    v.index + v[0].length - 1
  ]);
}
