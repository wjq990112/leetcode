/**
 * @file 堆/栈/队列: 有序矩阵中第K小的元素
 */
export default function kthSmallest(matrix: number[][], k: number): number {
  const temp = [];

  for (let i = 0, len = matrix.length; i < len; i++) {
    temp.push(...matrix[i]);
  }

  return temp.sort((a, b) => a - b)[k - 1];
}
