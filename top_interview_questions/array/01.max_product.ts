/**
 * @file 数组: 乘积最大子数组
 */
export default function maxProduct(nums: number[]): number {
  let prevMin = nums[0];
  let prevMax = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let element = nums[i];
    let temp1 = prevMin * element;
    let temp2 = prevMax * element;
    prevMin = Math.min(temp1, temp2, element);
    prevMax = Math.max(temp1, temp2, element);
    res = Math.max(prevMax, res);
  }

  return res;
}
