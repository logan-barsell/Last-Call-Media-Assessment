import { findEvenSum } from '../../math';

describe('findEvenSum function', () => {
  test('properly finds the sum of all odd numbers given an array of numbers', () => {
    expect(findEvenSum([1, 2, 3, 4])).toBe(6);
    expect(findEvenSum([9, 11, 24, 27])).toBe(24);
  });

  test('should return 0 when no even numbers are in the array', () => {
    expect(findEvenSum([3, 5, 7])).toBe(0);
  });

  test('should return 0 when array is empty', () => {
    expect(findEvenSum([])).toBe(0);
  });

  test('should handle negative even numbers', () => {
    expect(findEvenSum([-2, -6, -8, 3, 5])).toBe(-16);
  });

  test('should handle a large collection of numbers', () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i + 1); // [1, 2, 3, ..., 10000]
    expect(findEvenSum(arr)).toBe(25005000);
  });

  test('should handle non-integer numbers as NOT even', () => {
    expect(findEvenSum([1.5, 2.5, 3.5, 4.5])).toBe(0);
  });
});
