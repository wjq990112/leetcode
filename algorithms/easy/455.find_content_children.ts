/**
 * @file 455. 分发饼干
 */
export default function findContentChildren(g: number[], s: number[]): number {
  const sortedG = g.sort((curr, next) => curr - next);
  const sortedS = s.sort((curr, next) => curr - next);

  let gIndex = 0;
  let sIndex = 0;

  let result = 0;

  while (sIndex < s.length) {
    if (sortedG[gIndex] <= sortedS[sIndex]) {
      result++;
      gIndex++;
    }
    sIndex++;
  }

  return result;
}
