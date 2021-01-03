/**
 * @file 86. 分隔链表
 */
import partition, { ListNode, constructList } from '../86.partition';

describe('86. 分隔链表', () => {
  it('input: head = 1->4->3->2->5->2, x = 3', () => {
    expect(partition(constructList([1, 4, 3, 2, 5, 2]), 3)).toEqual(
      constructList([1, 2, 2, 4, 3, 5])
    );
  });
});
