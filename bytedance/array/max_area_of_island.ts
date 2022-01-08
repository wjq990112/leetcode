/**
 * @file 数组: 岛屿的最大面积
 */
export default function maxAreaOfIsland(grid: number[][]): number {
  let maxArea = 0;

  const height = grid.length;
  if (!height) {
    return maxArea;
  }

  const width = grid[0].length;
  if (!width) {
    return maxArea;
  }

  let area = 0;

  function dfs(
    grid: number[][],
    i: number,
    j: number,
    width: number,
    height: number
  ) {
    if (i < 0 || i > width - 1 || j < 0 || j > height - 1 || !grid[j][i]) {
      return;
    }

    grid[j][i] = 0;
    area++;

    dfs(grid, i + 1, j, width, height);
    dfs(grid, i - 1, j, width, height);
    dfs(grid, i, j + 1, width, height);
    dfs(grid, i, j - 1, width, height);
  }

  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if (grid[j][i]) {
        dfs(grid, i, j, width, height);
        maxArea = area > maxArea ? area : maxArea;
        area = 0;
      }
    }
  }

  return maxArea;
}
