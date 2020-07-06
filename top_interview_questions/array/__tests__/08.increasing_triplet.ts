/**
 * @file 数组: 递增的三元子序列
 */
import increasingTriplet from '../08.increasing_triplet';

describe('数组: 递增的三元子序列', () => {
  it('input: [1,2,3,4,5]', () => {
    expect(increasingTriplet([1, 2, 3, 4, 5])).toBeTruthy();
  });

  it('input: [5,4,3,2,1]', () => {
    expect(increasingTriplet([5, 4, 3, 2, 1])).toBeFalsy();
  });

  it('input: [1,2,3,1,2,1]', () => {
    expect(increasingTriplet([1, 2, 3, 1, 2, 1])).toBeTruthy();
  });

  it('input: [2,1,5,0,3]', () => {
    expect(increasingTriplet([2, 1, 5, 0, 3])).toBeFalsy();
  });

  it('input: [2,1,5,0,4,6]', () => {
    expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBeTruthy();
  });

  it('input: [5,1,5,5,2,5,4]', () => {
    expect(increasingTriplet([5, 1, 5, 5, 2, 5, 4])).toBeTruthy();
  });

  it('input: [1,0,0,-1,0,0,100]', () => {
    expect(increasingTriplet([1, 0, 0, -1, 0, 0, 100])).toBeTruthy();
  });
});
