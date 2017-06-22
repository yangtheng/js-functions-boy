// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function maxOfThree (num1, num2, num3) {
  // return the biggest of three numbers
  var allArr = [num1, num2, num3];

  return Math.max.apply(null, allArr);
}

console.log(maxOfThree(33, 54, 11));
