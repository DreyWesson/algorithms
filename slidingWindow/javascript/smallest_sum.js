// ================================================================
// QUESTION:
// Given an array of positive numbers and a positive number ‘S,’
// find the smallest contiguous subarray whose sum is equal to ‘S’.
// Return 0 if no such subarray exists.
// ================================================================
const smallestSum = (arr, s) => {
  let sum = 0;
  let tail = 0;
  const result = [];
  let newArr = [];

  for (let head = 0; head < arr.length; head++) {
    sum += arr[head];
    result.push(arr[head]);
    let cutOutTail = sum - arr[tail];

    if (sum === s && head === 0) return arr[head]; //BEST CASE:the first index val == s return
    if (cutOutTail === s && newArr.length === 1) return newArr; // Avg.Case

    while (cutOutTail >= s) {
      result.shift(); //pop first index
      const condition =
        cutOutTail === s && (!newArr.length || newArr.length >= result.length); //swap newArr with the new small result length
      if (condition) newArr = [...result];

      sum -= arr[tail];
      tail += 1;
      cutOutTail = sum - arr[tail];
    }
  }
  return newArr.length ? newArr : 0;
};

function smallest_subarray_sum(s, arr) {
  // ================================================================
  // QUESTION:
  // Given an array of positive numbers and a positive number ‘S,’
  //  find the length of the smallest contiguous subarray whose sum
  // is greater than or equal to ‘S’. Return 0 if no such subarray exists.
  // ================================================================

  let sum = 0,
    minLength = Infinity,
    tail = 0;

  for (let head = 0; head < arr.length; head++) {
    sum += arr[head]; // add the next element
    while (sum >= s) {
      minLength = Math.min(minLength, head - tail + 1);
      sum -= arr[tail];
      tail += 1;
    }
  }
  if (minLength === Infinity) return 0;
  return minLength;
}
console.log(smallestSum([2, 1, 5, 2, 6, 3, 2], 7));
// console.log(smallestSum([1, 2, 3, 4, 5, 6, 7, 8, 10, 10], 20));
// console.log(smallestSum([1, 2, 3, 4, 5, 6, 7, 8, 10, 11], 21));
// console.log(smallestSum([2, 1, 2, 5, 8], 7));
console.log(smallestSum([3, 1, 1, 6, 8, 4, 4], 8));
console.log(smallest_subarray_sum(7, [2, 1, 5, 2, 6, 3, 2]));
