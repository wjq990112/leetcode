/**
 * @file DFS: 岛屿数量
 */
export default function numIslands(grid: string[][]): number {
  let res = 0;

  const height = grid.length;

  if (!height) {
    return 0;
  }

  const width = grid[0].length;

  if (!width) {
    return 0;
  }

  const dfs = (
    grid: string[][],
    i: number,
    j: number,
    width: number,
    height: number
  ): void => {
    if (
      i < 0 ||
      i > width - 1 ||
      j < 0 ||
      j > height - 1 ||
      grid[j][i] === '0'
    ) {
      return;
    }

    grid[j][i] = '0';

    dfs(grid, i + 1, j, width, height);
    dfs(grid, i - 1, j, width, height);
    dfs(grid, i, j + 1, width, height);
    dfs(grid, i, j - 1, width, height);
  };

  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if (grid[j][i] === '1') {
        dfs(grid, i, j, width, height);
        res++;
      }
    }
  }

  return res;
}
