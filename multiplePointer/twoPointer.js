// ==========================================================
// Question:
// Write a function sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or
// undefined if a pair does not exist.
// ==========================================================
function twoPointer(array, target) {
  let head = array.length - 1;
  for (let tail = 0; tail < array.length; tail++) {
    let sum = array[tail] + array[head];
    if (sum === target) return [array[tail], array[head]];
    if (sum > target) head--;
    if (tail > head) return;
  }

  //   let tail = 0;
  //   let head = array.length - 1;
  //   while (tail < head) {
  //     let sum = array[tail] + array[head];
  //     if (sum === target) return [array[tail], array[head]];
  //     if (sum > target) head--;
  //     else tail++;
  //   }
}
console.log(twoPointer([-3, -2, -1, 0, 1, 2, 3], 0)); // [-3, 3]
console.log(twoPointer([-2, 0, 1, 3], 0)); // undefined
console.log(twoPointer([1, 2, 3], 0)); // undefined
console.log(twoPointer([-4, -3, -2, -1, 0, 1, 2, 5], 3)); // [2, -2]
console.log(twoPointer([-4, -3, -2, -1, 0, 1, 2, 4], 3)); // [-1, 4]
