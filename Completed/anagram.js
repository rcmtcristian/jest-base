function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// The formatStr function is a helper function that takes in a string and returns a "formatted" version of it
// The formatting process consists of the following steps:
// 1. Remove all non-word characters using a regular expression
// 2. Convert the string to lowercase
// 3. Split the string into an array of characters
// 4. Sort the array of characters in alphabetical order
// 5. Join the array of characters back into a string
function formatStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = isAnagram;
