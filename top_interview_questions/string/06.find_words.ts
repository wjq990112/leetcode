/**
 * @file 字符串: 单词搜索 II
 */
export default function findWords(
  board: string[][],
  words: string[]
): string[] {
  let width = board[0]?.length;
  let height = board.length;
  let res: string[] = [];

  if (!height) {
    return res;
  }

  for (let word of words) {
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        if (dfs(board, word, x, y, width, height)) {
          res.push(word);
        }
      }
    }
  }

  return [...new Set(res)];
}

function dfs(
  board: string[][],
  word: string,
  x: number,
  y: number,
  width: number,
  height: number
): boolean {
  if (!word) {
    return true;
  }

  if (x < 0 || x > width - 1 || y < 0 || y > height - 1) {
    return false;
  }

  if (board[y][x] !== word[0]) {
    return false;
  }

  let str = word.slice(1);
  let temp = board[y][x];
  board[y][x] = '-';

  let res =
    dfs(board, str, x + 1, y, width, height) ||
    dfs(board, str, x - 1, y, width, height) ||
    dfs(board, str, x, y + 1, width, height) ||
    dfs(board, str, x, y - 1, width, height);

  board[y][x] = temp;

  return res;
}
