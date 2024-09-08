import { isOdd } from '../../math';

describe('isOdd function', () => {
  test('isOproperly determines if a number is odd', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(4)).toBe(false);
  });

  test('should return false for 0', () => {
    expect(isOdd(0)).toBe(false);
  });

  test('should handle negative numbers', () => {
    expect(isOdd(-3)).toBe(true);
    expect(isOdd(-5)).toBe(true);
    expect(isOdd(-6)).toBe(false);
    expect(isOdd(-8)).toBe(false);
  });

  test('should handle non-integer numbers as false', () => {
    expect(isOdd(3.5)).toBe(false);
    expect(isOdd(5.75)).toBe(false);
    expect(isOdd(6.25)).toBe(false);
    expect(isOdd(10.99)).toBe(false);
  });
});
