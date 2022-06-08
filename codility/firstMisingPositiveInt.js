function solution(arr) {
  // Question: Loop through and return the first missing positive integer
  if (typeof arr === "string" || !Array.isArray(arr)) return "Invalid input";

  arr = arr.sort((a, b) => a - b);

  let memo = 0;
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element in cache) return 0;
    cache[element] = true;
    if (element >= 0) {
      const diff = arr[i] - memo;
      if (diff > 1) return memo + 1;
      if (i === arr.length - 1) return arr[i] + 1;
      memo = arr[i];
    } else return 1;
  }
}
const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99,
];
console.log(solution([1, 3, 6, 4, 1, 2])); //5
console.log(solution([1, 2, 3])); //4
console.log(solution([-1, -3])); //1
console.log(solution(arr)); //66

function x(arr) {
  //   if (typeof arr === "string" || !Array.isArray(arr)) return "Invalid input";
  let memo = [];

  for (let i = 0; i < arr; i++) {
    memo.push(i);
  }
  console.log(memo);
}
// x(1000);
