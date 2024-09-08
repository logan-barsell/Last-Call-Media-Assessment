import { findOddSum } from '../../math';

describe('findOddSum function', () => {
  test('properly finds the sum of all odd numbers given an array of numbers', () => {
    expect(findOddSum([1, 2, 3, 4])).toBe(4);
    expect(findOddSum([9, 11, 24, 27])).toBe(47);
  });

  test('should return 0 when no odd numbers are in the array', () => {
    expect(findOddSum([2, 4, 6, 8])).toBe(0);
  });

  test('should return 0 when array is empty', () => {
    expect(findOddSum([])).toBe(0);
  });

  test('should handle negative odd numbers', () => {
    expect(findOddSum([-1, -3, -5, 2, 4])).toBe(-9);
  });

  test('should handle a large collection of numbers', () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i + 1); // [1, 2, 3, ..., 10000]
    expect(findOddSum(arr)).toBe(25000000);
  });

  test('should handle non-integer numbers as NOT odd', () => {
    expect(findOddSum([1.5, 2.5, 3.5, 4.5])).toBe(0);
  });
});
