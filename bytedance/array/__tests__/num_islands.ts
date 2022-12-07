/**
 * @file 数组: 岛屿数量
 */
import numIslands from '../num_islands';

describe('数组: 岛屿数量', () => {
  it(`input: [
               ['1','1','1','1','0'],
               ['1','1','0','1','0'],
               ['1','1','0','0','0'],
               ['0','0','0','0','0']
             ]`, () => {
    expect(
      numIslands([
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0']
      ])
    ).toEqual(1);
  });

  it(`input: [
              ['1','1','0','0','0'],
              ['1','1','0','0','0'],
              ['0','0','1','0','0'],
              ['0','0','0','1','1']
            ]`, () => {
    expect(
      numIslands([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
      ])
    ).toEqual(3);
  });
});