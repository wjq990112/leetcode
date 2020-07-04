/**
 * @file 数组: 移动零
 */
export default function moveZeroes(nums: number[]): void {
  let len = nums.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    const element = nums[i];
    if (!element) {
      count++;
      nums.splice(i, 1);
      i--;
      len--;
    }
  }

  nums.push(...new Array(count).fill(0));
}
