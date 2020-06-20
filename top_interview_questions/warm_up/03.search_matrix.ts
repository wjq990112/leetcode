/**
 * @file 开始之前: 搜索二维矩阵 II
 */
export default function searchMatrix(
  matrix: number[][],
  target: number
): boolean {
  let len = matrix.length;

  if (!len) {
    return false;
  }

  let x = 0;
  let y = len - 1;

  while (x < matrix[0].length && y > -1) {
    if (matrix[y][x] > target) {
      y--;
    } else if (matrix[y][x] < target) {
      x++;
    } else {
      return true;
    }
  }

  return false;
}
