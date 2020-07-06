/**
 * @file 数组: 递增的三元子序列
 */
export default function increasingTriplet(nums: number[]): boolean {
  let num1 = nums[0];
  let num2 = null;

  for (let i = 0, len = nums.length; i < len; i++) {
    const element = nums[i];
    if (num2 !== null && num2 < element) {
      return true;
    }
    if (num1 < element) {
      num2 = element;
    } else {
      num1 = element;
    }
  }

  return false;
}
