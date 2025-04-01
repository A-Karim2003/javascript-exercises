const palindromes = function (string) {
  // Remove non-alphanumeric characters and convert to lowercase

  const filteredStr = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedStr = [...filteredStr].reverse().join("");

  return reversedStr === filteredStr;
};

// Do not edit below this line
module.exports = palindromes;
