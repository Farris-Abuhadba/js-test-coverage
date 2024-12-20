// tests/test_helpers.js
// Fully tests helpers.js (only one function: doSomething).

const { doSomething } = require("../src/helpers");

test("doSomething should greet the user", () => {
  expect(doSomething("TestUser")).toBe("Hello, TestUser!");
});
