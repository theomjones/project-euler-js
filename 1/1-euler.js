let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

exports.sum = function sum(max) {
  let acc = 0;
  let i = 1;
  while (i < max) {
    if (i <= 0) return;
    if (i % 3 === 0 || i % 5 === 0) {
      // console.log(i);
      acc += i;
    }
    i++;
  }
  return acc;
};
