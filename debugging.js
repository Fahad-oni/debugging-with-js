// Task 14-1: Spot the Error Type

function sayHi(name) {
  console.log('Hi, ' + name);
}

sayHi('Mira');

let word = 'hello';
console.log(word.toUpperCase());

function square(num) {
  // return num + num; // this is wrong because the function wants the squre of a number but it using add(+) parameter instead of add(*).
  return num * num;
}

console.log(square(4)); // should be 16

// Task 14-2: Debug a Broken Conditional
// This function should return "Pass" if a score is 50 or above, otherwise "Fail". It gives the wrong result for a score of exactly 50.

// Bug: find why score = 50 doesn't return "Pass"

function checkScore(score) {
  if (score >= 50) {
    return 'Pass';
  } else {
    return 'Fail';
  }
}

console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
console.log(checkScore(40)); // Expected: "Fail"
