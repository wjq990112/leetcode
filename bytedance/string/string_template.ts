/**
 * @file 字符串: 实现模板字符串
 */
export default function stringTemplate(str: string, obj: any): string {
  for (let i in obj) {
    let reg = new RegExp('\\$\\{' + i + '\\}', 'g');
    str = str.replace(reg, obj[i]);
  }

  return str;
}
