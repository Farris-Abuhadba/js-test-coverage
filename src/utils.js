// src/utils.js
// A file with multiple functions: some will be tested, others not.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b; // Will not be tested
}

function unusedFunction() {
  return "I am never tested";
}

module.exports = {
  add,
  subtract,
  multiply,
  unusedFunction,
};
