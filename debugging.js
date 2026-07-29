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

// Task 14-3: Debug a Broken Loop
// This function should return the count of numbers from 1 to n. Right now it never stops (infinite loop) — find out why.

// Bug: this loop never ends — find the missing piece

function countUpTo(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    // something is missing here? here (i++) was missing, it means we started the loop but nrver increased it..so the loop become an infinite loop
    count = count + 1;
  }

  return count;
}

console.log(countUpTo(5)); // solved

// Task 14-4: Debug a Broken Array Problem
// This function should return the first element of an array. It currently returns the wrong item.

// Bug: find why this doesn't return the first element

function getFirstElement(arr) {
  return arr[0]; // solved,,to get the first element of an array we have to use the index numbers,,the array index starts with 0 and ends with array.length -1;
}

console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)

//Task 14-5: Debug a Broken Function
// This function should return the difference between two numbers (a - b). It currently swaps the parameters somewhere and gives a wrong result.

// Bug: find why the result comes out negative

function subtract(a, b) {
  return a - b;
}

console.log(subtract(10, 3)); //  solved

// Task 14-6: Rubber Duck Debugging
// Explain this function out loud, line by line, to find the bug. It should return true if a string is empty, otherwise false.

// Bug: explain this line out loud — what does str.length actually equal for ""?

function isEmpty(str) {
  if (str.length === 0) {
    // solved
    return true;
  } else {
    return false;
  }
}

console.log(isEmpty('')); //true
console.log(isEmpty('hi')); // false

// Task 14-7: Debug a Multi-Part Bug
// This function should return an array of only the odd numbers from the input array. It currently has two separate bugs — fix them one at a time.

// This code has TWO bugs. Fix one, re-run, then find the next.

function getOddNumbers(numbers) {
  let odds = [];

  for (let i = 0; i <= numbers.length-1; i++) { // bug #1 is here
    if (numbers[i] % 2 === 1) {                  // bug #2 is here
      odds.push(numbers[i]);
    }
  }

  return odds;
}

console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // solved
