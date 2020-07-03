/**
 * @file 树: 对象 PascalCase key 转 SnakeCase
 */
export default function toSnakeCase(obj: any): any {
  const resObj: any = {};

  for (let key in obj) {
    let matchArr = (key.match(/[A-z][a-z]*/g) || []).map((item) =>
      item.toLowerCase()
    );
    for (let i = 1, len = matchArr.length; i < len; i++) {
      matchArr[i] = '_' + matchArr[i];
    }
    let snakeCaseKey = matchArr.join('');
    if (obj[key] && typeof obj[key] === 'object') {
      resObj[snakeCaseKey] = toSnakeCase(obj[key]);
    } else {
      resObj[snakeCaseKey] = obj[key];
    }
  }

  return resObj;
}
