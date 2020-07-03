/**
 * @file 树: 二叉树层次遍历
 */
import levelOrder, { TreeNode } from '../10.level_order';

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

describe('树: 二叉树层次遍历', () => {
  it('input: null', () => {
    expect(levelOrder(constructTree(null))).toEqual([]);
  });

  it('input: {}', () => {
    expect(levelOrder(constructTree({}))).toEqual([0]);
  });

  it('input: { left: {}, right: {} }', () => {
    expect(levelOrder(constructTree({ left: {}, right: {} }))).toEqual([
      0,
      0,
      0
    ]);
  });

  it('input: { val: 1, left: { val: 2 }, right: { val: 3 } }', () => {
    expect(
      levelOrder(constructTree({ val: 1, left: { val: 2 }, right: { val: 3 } }))
    ).toEqual([1, 2, 3]);
  });

  it('input: { val: 1, left: { val: 2, left: { val: 4, left: { val: 6 } }, right: { val: 5 } }, right: { val: 3 } }', () => {
    expect(
      levelOrder(
        constructTree({
          val: 1,
          left: {
            val: 2,
            left: { val: 4, left: { val: 6 } },
            right: { val: 5 }
          },
          right: { val: 3 }
        })
      )
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
