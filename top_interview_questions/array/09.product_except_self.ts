/**
 * @file 数组: 除自身以外数组的乘积
 */
export default function productExceptSelf(nums: number[]): number[] {
  const len = nums.length;
  const res = new Array(len).fill(1);
  let left = 1;
  let right = 1;

  for (let i = 0, j = len - 1; i < len; i++, j--) {
    res[i] *= left;
    res[j] *= right;
    left *= nums[i];
    right *= nums[j];
  }

  return res;
}
