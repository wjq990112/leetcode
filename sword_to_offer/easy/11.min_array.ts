/**
 * @file 面试题11. 旋转数组的最小数字
 */
export default function minArray(numbers: number[]): number {
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0, len = numbers.length; i < len; i++) {
    if (numbers[i + 1] && numbers[i] > numbers[i + 1]) {
      return numbers[i + 1];
    }

    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}
