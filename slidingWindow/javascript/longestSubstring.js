// ==========================================================
// Question:
// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous
// subarray of which the sum is greater than or equal to the integer passed
// to the function. If there isn't one, return 0 instead.
// ==========================================================

function findLongestSubstring(str, s) {
  let maxLength = 0;
  let tmp = "";
  let initPos = 0;

  for (let head = 0; head < str.length; head++) {
    const element = str.charAt(head);
    initPos = tmp.indexOf(element);
    tmp += element;
    if (initPos !== -1) tmp = tmp.substr(initPos + 1);
    maxLength = Math.max(maxLength, tmp.length);
  }
  return maxLength;
}
findLongestSubstring("rithmschool");
// findLongestSubstring("thisisawesome");
// findLongestSubstring("thecatinthehat");
// findLongestSubstring("bbbbb");
// findLongestSubstring("longestsubstring");
// findLongestSubstring("thisishowwedoit");
