// ==========================================================
// Question:
// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous
// subarray of which the sum is greater than or equal to the integer passed
// to the function. If there isn't one, return 0 instead.
// ==========================================================

function findLongestSubstring(string) {
  let maxLength = 0;
  let tmp = "";
  let firstOccurrencePos = 0;

  for (let head = 0; head < str.length; head++) {
    const element = str.charAt(head);
    firstOccurrencePos = tmp.indexOf(element);
    tmp += element;
    if (firstOccurrencePos !== -1) tmp = tmp.substr(firstOccurrencePos + 1);
    maxLength = Math.max(maxLength, tmp.length);
  }
  return maxLength;
}
// console.log(findLongestSubstring("abcabcbb"));
// console.log(findLongestSubstring("bbbbb"));
// console.log(findLongestSubstring("pwwkew"));
// console.log(findLongestSubstring("rithmschool")); //7
// console.log(findLongestSubstring("thisisawesome")); //6
console.log(findLongestSubstring("thecatinthehat")); //7
// console.log(findLongestSubstring("thisishowwedoit")); //6

function distanceBtwSimilarChar(arr, s) {
  let memo = {};
  let tmp = 0;
  let max = 0;
  let margin = 0;
  for (let head = 0; head < arr.length; head++) {
    const element = arr[head];
    // if current index memo[element][1] is not zero find margin
    if (memo[element]) {
      memo[element][1] = head + 1;
      const firstPos = memo[element][0];
      const newPos = memo[element][1];
      if (newPos !== 0) {
        margin = newPos - tmp;
        memo[element][2] = margin;
        tmp = head - memo[element][2];
      }
    } else {
      memo[element] = [head + 1, 0, 0];
    }
    max = Math.max(memo[element][2], margin);
  }
  console.log(max);
  console.log(memo);
}
