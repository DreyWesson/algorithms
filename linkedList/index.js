class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
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
    console.log(this.printList());
    return this.printList();
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
    if (this.head == null) return undefined;
    else {
      let currentNode = this.head;
      let previousNode = null; // Make new tail
      this.tail = this.head; // Change node link
      while (currentNode !== null) {
        this.head = currentNode; // Make new upcoming node as to head
        currentNode = currentNode.next; // switch current node to next node
        this.head.next = previousNode; // the next pointer should point to previous node
        previousNode = this.head; // Change previous node to d new head or current node
      }
      console.log(this.printList());
      console.log(this.head);
      return this;
    }
    // if (!this.head.next) return this.head;
    // let currentNode = this.head;
    // this.head = this.tail; // switch the head and tail
    // this.tail = currentNode;
    // let temp;
    // let previousNode = null;
    // for (let i = 0; i < this.length; i++) {
    //   temp = currentNode.next;
    //   currentNode.next = previousNode;
    //   previousNode = currentNode;
    //   currentNode = temp;
    // }
    // console.log(this.printList());
    // return this;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
myLinkedList.insert(1, 88);
// myLinkedList.remove(2);
myLinkedList.reverse();
