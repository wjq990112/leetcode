/**
 * @file 面试题06. 从尾到头打印链表
 */
import reversePrint, { ListNode } from '../06.reverse_print';

// 构造链表
const constructList = (arr: number[]): ListNode | null => {
  let len = arr.length;
  let head = new ListNode();
  if (len) {
    let node = new ListNode(arr[0]);
    head.next = node;
    for (let i = 1; i < len; i++) {
      let nextNode = new ListNode(arr[i]);
      node.next = nextNode;
      node = node.next;
    }
    return head.next;
  } else {
    return null;
  }
};

describe('面试题06. 从尾到头打印链表', () => {
  it('input: []', () => {
    expect(reversePrint(constructList([]))).toEqual([]);
  });

  it('input: [1]', () => {
    expect(reversePrint(constructList([1]))).toEqual([1]);
  });

  it('input: [1,3,2]', () => {
    expect(reversePrint(constructList([1, 3, 2]))).toEqual([2, 3, 1]);
  });
});
