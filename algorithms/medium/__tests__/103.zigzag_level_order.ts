/**
 * @file 103. 二叉树的锯齿形层序遍历
 */
import zigzagLevelOrder, { TreeNode } from '../103.zigzag_level_order';

// 构造二叉树
const constructTree = (obj: any): TreeNode | null => {
  if (!obj) {
    return null;
  }

  let root = new TreeNode(obj.val);

  if (obj.left) {
    root.left = constructTree(obj.left);
  }
  if (obj.right) {
    root.right = constructTree(obj.right);
  }

  return root;
};

describe('103. 二叉树的锯齿形层序遍历', () => {
  it('input: ', () => {
    expect(
      zigzagLevelOrder(
        constructTree({
          val: 3,
          left: {
            val: 9,
            left: null,
            right: null
          },
          right: {
            val: 20,
            left: {
              val: 15,
              left: null,
              right: null
            },
            right: {
              val: 7,
              left: null,
              right: null
            }
          }
        })
      )
    ).toEqual([[3], [20, 9], [15, 7]]);
  });
});
