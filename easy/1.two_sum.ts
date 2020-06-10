/**
 * @file 1. 两数之和
 */
export default function twoSum(nums: number[], target: number): number[] {
  for (let i = 0, len = nums.length; i < len - 1; i++) {
    for (let j = len - 1; j > i; j--) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
