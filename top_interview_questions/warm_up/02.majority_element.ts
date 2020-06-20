/**
 * @file 开始之前: 多数元素
 */
export default function majorityElement(nums: number[]): number {
  let half = Math.floor(nums.length / 2);
  let map = new Map();

  for (let item of nums) {
    if (map.has(item)) {
      let num = map.get(item);
      map.set(item, num + 1);
      if (num + 1 > half) {
        return item;
      }
    } else {
      map.set(item, 1);
    }
  }

  return nums[0];
}
