// MATH Helper Functions

// is a number odd - returns true/false
export const isOdd = (n: number) => {
  return Number.isInteger(n) && n % 2 !== 0;
};

export const isEven = (n: number) => {
  return n % 2 === 0;
};

// finds the sum of an array of numbers - returns sum as number
export const findSum = (a: number[]) => {
  return a.reduce((x, y) => x + y, 0);
};

// finds the sum of ODD numbers only, given an array of numbers - returns sum as number
export const findOddSum = (a: number[]) => {
  const odds = a.filter(n => isOdd(n));
  return findSum(odds);
};

// finds the sum of EVEN numbers only, given an array of numbers - returns sum as number
export const findEvenSum = (a: number[]) => {
  const evens = a.filter(n => isEven(n));
  return findSum(evens);
};
