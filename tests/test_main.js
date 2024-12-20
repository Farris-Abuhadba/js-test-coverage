// tests/test_main.js
// We may partially test main.js or not test it fully.

const mainFunction = require("../src/main");

test("mainFunction returns sum and greeting", () => {
  const result = mainFunction();
  expect(result.sum).toBe(5);
  expect(result.greeting).toBe("Hello, World!");
});

// We do not test the results of methodAResult or anotherMethodResult,
// leaving some calls in main.js untested, further showing partial coverage.
