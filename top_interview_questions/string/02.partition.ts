/**
 * @file 字符串: 分割回文串
 */
export default function partition(s: string): string[][] {
  let res: string[][] = [];
  let len = s.length;

  if (!len) {
    return res;
  }

  dfs(0, s, len, res, []);

  return res;
}

function dfs(
  start: number,
  s: string,
  len: number,
  res: string[][],
  curArr: string[]
): void {
  // 递归起始位置与字符串长度相等时说明已经遍历完一次
  if (start === len) {
    res.push(curArr);
    return;
  }

  // 从起始点开始截取字符串 每次字符串长度 +1 若为回文串 就递归回文串的子串
  for (let i = start; i < len; i++) {
    let subStr = s.slice(start, i + 1);
    if (isPalindrome(subStr)) {
      dfs(i + 1, s, len, res, [...curArr, subStr]);
    }
  }
}

function isPalindrome(s: string): boolean {
  let len = s.length;

  let p1 = 0;
  let p2 = len - 1;

  while (p2 > p1) {
    if (s[p2] !== s[p1]) {
      return false;
    }
    p1++;
    p2--;
  }

  return true;
}
