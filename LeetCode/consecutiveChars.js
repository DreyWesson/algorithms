// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
/**
 * @param {string} s
 * @return {number}
 */

var maxPower = function (s) {
  let tmp = "";
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    tmp += s[i];
    if (tmp.charAt(0) === s[i]) max = Math.max(max, tmp.length);
    else tmp = s[i];
  }
  return max;
};
