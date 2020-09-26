/**
 * @file 链表: 相交链表
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

export default function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let pointA = headA;
  let pointB = headB;

  while (pointA || pointB) {
    if (pointA === pointB) {
      return pointA;
    }

    pointA = pointA === null ? headA : pointA.next;
    pointB = pointB === null ? headB : pointB.next;
  }

  return null;
}
