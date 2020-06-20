/**
 * @file 开始之前: 合并两个有序数组
 */
export default function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let index1 = m - 1;
  let index2 = n - 1;
  let tail = m + n - 1;

  while (index2 > -1) {
    if (nums1[index1] > nums2[index2]) {
      nums1[tail] = nums1[index1];
      index1--;
    } else {
      nums1[tail] = nums2[index2];
      index2--;
    }
    tail--;
  }
}
