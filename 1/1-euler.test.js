const { sum } = require("./1-euler");

describe("Multiples of 3 and 5", () => {
  test("ans", () => {
    expect(sum(1000)).toBe(233168);
  });
});
