/**
 * @file 键名转译
 */
interface ObjType {
  [key: string]: number | ObjType;
}

export default function keyNameTranslator(obj: ObjType): ObjType {
  const res: ObjType = {};

  for (let key in obj) {
    const aimArr = key.split('.');
    const len = aimArr.length;
    const temp: ObjType = {};
    for (let i = len - 1; i > -1; i--) {
      if (i === len - 1) {
        temp[aimArr[i]] = obj[key];
      } else {
        temp[aimArr[i]] = { ...temp };
        delete temp[aimArr[i + 1]];
      }
    }
    res[aimArr[0]] = temp[aimArr[0]];
  }

  return res;
}
