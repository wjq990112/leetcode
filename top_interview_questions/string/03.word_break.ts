/**
 * @file 字符串: 单词拆分
 */
export default function wordBreak(s: string, wordDict: string[]): boolean {
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i < len + 1; i++) {
    for (let str of wordDict) {
      // 计算 dp 结果位置坐标
      const temp = i - str.length;
      // 若从坐标位置到 i 截取的字符串在 wordDict 中 则标记 dp[i] 为 true
      if (dp[temp] && s.slice(temp, i) === str) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[len];
}
