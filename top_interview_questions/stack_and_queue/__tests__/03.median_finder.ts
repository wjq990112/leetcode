/**
 * @file 堆/栈/队列: 数据流的中位数
 */
import MedianFinder from '../03.median_finder';

describe('堆/栈/队列: 数据流的中位数', () => {
  it('input: 2, 3, 4', () => {
    const queue = new MedianFinder();
    queue.addNum(2);
    expect(queue.findMedian()).toEqual(2);
    queue.addNum(3);
    expect(queue.findMedian()).toEqual(2.5);
    queue.addNum(4);
    expect(queue.findMedian()).toEqual(3);
  });

  it('input: -1, -2, -3, -4, -5', () => {
    const queue = new MedianFinder();
    queue.addNum(-1);
    expect(queue.findMedian()).toEqual(-1);
    queue.addNum(-2);
    expect(queue.findMedian()).toEqual(-1.5);
    queue.addNum(-3);
    expect(queue.findMedian()).toEqual(-2);
    queue.addNum(-4);
    expect(queue.findMedian()).toEqual(-2.5);
  });

  it('input: 0, 0', () => {
    const queue = new MedianFinder();
    queue.addNum(0);
    expect(queue.findMedian()).toEqual(0);
    queue.addNum(0);
    expect(queue.findMedian()).toEqual(0);
  });

  it('input: 6, 10, 2, 6, 5, 0, 6, 3, 1, 0, 0', () => {
    const queue = new MedianFinder();
    queue.addNum(6);
    expect(queue.findMedian()).toEqual(6);
    queue.addNum(10);
    expect(queue.findMedian()).toEqual(8);
    queue.addNum(2);
    expect(queue.findMedian()).toEqual(6);
    queue.addNum(6);
    expect(queue.findMedian()).toEqual(6);
    queue.addNum(5);
    expect(queue.findMedian()).toEqual(6);
    queue.addNum(0);
    expect(queue.findMedian()).toEqual(5.5);
  });
});
