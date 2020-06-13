/**
 * @file 面试题06. 从尾到头打印链表
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

export default function reversePrint(head: ListNode | null): number[] {
  const res = [];

  while (head) {
    res.push(head.val);
    head = head.next;
  }

  return res.reverse();
}
