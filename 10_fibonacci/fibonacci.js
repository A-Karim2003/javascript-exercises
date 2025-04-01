const fibonacci = function (target) {
  if (target < 0) return "OOPS";
  target = parseInt(target);

  const sequence = [];
  let value1 = 0;
  let value2 = 1;
  let current;

  if (target === 1) {
    sequence.push(value2);
  } else {
    sequence.push(value1);
  }
  for (let i = 1; i < target; i++) {
    current = value1 + value2;
    sequence.push(current);
    value1 = value2;
    value2 = current;
  }
  const lastValue = sequence.pop();
  return lastValue;
};
// Do not edit below this line
module.exports = fibonacci;
