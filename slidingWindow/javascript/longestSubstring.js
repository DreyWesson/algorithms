// ==========================================================
// Question:
// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous
// subarray of which the sum is greater than or equal to the integer passed
// to the function. If there isn't one, return 0 instead.
// ==========================================================

function findLongestSubstring(arr, s) {
  let memo = {};
  let tmp = 0;
  for (let head = 0; head < arr.length; head++) {
    const element = arr[head];
    // if its greater than 2 and its value longer than the current value
    if (memo[element]) {
      if (memo[element][0] > 1) {
        tmp = memo[element][1];
        // memo[element] = [
        //   memo[element][0],
        //   memo[element][1],
        //   // Math.max(x, memo[element][1]),
        // ];
        // save its value in tmp
        // reduce its new occurrence value by 1 and pos to 0
      }
      memo[element] = [memo[element][0] + 1, head + 1];
      let x = head + 1 - memo[element][1];
      console.log(x);
      // console.log(memo[element][1]);
      // console.log(head + 1 - memo[element][1]);
    } else {
      memo[element] = [1, head + 1];
    }
    console.log(memo);
  }
  // console.log(memo);
}
findLongestSubstring("rithmschool");
// findLongestSubstring("thisisawesome");
// findLongestSubstring("thecatinthehat");
// findLongestSubstring("bbbbb");
// findLongestSubstring("longestsubstring");
// findLongestSubstring("thisishowwedoit");
