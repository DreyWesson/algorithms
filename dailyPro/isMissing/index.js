// Hi, here's your problem today. This problem was recently asked by Twitter:
// Given an array of integers of size n, where all elements are between 1 and n inclusive, find all of the elements of [1, n] that do not appear in the array. Some numbers may appear more than once.
// Example:
// Input: [4,5,2,6,8,2,1,5]
// Output: [3,7]

// function isMissing(arr) {
//   let max = 0;
//   let min = Infinity;
//   const memo = {},
//     tmp = [];
//   for (let i = 0; i < arr.length; i++) {
//     min = Math.min(min, arr[i]);
//     max = Math.max(max, arr[i]);
//   }
//   for (let i = min; i < max; i++) memo[i] = i;
//   for (let i = 0; i < arr.length; i++) if (memo[arr[i]]) delete memo[arr[i]];
//   for (const property in memo) +property > 0 && tmp.push(+property);

//   return tmp;
// }
var isMissing = function (nums) {
  let setData = new Set(nums);
  let count = 0;
  for (let i = 1; i <= setData.size; i++) {
    count++;
    if (!setData.has(i)) {
      console.log(i, count);
      return i;
    }
  }
  console.log(setData.size + 1, count);
  return setData.size + 1;
};
// isMissing([4, 5, 2, 6, 8, 2, 1, 5]); // [3,7]
// isMissing([4, 6, 2, 6, 7, 2, 1]); // [3, 5]
// isMissing([10, 1]);
// isMissing([7,8,9,11,12])
isMissing([1, 2]);
// console.log(isMissing([3, 4, -5, 1, 1]));
