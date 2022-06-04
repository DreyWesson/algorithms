class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    //     console.log(this);
  }
  dequeue() {
    if (this.first === null) return null;
    if (this.first === this.last) {
      this.last = null;
    }

    const nextNode = this.first.next;
    this.first = nextNode;
    this.length--;
    console.log(this);
  }
  //isEmpty;
}

const myQueue = new Queue();
console.log(myQueue.enqueue("google"));
console.log(myQueue.peek());
console.log(myQueue.enqueue("amazon"));
console.log(myQueue.enqueue("facebook"));
myQueue.dequeue();
