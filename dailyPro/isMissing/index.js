// Hi, here's your problem today. This problem was recently asked by Twitter:
// Given an array of integers of size n, where all elements are between 1 and n inclusive, find all of the elements of [1, n] that do not appear in the array. Some numbers may appear more than once.
// Example:
// Input: [4,5,2,6,8,2,1,5]
// Output: [3,7]

function isMissing(arr) {
  let max = 0;
  const memo = {},
    tmp = [];
  for (let i = 0; i < arr.length; i++) max = Math.max(max, arr[i]);
  for (let i = 1; i < max; i++) memo[i] = i;
  for (let i = 0; i < arr.length; i++) if (memo[arr[i]]) delete memo[arr[i]];
  for (const property in memo) tmp.push(+property);
  console.log(tmp);
  return tmp;
}
isMissing([4, 5, 2, 6, 8, 2, 1, 5]); // [3,7]
isMissing([4, 6, 2, 6, 7, 2, 1]); // [3, 5]
isMissing([20, 1]); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
