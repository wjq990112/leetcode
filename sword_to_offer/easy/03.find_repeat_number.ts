/**
 * @file 面试题03. 数组中重复的数字
 */
export default function findRepeatNumber(nums: number[]): number {
  const set = new Set();

  for (let item of nums) {
    if (set.has(item)) {
      return item;
    } else {
      set.add(item);
    }
  }

  return nums[0];
}
