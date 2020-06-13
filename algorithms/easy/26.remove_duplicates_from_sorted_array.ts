/**
 * @file 26. 删除排序数组中的重复项
 */
export default function removeDuplicates(nums: number[]): number {
  let len = nums.length;
  const set = new Set();

  for (let i = 0; i < len; i++) {
    if (set.has(nums[i])) {
      nums.splice(i--, 1);
      len--;
    } else {
      set.add(nums[i]);
    }
  }

  return len;
}
