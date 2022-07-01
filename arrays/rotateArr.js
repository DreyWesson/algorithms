// Given an array, rotate the array to the right by k steps, where k is non-negative.
function rotateArr(arr, k) {
  const memo = [];
  const tmp = [];
  for (let i = 0; i < k; i++) {
    if (i < arr.length - k) {
      memo.push(arr[i]);
    } else tmp.push(arr[i]);
  }
  return tmp.concat(memo);
}

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArr([-1, -100, 3, 99], 2));
console.log(rotateArr([3, 8, 9, 7, 6], 2));
