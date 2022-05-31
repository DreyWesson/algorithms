// ==========================================================
// QUESTION:
// Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’
// ==========================================================
function maxSumOfContiguousSubarr(K, arr) {
  let memo = 0,
    tmp = 0,
    sum = 0,
    windowTail = 0;
  const result = [];
  let newArr = [];
  for (let head = 0; head < arr.length; head++) {
    sum += arr[head];
    result.push(arr[head]);
    tmp = memo;
    if (head >= K - 1) {
      if (memo < sum || result.length > K) result.shift();
      memo = Math.max(memo, sum);
      if (memo > tmp) newArr = [...result];
      sum -= arr[windowTail];
      windowTail += 1;
    }
  }
  return { results: memo, newArr };
}
console.log(maxSumOfContiguousSubarr(3, [2, 1, 5, 1, 3, 2, 9, 9, 9]));
console.log(maxSumOfContiguousSubarr(3, [2, 3, 4, 1, 5, 1, 1, 1, 1, 1]));
