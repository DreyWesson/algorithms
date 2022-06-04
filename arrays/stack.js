class Stack {
  constructor() {
    this.array = [];
  }

  isEmpty() {
    return this.array.length === 0 ? "Stack is empty" : this.array.length;
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    return this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }
  view() {
    return this.array;
  }
}

const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log(myStack.peek());

myStack.pop();
myStack.pop();
console.log(myStack.view());
