class MyArray {
  constructor(value = {}, length = 0) {
    this.length = length;
    this.value = value;
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
    for (let i = index; i < this.length; i++) this.value[i] = this.value[i + 1];
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
    for (let i = 0; i < this.length; i++) memo[i + 1] = this.value[i];
    this.length++;
    this.value = memo;
  }

  concat(...arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      Array.isArray(arr[i])
        ? (newArr = [...newArr, ...arr[i]])
        : newArr.push(arr[i]);
    }
    for (let j = 0; j < newArr.length; j++) this.push(newArr[j]);
  }

  splice(start, del, ...rest) {
    let newArr = {},
      counter = 0;

    for (let i = 0; i < start; i++) {
      newArr[counter] = this.value[i];
      counter++;
    }

    if (rest.length)
      for (let i = 0; i < rest.length; i++) {
        newArr[counter] = rest[i];
        counter++;
      }

    start += del;
    for (let i = start; i < this.length; i++) {
      newArr[counter] = this.value[i];
      counter++;
    }
    this.value = newArr;
    this.length = counter;
  }

  slice(start, end = this.length) {
    let newArr = {},
      counter = 0;
    for (let i = start; i < end; i++) {
      newArr[counter] = this.value[i];
      counter++;
    }
    newArr = new MyArray(newArr, counter);
    return newArr;
  }

  reverse() {
    let i = this.length - 1;
    let tmp = null;
    for (let j = 0; j < this.length; j++) {
      if (j > i) break;
      tmp = this.value[i];
      this.value[i] = this.value[j];
      this.value[j] = tmp;
      i--;
    }
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
// miniArray.splice(0,1)
//
console.log(miniArray);
miniArray.slice(1, 3);
console.log(miniArray);
// console.log(miniArray.length)
