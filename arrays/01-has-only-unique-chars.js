"use strict";

/*
  Implement an algorithm to determine if a string has only unique characters, without using any additional data structures.
  Input: "cat"
  Output: true
  Input: "greater good"
  Output: false
*/

function hasOnlyUniqueCharacters(str) {
// Create a storage to store unique characters. If the letter is in the storage already, and the letter appears again, the string does not contain only unique characters
  const storage = {};
  const isUnique = true;

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i].toString();

    if(!storage[currentLetter]) {
      storage[currentLetter] = 1;
    } else {
      return false
    }
  };
  return isUnique;
};

// Runtime: O(n) || linear time