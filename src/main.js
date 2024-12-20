// src/main.js
// This will import functions and classes but may be partially or not fully tested.

const { add, subtract } = require("./utils");
const { doSomething } = require("./helpers");
const MyClass = require("./MyClass");
const AnotherClass = require("./AnotherClass");

function mainFunction() {
  const mc = new MyClass();
  const ac = new AnotherClass();
  const sum = add(2, 3);
  const greeting = doSomething("World");

  // Not all of these calls may be tested
  return {
    sum,
    greeting,
    methodAResult: mc.methodA(),
    anotherMethodResult: ac.anotherMethod(),
  };
}

module.exports = mainFunction;
