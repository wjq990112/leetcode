/**
 * @file 堆/栈/队列: 最小栈
 */
import MinStack from '../01.min_stack';

describe('堆/栈/队列: 最小栈', () => {
  it('input: 1, 2', () => {
    const stack = new MinStack();
    stack.push(1);
    stack.push(2);
    expect(stack.top()).toEqual(2);
    expect(stack.getMin()).toEqual(1);
    stack.pop();
    expect(stack.top()).toEqual(1);
    expect(stack.getMin()).toEqual(1);
  });

  it('input: 2, 1', () => {
    const stack = new MinStack();
    stack.push(2);
    stack.push(1);
    expect(stack.top()).toEqual(1);
    expect(stack.getMin()).toEqual(1);
    stack.pop();
    expect(stack.top()).toEqual(2);
    expect(stack.getMin()).toEqual(2);
  });

  it('input: 0, 1', () => {
    const stack = new MinStack();
    stack.push(0);
    stack.push(1);
    stack.push(0);
    expect(stack.getMin()).toEqual(0);
    stack.pop();
    expect(stack.getMin()).toEqual(0);
  });
});
