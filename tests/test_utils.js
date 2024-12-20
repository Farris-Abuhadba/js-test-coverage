// tests/test_utils.js
// Tests some functions from utils.js, but not all (partial coverage).

const { add, subtract } = require("../src/utils");

test("add should return sum", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract should return difference", () => {
  expect(subtract(5, 2)).toBe(3);
});

// multiply and unusedFunction are NOT tested, creating partial coverage.
