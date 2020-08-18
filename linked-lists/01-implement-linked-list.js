"use strict";

/*
  Complete the following steps _in order_ and label each function signature with its time and space complexity. For the "optimize" exercises, if your implementation is already optimized to the required runtime, you may skip that exercise.
  A Node class has been provided for your convenience.
  1. Using the scaffolding below, implement a simple singly-linked list.
  2. Refactor the class to a doubly-linked list.
  3. Add function appendToHead(), which adds a node to the beginning.
  4. Add function removeFromHead(), which removes a node from the beginning.
  Lists have linked lists beat in many areas in terms of raw speed, so we are going to try to match that performance through some creative engineering.
  Lists:
  + Random access: O(1)
  + Add to the end: O(1), assuming list length is known
  + Remove from end: O(1), assuming list length is known
  - Add to the front: O(n)
  - Remove from the front: O(n)

  Linked lists:
  + Random access: n/a
  + Add to the end: O(n)
  + Remove from end: O(n)
  - Add to the front: O(1), thanks to 3.
  - Remove from the front: O(1), thanks to 4.
  With the exception of random access because that is beyond our scope, we want to do all of the above in O(1) time.
  5. Optimize appendToTail() to O(1) time.
  6. Add function removeFromTail(), which removes the last node.
  7. Optimize removeFromTail() to O(1) time.
  We want to further cement our advantage by offering some quality of life improvements to our linked list, over lists:
  8. Add function size(), which returns the size of the linked list.
  9. Optimize size() to O(1) time.
  10. Add function has(), which returns true if the linked list contains a specific value, false otherwise.
  11. Optimize has() to O(1) time.
  12. Add function tail(), which returns the last value of the linked list.
  13. Optimize tail() to O(1) time.
  14. Add function secondToLast(), which returns the second to last value.
  15. Optimize secondToLast() to O(1) without consuming any extra storage.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  };

  appendToTail(data) {
    // Appends a node containing data to the end.
    let newNode = new Node(data);
    newNode.next = null;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
    }
    return newTail.data;
  };

  deleteNode(val) {
    // Removes the first occurence of data.
    let currentNode
    if (this.head.next === null) {

    }
  };
};