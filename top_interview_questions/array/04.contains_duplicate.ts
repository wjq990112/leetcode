/**
 * @file 数组: 存在重复元素
 */
export default function containsDuplicate(nums: number[]): boolean {
  let set = new Set(nums);

  return nums.length !== set.size;
}
