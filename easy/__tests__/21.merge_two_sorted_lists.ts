/**
 * @file 21. 合并两个有序链表
 */
import mergeTwoLists, { ListNode } from '../21.merge_two_sorted_lists';

// 构造链表
const constructList = (arr: Array<number>) => {
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

describe('21. 合并两个有序链表', () => {
  it('input: [1,2,4], [1,3,4]', () => {
    const list1 = constructList([1, 2, 4]);
    const list2 = constructList([1, 3, 4]);
    const result = constructList([1, 1, 2, 3, 4, 4]);
    expect(mergeTwoLists(list1, list2)).toEqual(result);
  });

  it('input: [], []', () => {
    const list1 = constructList([]);
    const list2 = constructList([]);
    const result = constructList([]);
    expect(mergeTwoLists(list1, list2)).toEqual(result);
  });

  it('input: [1], [1]', () => {
    const list1 = constructList([1]);
    const list2 = constructList([1]);
    const result = constructList([1, 1]);
    expect(mergeTwoLists(list1, list2)).toEqual(result);
  });

  it('input: [1], [2]', () => {
    const list1 = constructList([1]);
    const list2 = constructList([2]);
    const result = constructList([1, 2]);
    expect(mergeTwoLists(list1, list2)).toEqual(result);
  });
});
