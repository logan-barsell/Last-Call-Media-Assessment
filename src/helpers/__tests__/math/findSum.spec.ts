import { findSum } from '../../math';

describe('findSum function', () => {
  test('properly finds the sum of an array of numbers', () => {
    expect(findSum([4, 4])).toBe(8);
    expect(findSum([1, 2, 3, 4])).toBe(10);
  });

  test('should return 0 for an empty array', () => {
    expect(findSum([])).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(findSum([-1, -3, -5, 2, 4])).toBe(-3);
  });

  test('should handle a large collection of numbers', () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i + 1); // [1, 2, 3, ..., 10000]
    expect(findSum(arr)).toBe(50005000);
  });
});
