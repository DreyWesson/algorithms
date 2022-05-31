// ==========================================================
// Question:
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
// ==========================================================
function countUniqueValues(arg) {
  if (!arg.length || !isNaN(arg)) return 0;
  let head = arg.length - 1;
  let counter = 0;
  const tmp = {};
  let count = 0;
  for (let tail = 0; tail < arg.length; tail++) {
    count++;
    if (tmp[arg[tail]]) tmp[arg[tail]] = ++tmp[arg[tail]];
    else {
      tmp[arg[tail]] = 1;
      counter++;
    }
    if (tmp[arg[head]]) tmp[arg[head]] = ++tmp[arg[head]];
    else {
      tmp[arg[head]] = 1;
      counter++;
    }
    head--;
    if (tail > head) return counter;
  }
}
console.log(countUniqueValues("tylmphone"));
// console.log(countUniqueValues("hello"));
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(
//   countUniqueValues([
//     1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13,
//   ])
// ); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
