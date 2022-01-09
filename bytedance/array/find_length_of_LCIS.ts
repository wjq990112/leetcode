/**
 * @file 数组: 最长连续递增序列
 */
export default function findLengthOfLCIS(nums: number[]): number {
  let maxLen = 1;
  let len = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      len++;
      maxLen = Math.max(maxLen, len);
    } else {
      len = 1;
    }
  }

  return maxLen;
}
