/**
 * @file 字符串: 复原 IP 地址
 */
export default function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];

  function dfs(subRes: string[], pointer: number) {
    if (subRes.length === 4 && pointer === s.length) {
      result.push(subRes.join('.'));
      return;
    }

    if (subRes.length === 4 && pointer < s.length) {
      return;
    }

    for (let len = 1; len <= 3; len++) {
      if (pointer + len - 1 >= s.length) {
        return;
      }

      if (len !== 1 && s[pointer] === '0') {
        return;
      }

      const str = s.slice(pointer, pointer + len);
      if (str.length === 3 && Number(str) > 255) {
        return;
      }

      subRes.push(str);
      dfs(subRes, pointer + len);
      subRes.pop();
    }
  }

  dfs([], 0);
  return result;
}
