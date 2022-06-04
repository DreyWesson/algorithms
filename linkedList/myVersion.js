class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
    // console.log(this.printList());
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // console.log(this.printList());
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    // console.log(this.printList());
  }

  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    // console.log(currentNode);
    return currentNode;
  }
  printList() {
    const list = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value);
    const currentNode = this.traverseToIndex(index - 1);
    const followerNode = currentNode.next;
    const newNode = new Node(value);
    currentNode.next = newNode;
    newNode.next = followerNode;
    this.length++;
    // console.log(this.printList());
  }

  delete(index) {
    if (index > this.length) return null;
    const previousNode = this.traverseToIndex(index - 1);
    const unwantedNode = previousNode.next;
    const followerNode = unwantedNode.next;
    previousNode.next = followerNode;
    this.length--;
    // console.log(this.printList());
  }
  reverse() {
    if (!this.head.next) return this.head;
    let first = this.head;
    let second = first.next;
    while (second) {
      const nextPointer = second.next;
      second.next = first;
      first = second;
      second = nextPointer;
    }
    this.head.next = null;
    this.head = first;
    console.log(this.printList());
  }
}
const myLinkedList = new Stack(20);
myStack.append(30);
myStack.append(40);
myStack.prepend(10);
myStack.prepend(0);
// myLinkedList.traverseToIndex(2);
myStack.insert(3, 25);
myStack.delete(3);
myStack.reverse();
