const sumAll = function (from, to) {
  if (
    from < 0 ||
    to < 0 ||
    typeof from !== "number" ||
    typeof to !== "number" ||
    !Number.isInteger(from) ||
    !Number.isInteger(to)
  )
    return "ERROR";

  min = Math.min(from, to);
  max = Math.max(from, to);

  sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
