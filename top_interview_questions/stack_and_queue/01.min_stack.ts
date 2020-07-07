/**
 * @file 堆/栈/队列: 最小栈
 */
export default class MinStack {
  stack: number[];
  minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [Infinity];
  }

  push(x: number): void {
    let len = this.minStack.length;
    this.minStack.push(Math.min(this.minStack[len - 1], x));
    this.stack.push(x);
  }

  pop(): void {
    this.minStack.pop();
    this.stack.pop();
  }

  top(): number {
    let len = this.stack.length;
    return this.stack[len - 1];
  }

  getMin(): number {
    let len = this.minStack.length;
    return this.minStack[len - 1];
  }
}
