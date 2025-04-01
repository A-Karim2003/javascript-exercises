const add = function (arg1, arg2) {
  return arg1 + arg2;
};

const subtract = function (arg1, arg2) {
  return arg1 - arg2;
};

const sum = function (array) {
  return array.reduce((acc, value) => {
    return acc + value;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((acc, value) => acc * value, 1);
};

const power = function (arg1, arg2) {
  return arg1 ** arg2;
};

const factorial = function (n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
