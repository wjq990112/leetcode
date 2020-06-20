/**
 * @file 开始之前: 只出现一次的数字
 */
export default function singleNumber(nums: number[]): number {
  let ans = 0;

  for (let item of nums) {
    ans ^= item;
  }

  return ans;
}
