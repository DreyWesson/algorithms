class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    console.log(this.print());
    return this;
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
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (this.length === 0) return;
    this.length--;
    let currNode = this.head;
    if (index <= 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index >= this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      const unwanted = this.get(index);
      const prev = unwanted.prev;
      const trailing = unwanted.next;
      prev.next = trailing;
      trailing.prev = prev;
      this.length--;
    }
    //     console.log("remove", this.print());
  }

  remove(index = 0) {
    if (this.length === 0) return;
    this.length--;
    let currNode = this.head;
    if (index <= 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index >= this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let count = 0;
      while (count < index) {
        currNode = currNode.next;
        count++;
      }
      currNode.next = currNode.next.next;
      currNode.next.prev = currNode;
    }
    return currNode;
  }

  reverse() {
    if (this.head == null) {
      return undefined;
    } else {
      var temp = this.head;
      var prev = null;
      // Make new tail
      this.tail = this.head;
      // Change node link
      while (temp != null) {
        // Make new upcoming node as to head
        this.head = temp;
        temp = temp.next;
        // Modified current node link
        this.head.prev = temp;
        this.head.next = prev;
        prev = this.head;
      }
    }
    return this;
  }

  print() {
    let currentNode = this.head;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return array;
  }
  set(index, value) {
    if (index === this.length - 1 || index === 0) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      const preNode = this.traverse(index - 1);
      console.log(preNode);
      const trailingNode = preNode.next.next;
      newNode.next = trailingNode;
      trailingNode.prev = newNode;
      preNode.next = newNode;
      newNode.prev = preNode;
    }
    return this;
  }
}

const myDLL = new DoublyLinkedList();
myDLL.push(2);
myDLL.push(4);
myDLL.push(3);
myDLL.unshift(1);
// myDLL.traverse(0);
// myDLL.set(1, 3);
myDLL.remove(2);
myDLL.reverse();
