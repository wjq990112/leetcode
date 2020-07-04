/**
 * @file 数组: 打乱数组
 */
export default class Solution {
  nums: number[];
  shuffleArr: number[];

  constructor(nums: number[]) {
    this.nums = [...nums];
    this.shuffleArr = [...nums];
  }

  reset(): number[] {
    return this.nums;
  }

  shuffle(): number[] {
    for (let i = 0, len = this.shuffleArr.length; i < len; i++) {
      const randomNum = Math.floor(Math.random() * len);
      [this.shuffleArr[i], this.shuffleArr[randomNum]] = [
        this.shuffleArr[randomNum],
        this.shuffleArr[i]
      ];
    }

    return this.shuffleArr;
  }
}
