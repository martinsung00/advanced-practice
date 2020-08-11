"use strict";

/*
  Implement an algorithm that determines if a given string has a permutation that is a palindrome.
  Input: "tact coa"
  Output: true
  Input: "pizza cat"
  Output: false
*/

function hasPalindromePermutation(str) {
  // In palindrome there should be only one unique character
  // Edge cases include strings with spaces, commas and captilization

  const storage = {};
  let uniqueCount = 0;
  let tempStr = str.toLowerCase();

  for (let i = 0; i < tempStr.length; i++) {
    let currentStr = tempStr[i];

    if (!storage[currentStr] && currentStr !== ' ' && currentStr !== ',') {
      storage[currentStr] = 1;
      uniqueCount++;
    } else if (storage[currentStr] && currentStr !== ' ' && currentStr !== ',') {
      storage[currentStr] + 1;
      uniqueCount--;
    }
  }

  if (uniqueCount === 1) {
    return true;
  } else {
    return false;
  }
};
