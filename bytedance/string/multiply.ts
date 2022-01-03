/**
 * @file 字符串: 字符串相乘
 */
export default function multiply(num1: string, num2: string): string {
  const num1Len = num1.length;
  const num2Len = num2.length;
  const pos = Array(num1Len + num2Len).fill(0);

  for (let i = num1Len - 1; i > -1; i--) {
    const numOfNum1 = Number(num1[i]);
    for (let j = num2Len - 1; j > -1; j--) {
      const numOfNum2 = Number(num2[j]);
      const sum = pos[i + j + 1] + numOfNum1 * numOfNum2;
      pos[i + j + 1] = sum % 10;
      pos[i + j] += Math.floor(sum / 10);
    }
  }

  while (pos[0] === 0) {
    pos.shift();
  }

  return pos.length ? pos.join('') : '0';
}
