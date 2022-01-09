/**
 * @file 数组: 搜索旋转排序数组
 */
export default function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] !== target) {
      left++;
    }

    if (nums[right] !== target) {
      right--;
    }

    if (nums[left] === target) {
      return left;
    }

    if (nums[right] === target) {
      return right;
    }
  }

  return -1;
}
