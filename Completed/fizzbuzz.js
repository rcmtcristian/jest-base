function fizzBuzz(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else {
    return number;
  }
}

module.exports = fizzBuzz;

// module.exports = { fizzBuzz, sum };
// module.module.sum = sum;
// module.exports.fizzBuzz = fizzBuzz;
