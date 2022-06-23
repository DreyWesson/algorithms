// Given a number N return the index value of the Fibonacci sequence,
// where the sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2
// previous values, that means that for N=5 → 2+3
//For example: fibonacciRecursive(6) should return 8

function fibonacciIterativeA(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log("tut: ", arr[n]);
  return arr[n];
}
fibonacciIterativeA(100);

function fibonacciRecursive(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let result =
    fibonacciRecursive(n - 1, memo) + fibonacciRecursive(n - 2, memo);
  memo[n] = result;
  return result;
}
console.log(fibonacciRecursive(100));
