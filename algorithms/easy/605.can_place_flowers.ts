/**
 * @file 605. 种花问题
 */
export default function canPlaceFlowers(
  flowerbed: number[],
  n: number
): boolean {
  const newArr = [0, ...flowerbed, 0];

  let result = 0;

  for (let i = 1; i < newArr.length - 1; i++) {
    const element = newArr[i];
    if (element) {
      i++;
    } else {
      if (newArr[i - 1] === 0 && newArr[i + 1] === 0) {
        result++;
        i++;
      }
    }
  }

  return result >= n;
}
