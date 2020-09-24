/**
 * @file 模拟面试: 加油站
 */
export default function canCompleteCircuit(
  gas: number[],
  cost: number[]
): number {
  let remain = 0;
  let run = 0;
  let res = 0;

  for (let i = 0, len = gas.length; i < len; i++) {
    run += gas[i] - cost[i];
    remain += gas[i] - cost[i];

    if (run < 0) {
      res = i + 1;
      run = 0;
    }
  }

  if (remain < 0) {
    return -1;
  }

  return res;
}
