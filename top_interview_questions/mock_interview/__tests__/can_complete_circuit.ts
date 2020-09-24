/**
 * @file 模拟面试: 加油站
 */
import canCompleteCircuit from '../can_complete_circuit';

describe('模拟面试: 加油站', () => {
  it('input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]', () => {
    const gas = [1, 2, 3, 4, 5];
    const cost = [3, 4, 5, 1, 2];
    expect(canCompleteCircuit(gas, cost)).toEqual(3);
  });

  it('input: gas = [2,3,4], cost = [3,4,3]', () => {
    const gas = [2, 3, 4];
    const cost = [3, 4, 3];
    expect(canCompleteCircuit(gas, cost)).toEqual(-1);
  });
});
