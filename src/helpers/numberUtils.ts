export const isArmstrong = (num: number): boolean => {
  const digits = num.toString().split("").map(Number);
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(digit, digits.length),
    0
  );
  return sum === num;
};

export const sumOfDigits = (num: number): number => {
  const isNegative = num < 0;
  const digitSum = Math.abs(num)
    .toString()
    .split("")
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);

  return isNegative ? -digitSum : digitSum;
};

export const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const isPerfect = (num: number): boolean => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};
