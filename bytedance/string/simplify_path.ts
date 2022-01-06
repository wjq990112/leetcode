/**
 * @file 字符串: 简化路径
 */
export default function simplifyPath(path: string): string {
  const dirNames = path.split('/');
  const result: string[] = [];

  for (let i = 0; i < dirNames.length; i++) {
    const dirName = dirNames[i];
    if (dirName === '.' || dirName === '') {
      continue;
    }

    if (dirName === '..') {
      result.pop();
      continue;
    }

    result.push(dirName);
  }

  return `/${result.join('/')}`;
}
