"use strict";

/*
  Implement an algorithm that determines if a given string is a rotation of another given string.
  Input: "algorithm" "ithmalgor"
  Output: true
  Input: "cat" "tree"
  Output: false
*/

export function isRotation(str1, str2) {
  // Edge case: In the case that a user provides a number as one of the inputs, this will turn a number into string
  const storage = [];
  const lowerCaseOne = str1.toString().toLowerCase();
  const lowerCaseTwo = str2.toString().toLowerCase();

  for (let i = lowerCaseOne.length - 1; i >= 0; i--) {
    storage.push(lowerCaseOne[i]);
  };

  const reversedStr = storage.join('');

  if (reversedStr === lowerCaseTwo) {
    return true;
  } else {
    return false;
  };
};
