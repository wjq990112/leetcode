/**
 * @file 链表: 相交链表
 */
import getIntersectionNode, { ListNode } from '../get_intersection_node';

// 构造链表
const constructList = (
  arrA: number[],
  arrB: number[],
  skipA: number,
  skipB: number
): [ListNode | null, ListNode | null] => {
  const headA = new ListNode();
  const headB = new ListNode();
  let pointA = 1;
  let pointB = 1;
  let nodeA = new ListNode(arrA[0]);
  let nodeB = new ListNode(arrB[0]);

  headA.next = nodeA;
  headB.next = nodeB;

  while (pointA < skipA) {
    const nextNode = new ListNode(arrA[pointA]);
    nodeA.next = nextNode;
    nodeA = nodeA.next;
    pointA++;
  }

  while (pointB < skipB) {
    const nextNode = new ListNode(arrA[pointA]);
    nodeB.next = nextNode;
    nodeB = nodeB.next;
    pointB++;
  }

  const aLen = arrA.length;

  while (pointA < aLen) {
    const nextNode = new ListNode(arrA[pointA]);
    nodeA.next = nextNode;
    nodeA = nodeA.next;
    nodeB.next = nextNode;
    nodeB = nodeB.next;
    pointA++;
    pointB++;
  }

  return [headA.next, headB.next];
};

describe('链表: 相交链表', () => {
  it('input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3', () => {
    const [headA, headB] = constructList(
      [4, 1, 8, 4, 5],
      [5, 0, 1, 8, 4, 5],
      2,
      3
    );
    expect(getIntersectionNode(headA, headB)?.val).toEqual(8);
  });

  it('input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1', () => {
    const [headA, headB] = constructList([0, 9, 1, 2, 4], [3, 2, 4], 3, 1);
    expect(getIntersectionNode(headA, headB)?.val).toEqual(2);
  });

  it('input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2', () => {
    const [headA, headB] = constructList([2, 6, 4], [1, 5], 3, 2);
    expect(getIntersectionNode(headA, headB)).toEqual(null);
  });
});
