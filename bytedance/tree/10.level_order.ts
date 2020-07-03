/**
 * @file 树: 二叉树层次遍历
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

export default function levelOrder(root: TreeNode | null) {
  let queue: TreeNode[] = [];
  let res: number[] = [];
  let node = root;

  while (node) {
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
    node = queue.shift() as TreeNode | null;
  }

  return res;
}
