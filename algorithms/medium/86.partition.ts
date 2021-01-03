/**
 * @file 86. 分隔链表
 *
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 构造链表
export const constructList = (arr: number[]): ListNode | null => {
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

export default function partition(
  head: ListNode | null,
  x: number
): ListNode | null {
  let lower: number[] = [];
  let greater: number[] = [];

  while (head) {
    if (head.val < x) {
      lower = [...lower, head.val];
    } else {
      greater = [...greater, head.val];
    }
    head = head.next;
  }

  return constructList([...lower, ...greater]);
}
