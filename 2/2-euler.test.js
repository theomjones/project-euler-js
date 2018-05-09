const { getFibNums, sumEvenNums, ans } = require("./2-euler-r");

describe("Even fibonacci nums", () => {
  test("Should get correct fib numbers", () => {
    const fibNums = getFibNums(1, 2, 90);
    expect(fibNums).toHaveLength(10);
    expect(fibNums).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  });
  test("Should sum even nums from array", () => {
    const sum = sumEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(sum).toBe(30);
  });
  test("Euler answer", () => {
    let answer = ans();
    expect(answer).toBe(4613732);
  });
});
