/**
 * @file 堆/栈/队列: 数组中的第K个最大元素
 */
export default function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => b - a)[k - 1];
}
