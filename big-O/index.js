"use strict";

/*
  1. What is the runtime of each of the following functions?
  2. Summarize what each function is doing in common English.
*/

// Ex. 1.
function ex1(arr) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    sum += array[i];
  }

  for (let i = 0; i < arr.length; i++) {
    product *= array[i];
  }

  console.log(sum + ", " + product);
}
/*
  Runtime: O(2n + 1) || Linear Time
  Decomposed runtime: O(n), there are two for loops, however they are not nested. Each for loop will execute
  independently.
  Summary of f(n): Using two for loops, this f(n) returns the sum and product of everything inside the array.
 */

// Ex. 2.
function ex2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}
/*
  Runtime: O(n^2 + 1) || Exponential Time
  Decomposed runtime: O(n^2), here is an example of exponential time since there is a nested for loop.
  Summary of f(n): Using two for loops, one nested in another, this f(n) iterates through the array.
  For each console logged element it's on, it will also console log every element in the array.
*/

// Ex. 3.
function ex3(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}
/*
  Runtime: O(n^2 + 1) || Exponential Time
  Decomposed runtime: O(n^2), this is extremely similar to example 3 where it uses nested for loops.
  Summary of f(n): The first for loop will iterate over all elements of the array.
  For every iteration, the second for loop will console log the element the iteration is on, and
  the rest of the elements in the array.
*/

// Ex. 4.
function ex4(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
      if (arr1[i] < arr2[j]) {
        console.log(arr[i] + ", " + arr[j]);
      }
    }
  }
}
/*
  Runtime: O(n^2 + 2) || Exponential Time
  Decomposed runtime: O(n^2), this example also uses nested for loops which makes it exponential time.
  To add to the exponential time, there is also an if statement which is considered an operation in itself.
  Summary of f(n): This function will determine if the element of the current iteration is smaller in comparison
  to the next element in the array. If the element of the current iteration is indeed of smaller value, the f(n)
  will log the current element and the next element.
*/
// Ex. 5.
function ex5(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
      for (let k = 0; k < 100000; k++) {
        console.log(arr[i] + ", " + arr[j]);
      }
    }
  }
}
/*
  Runtime: O(n^3 + 1) || Cubic Time
  Decomposed runtime: O(n^3), here we see three for loops, two of them are nested. In fact, this f(n)
  tests the idea of handling iterations that exceeds 1,000 iterations. However these iterations will eventually
  decompose. Having two nested for loops underneath one makes this cubic time.
  Summary of f(n): This f(n) will iterate through the first array, and for each iteration in the first array
  this f(n) will iterate through everything in the second array. In each iteration of the second array,
  the function will console log the current element of the first for loop, and the current element of the
  second for loop for 99,999 times.
*/

// Ex. 6.
function ex6(n) {
  if (n < 0) return -1;
  else if (n === 0) return 1;
  else return n * ex6(n - 1);
}
/*
  Runtime: O(n^n + 3)
  Decomposed runtime: O(n^n), in this scenario we must keep in mind recursion uses it's own runtime.
  Additionally we see multiple if statements, which can be considered an operation in itself. Since
  there is an n amount of iterations, depending on the input we can safely assume its O(n). However,
  in this case this f(n) will continue to call itself until n reaches 0, hence n^n.
  Summary of f(n): This f(n) will take an n position, then it will return a number that corresponds
  to that position. The sequence of numbers is simply taking a number and incrementing it by multiplying
  an iterative number that starts at 1. I.e, for position of 2 it will return 1 * (1 + 1) or 2. For position 3,
  it will return 6. Essentially, the number line increments using this formula: next number = current number * (current position).
*/

// Ex. 7.
function ex7(n) {
  if (n <= 0) return 0;
  else if (n === 1) return 1;
  return ex7(n - 1) + ex7(n - 2);
}
/*
  Runtime: O(n^2n + 3)
  Decomposed runtime: O(n^2n), similar to the example above, this f(n) uses recursion and has if/else statments.
  But to add on top of that, the f(n) calls itself twice in it's return statement until n reaches 0 or below 0.
  Hence O(n^2n)
  Summary of f(n): This f(n) will take a position as an input and return the appropriate fibonacci sequence number
  according to the position. It follows the fibonacci sequence: 1, 1, 2, 3, 5, 8... and so on.
*/