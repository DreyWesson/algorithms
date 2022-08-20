class MyArray {
  constructor() {
    this.length = 0;
    this.value = {};
  }

  get(index) {
    return this.value[index];
  }

  push(val) {
    this.value[this.length] = val;
    this.length++;
  }
  pop() {
    delete this.value[this.length - 1];
    this.length--;
  }
  swapLeft(index) {
    for (let i = index; i < this.length; i++) {
      this.value[i] = this.value[i + 1];
    }
  }

  remove(index) {
    this.swapLeft(index);
    delete this.value[this.length - 1];
    this.length--;
  }
  shift() {
    this.swapLeft(0);
    delete this.value[this.length - 1];
    this.length--;
  }
  unshift(newVal) {
    let memo = { 0: newVal };
    for (let i = 0; i < this.length; i++) {
      memo[i + 1] = this.value[i];
    }
    this.length++;
    this.value = memo;
  }

  concat(...arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) newArr = [...newArr, ...arr[i]];
      else newArr.push(arr[i]);
    }
    for (let j = 0; j < newArr.length; j++) {
      this.push(newArr[j]);
    }
  }

  splice(start, del, ...rest) {
    let newArr = {};
    let counter = 0;

    for (let i = 0; i < start; i++) {
      newArr[counter] = this.value[i];
      counter++;
    }

    if (rest.length)
      for (let i = 0; i < rest.length; i++) {
        newArr[counter] = rest[i];
        counter++;
      }

    start = start + del;
    for (let i = start; i < this.length; i++) {
      newArr[counter] = this.value[i];
      counter++;
    }
    this.value = newArr;
    this.length = counter;
  }
}
const miniArray = new MyArray();
// miniArray.push(0)
// miniArray.push(1);
// miniArray.push(2);
// miniArray.push(3);
// miniArray.push(4);
// miniArray.push(5);
// miniArray.push(6);
//
// miniArray.remove(1)
// console.log(miniArray)
// miniArray.remove(3)
//
// miniArray.shift()
//
// miniArray.unshift(0)
//
// miniArray.concat([1,2,3],[4,5,6],"hello",{name:"Dare"},[7,8,9,10])
//
miniArray.push("Banana");
miniArray.push("Orange");
miniArray.push("Apple");
miniArray.push("Mango");
miniArray.splice(2, 1, "Lemon", "Kiwi");
console.log(miniArray);
// console.log(miniArray.length)
