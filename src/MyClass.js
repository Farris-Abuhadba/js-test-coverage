// src/MyClass.js
// A class with three methods: two will be tested, one won't.

class MyClass {
  methodA() {
    return "A";
  }

  methodB() {
    return "B";
  }

  methodC() {
    return "C but not tested";
  }
}

module.exports = MyClass;
