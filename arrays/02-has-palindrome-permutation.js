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
  Edge cases: strings with spaces
  If string is of even length, every character should be paired, storage should be empty
  If string is of odd length there should be only one unique character
  */
  const storage = new Set();
  let strCount = 0;

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];

    if (storage.has(currentLetter)) {
      storage.delete(currentLetter);
      strCount++;
    } else if (!storage.has(currentLetter) && currentLetter !== ' ') {
      storage.add(currentLetter);
      strCount++;
    }
  }

  if (strCount & 1) {
    return (storage.size === 1) ? true : false;
  } else {
    return (storage.size === 0) ? true : false;
  }
};

// Runtime: O(n)