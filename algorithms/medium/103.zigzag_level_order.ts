/**
 * @file 103. 二叉树的锯齿形层序遍历
 *
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export default function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  let flag = false;
  const queue = [root];
  let stack = [];
  const result = [[root.val]];

  while (queue.length) {
    const curr = queue.pop() as TreeNode;

    if (flag) {
      curr.left && stack.push(curr.left);
      curr.right && stack.push(curr.right);
    } else {
      curr.right && stack.push(curr.right);
      curr.left && stack.push(curr.left);
    }

    if (!queue.length && stack.length) {
      flag = !flag;
      queue.push(...stack);
      result.push(stack.map((node) => node.val));
      stack = [];
    }
  }

  return result;
}
