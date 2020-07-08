/**
 * @file 堆/栈/队列: 数据流的中位数
 */
export default class MedianFinder {
  queue: number[];

  constructor() {
    this.queue = [];
  }

  addNum(num: number): void {
    let len = this.queue.length;
    if (len < 1) {
      this.queue.push(num);
    } else if (typeof this.queue[0] === 'number' && this.queue[0] > num) {
      this.queue.unshift(num);
    } else if (
      typeof this.queue[len - 1] === 'number' &&
      this.queue[len - 1] <= num
    ) {
      this.queue.push(num);
    } else {
      for (let i = len - 1; i > -1; i--) {
        const element = this.queue[i];
        if (num >= element) {
          this.queue.splice(i + 1, 0, num);
          break;
        }
      }
    }
  }

  findMedian(): number {
    let len = this.queue.length;
    let mid = Math.floor(len / 2);
    let res =
      len % 2 ? this.queue[mid] : (this.queue[mid - 1] + this.queue[mid]) / 2;
    return res;
  }
}
