/**
 * @file 键名转译-II
 */
interface ObjType {
  [key: string]: number | ObjType;
}

export default function keyNameTranslator(obj: ObjType): ObjType {
  function translate(key: string[], value: number | ObjType): number | ObjType {
    const len = key.length;

    if (len < 2) {
      return value;
    }

    const tempKey = key.splice(len - 1, len)[0];
    const tempObj: ObjType = {};
    tempObj[tempKey] = value;

    return translate(key, tempObj);
  }

  const res: ObjType = {};

  for (let key in obj) {
    const aimArr = key.split('.');
    res[aimArr[0]] = translate(aimArr, obj[key]);
  }

  return res;
}
