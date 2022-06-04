// ==========================================================
// Question:
// Given an array of integers, write a function called maxSubarraySum
// which finds the maximum sum of a subarray with the length of the
// subarray not exceeding the length of the given array.
// ==========================================================
function maxSubarraySum(arr, windowSize) {
  let tail = 0;
  let sum = 0;
  let max = 0;
  if (arr.length < windowSize) return null;
  for (let head = 0; head < arr.length; head++) {
    sum += arr[head];
    if (head >= windowSize - 1) {
      max = Math.max(max, sum);
      sum -= arr[tail];
      tail++;
    }
  }
  return max;
}
maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); //39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // 0
