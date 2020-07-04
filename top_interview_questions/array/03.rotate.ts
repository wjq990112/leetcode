/**
 * @file 数组: 旋转数组
 */
export default function rotate(nums: number[], k: number): void {
  let position = nums.length - k;

  nums.unshift(...nums.splice(position));
}
