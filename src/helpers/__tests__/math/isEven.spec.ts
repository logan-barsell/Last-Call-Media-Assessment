import { isEven } from '../../math';

describe('isEven function', () => {
  test('isOproperly determines if a number is odd', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(4)).toBe(true);
  });

  test('should return true for 0', () => {
    expect(isEven(0)).toBe(true);
  });

  test('should handle negative numbers', () => {
    expect(isEven(-4)).toBe(true);
    expect(isEven(-8)).toBe(true);
    expect(isEven(-3)).toBe(false);
    expect(isEven(-5)).toBe(false);
  });

  test('should handle non-integer numbers as false', () => {
    expect(isEven(3.5)).toBe(false);
    expect(isEven(5.75)).toBe(false);
    expect(isEven(6.25)).toBe(false);
    expect(isEven(10.99)).toBe(false);
  });
});
