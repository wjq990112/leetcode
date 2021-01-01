/**
 * @file 605. 种花问题
 */
import canPlaceFlowers from '../605.can_place_flowers';

describe('605. 种花问题', () => {
  it('input: flowerbed = [1,0,0,0,1], n = 1', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBeTruthy();
  });

  it('input: flowerbed = [1,0,0,0,1], n = 2', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBeFalsy();
  });
});
