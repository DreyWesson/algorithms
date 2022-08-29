// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  let maxLength = 0;
  let newString = "";
  let firstOccurrencePos = 0;

  for (let head = 0; head < str.length; head++) {
    const element = str.charAt(head);
    firstOccurrencePos = newString.indexOf(element);
    newString += element;
    if (firstOccurrencePos !== -1)
      newString = newString.substring(firstOccurrencePos + 1);
    maxLength = Math.max(maxLength, newString.length);
  }
  return maxLength;
};
