/**
 * @file 面试题29. 顺时针打印矩阵
 */
export default function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [];
  let mtxLen = matrix.length;

  if (!mtxLen) {
    return res;
  }

  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = mtxLen - 1;

  while (bottom > top && right > left) {
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right]);
    }
    for (let i = right; i > left; i--) {
      res.push(matrix[bottom][i]);
    }
    for (let i = bottom; i > top; i--) {
      res.push(matrix[i][left]);
    }

    top++;
    left++;
    right--;
    bottom--;
  }

  if (top === bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
  } else if (left === right) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left]);
    }
  }

  return res;
}
