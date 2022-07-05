export default function minInsertions(str: string) {
  const len = str.length;
  const dp: number[][] = [];

  for (let i = 0; i < len; i++) {
    dp[i] = Array(len).fill(0);
  }

  for (let i = len - 2; i > -1; i--) {
    for (let j = i + 1; j < len; j++) {
      if (str[i] === str[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[0][len - 1];
}
