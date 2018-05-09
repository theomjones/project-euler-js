// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

/**
 * Refactored
 */

exports.getFibNums = getFibNums;
exports.sumEvenNums = sumEvenNums;
exports.ans = () => {
  return sumEvenNums(getFibNums(1, 2, Math.pow(10, 6) * 4));
};

function getFibNums(f, s, to) {
  let fib1 = f;
  let fib2 = s;
  // array to add to
  let nums = [fib1, fib2];
  let next;
  while (fib1 + fib2 <= to) {
    // Next num is 1st + 2nd
    next = fib1 + fib2;
    nums.push(next);

    // new fib1 = old fib2
    fib1 = fib2;
    fib2 = next;
  }
  return nums;
}

function sumEvenNums(arr) {
  let sum = 0;
  arr.forEach(num => {
    if (num % 2 === 0) {
      sum += num;
    } else {
      return;
    }
  });
  return sum;
}