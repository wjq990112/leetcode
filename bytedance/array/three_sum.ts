/**
 * @file 数组: 三数之和
 */
export default function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  if (nums.length < 3) {
    return result;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > 0) continue;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      const leftNum = nums[leftPointer];
      const rightNum = nums[rightPointer];
      const sum = num + leftNum + rightNum;

      if (sum === 0) {
        result.push([num, leftNum, rightNum]);
        while (
          leftPointer < rightPointer &&
          leftNum === nums[leftPointer + 1]
        ) {
          leftPointer++;
        }
        while (
          leftPointer < rightPointer &&
          rightPointer === nums[rightPointer - 1]
        ) {
          rightPointer--;
        }
        leftPointer++;
        rightPointer--;
        continue;
      }

      if (sum > 0) {
        rightPointer--;
        continue;
      }

      if (sum < 0) {
        leftPointer++;
      }
    }
  }

  return result;
}
