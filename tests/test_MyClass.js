// tests/test_MyClass.js
// Tests two methods of MyClass, but not the third, resulting in partial coverage.

const MyClass = require("../src/MyClass");

test('methodA returns "A"', () => {
  const mc = new MyClass();
  expect(mc.methodA()).toBe("A");
});

test('methodB returns "B"', () => {
  const mc = new MyClass();
  expect(mc.methodB()).toBe("B");
});

// methodC is not tested
