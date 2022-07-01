class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    console.log(newNode);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
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
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    console.log(this);
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
    let unwanted;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    if (index > this.length) {
      return undefined;
    } else {
      unwanted = this.get(index);
      const prev = unwanted.prev;
      const trailing = unwanted.next;
      prev.next = trailing;
      trailing.prev = prev;
      this.length--;
    }
    return unwanted;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  reverse() {
    if (this.head == null) return undefined;
    else {
      let currentNode = this.head;
      let previousNode = null; // Make new tail
      this.tail = this.head; // Change node link
      while (currentNode != null) {
        this.head = currentNode; // Make new upcoming node as to head
        currentNode = currentNode.next; // switch current node to next node
        this.head.prev = currentNode; // the prev pointer should point to current node
        this.head.next = previousNode; // the next pointer should point to previous node
        previousNode = this.head; // Change previous node to d new head or current node
      }
    }
    return this;
  }
}

let myLinkedList = new Stack(10);
myStack.append(5);
myStack.append(16);
myStack.prepend(1);
myStack.insert(2, 99);
// myLinkedList.insert(20, 88)
// myLinkedList.printList()
// myLinkedList.remove(2)
myLinkedList.reverse();
