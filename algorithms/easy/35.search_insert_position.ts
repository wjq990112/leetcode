/**
 * @file 35. 搜索插入位置
 */
export default function searchInsert(nums: number[], target: number): number {
  let idx = nums.length >> 1;
  let len = nums.length;
  while (nums[idx] != target) {
    if (nums[idx] < target) {
      if (len <= 1) {
        return idx + 1;
      }
      len = len >> 1;
      idx += Math.ceil(len / 2);
    } else {
      if (len <= 1) {
        return idx;
      }
      len = len >> 1;
      idx -= Math.ceil(len / 2);
    }
  }
  return idx;
}
