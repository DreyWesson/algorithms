// ==========================================================
// Question:
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// ==========================================================
function same(arr1, arr2) {
  const condition =
    !arr1.length ||
    !arr2.length ||
    !(Array.isArray(arr1) && Array.isArray(arr2)) ||
    arr1.length !== arr2.length; // EDGE CASE: // if arr1 or arr2 is empty // if arr1 or arr2 is not an array // if arr1 contains excess characters? use length?
  if (condition) return false;

  const memo = {}; // create a memo object and store all char of arr1 squared in it
  const tmp = {}; // create a new object to store the frequency of each char in arr1
  for (let i = 0; i < arr1.length; i++) {
    if (isNaN(arr1[i])) return "Invalid input";
    if (memo[arr1[i]]) tmp[arr1[i]] = ++tmp[arr1[i]] || 2; // if number already exist in memo, increment the frequency and add to tmp  // NB: add one more(2) to tmp for first occurrence not recorded
    memo[arr1[i]] = arr1[i] ** 2; // memoize the squared value of each char in arr1
  }

  for (let j = 0; j < arr2.length; j++) {
    if (isNaN(arr2[j])) return "Invalid input";

    if (memo[Math.sqrt(arr2[j]).toString()]) {
      if (tmp[Math.sqrt(arr2[j])]) tmp[Math.sqrt(arr2[j])] -= 1; // tmp[Math.sqrt(arr2[j])] is value in tmp for the square root of arr2[j] // * order is important here *
      if (tmp[Math.sqrt(arr2[j])] === 0) delete tmp[Math.sqrt(arr2[j])]; // * order is important here *
    } else return false;
  }

  if (JSON.stringify(tmp) !== "{}")
    return false; // if tmp is not empty it means we have irregular char in arr2
  else return true;
}
console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3, 2], [4, 4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9, 8])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
console.log(same([], [])); //false
