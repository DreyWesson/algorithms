class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // console.log(this);
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      //       console.log("yes");
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    let counter = 0;
    let currentNode = this.head;
    let prev;
    let rest;
    while (counter < this.length) {
      if (counter === 0) {
        prev = null;
        console.log("::::", currentNode);
        rest = currentNode.next;
        currentNode.next = prev;
        console.log(":", currentNode);

        this.tail = currentNode;
      } else {
        // console.log("::::", currentNode);

        prev = currentNode.next;
        // console.log(":", prev);
        currentNode = currentNode.next;
        currentNode.next = prev;
        this.head = currentNode;
      }

      // console.log("::::", currentNode);

      counter++;
    }
    return currentNode;

    // while i save the rest of the value not to lose it
    // then i change the next current value in the loop to the saved value
  }
}

let myLinkedList = new Stack(10);
myStack.append(5);
myStack.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(2);
myStack.reverse();
