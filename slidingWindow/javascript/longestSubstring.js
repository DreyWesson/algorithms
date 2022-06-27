// ==========================================================
// Question:
// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous
// subarray of which the sum is greater than or equal to the integer passed
// to the function. If there isn't one, return 0 instead.
// ==========================================================

function minSubArrayLen(str, s) {
  let minLength = Infinity,
    sum = 0,
    tail = 0;

  for (let head = 0; head < arr.length; head++) {
    sum += arr[head];
    while (sum >= s) {
      minLength = Math.min(minLength, head - tail + 1);
      sum -= arr[tail];
      tail += 1;
    }
  }
  if (minLength === Infinity) return 0;
  return minLength;
}
minSubArrayLen([]);
