"use strict";

/*
  Implement an algorithm that determines if a given string has a permutation that is a palindrome.
  Input: "tact coa"
  Output: true
  Input: "pizza cat"
  Output: false
*/

export function hasPalindromePermutation(str) {
  /*
  Edge cases include strings with spaces, commas and captilization
  */
  const storage = {};
  const tempStr = str.toLowerCase();
  let uniqueCount = 0;
  let charCount = 0;
  let pairCount = 0;

  for (let i = 0; i < tempStr.length; i++) {
    let currentStr = tempStr[i];

    if (!storage[currentStr] && currentStr !== ' ' && currentStr !== ',') {
      storage[currentStr] = 1;
      charCount++;
      uniqueCount++;
    } else if (storage[currentStr] && currentStr !== ' ' && currentStr !== ',') {
      pairCount++;
      charCount++;
      uniqueCount--;
    }
  }
  /*
  If string length is odd there should only be one unique character
  and everything else is paired

  If string length is even, two cases can happen:
  1) There is two unique characters everything else is paired
  2) The number of pairs is half the string length
  */
  if (charCount % 3 === 0) {
    return (uniqueCount === 1 && pairCount > 0) ? true : false;
  } else {
    let halfOfStr = charCount / 2;

    return ((uniqueCount === 2 && pairCount > 0) || (halfOfStr === pairCount)) ? true : false;
  }
};

// Runtime: O(n) || linear time