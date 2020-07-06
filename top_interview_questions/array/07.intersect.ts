/**
 * @file 数组: 两个数组的交集 II
 */
export default function intersect(nums1: number[], nums2: number[]): number[] {
  let map = new Map();
  let res = [];
  let len1 = nums1.length;
  let len2 = nums2.length;
  if (len1 > len2) {
    [len1, len2] = [len2, len1];
    [nums1, nums2] = [nums2, nums1];
  }

  for (let i = 0; i < len1; i++) {
    const element = nums1[i];
    const count = map.get(element);
    if (count) {
      map.set(element, count + 1);
    } else {
      map.set(element, 1);
    }
  }

  for (let i = 0; i < len2; i++) {
    const element = nums2[i];
    const count = map.get(element);
    if (count) {
      map.set(element, count - 1);
      res.push(element);
    }
  }

  return res;
}
