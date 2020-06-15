/**
 * @file 面试题09. 用两个栈实现队列
 */
interface ICQueue {
  stack1: number[];
  stack2: number[];
  appendTail: (value: number) => void;
  deleteHead: () => number;
}

export default class CQueue implements ICQueue {
  stack1: number[] = [];
  stack2: number[] = [];

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  appendTail(value: number): void {
    this.stack1.push(value);
  }

  deleteHead(): number {
    if (this.stack2.length) {
      return this.stack2.pop() as number;
    }
    if (!this.stack1.length) return -1;
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop() as number);
    }
    return this.stack2.pop() as number;
  }
}
