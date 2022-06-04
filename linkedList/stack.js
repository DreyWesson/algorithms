class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  printList() {
    let currentNode = this.top;
    const list = [];
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  isEmpty() {
    if (this.length === 0 && this.bottom === null) return "Stack is empty";
    else return this.length;
  }
  peek() {
    return !this.top ? this.isEmpty() : this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const previousTop = this.top;
      this.top = newNode;
      this.top.next = previousTop;
    }
    this.length++;
    console.log(this.printList());
    return this;
  }

  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) this.bottom = null;
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
console.log(myStack.peek());
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
// myStack.peek();
// myStack.pop();
// myStack.pop();
// myStack.pop();
