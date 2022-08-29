// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const lhs = [];
  const lhChars = new Set("{([<");
  const rhChars = new Set("})]>");
  let result = false;
  const obj = {
    "{": "}",
    "}": "{",
    "]": "[",
    "[": "]",
    "<": ">",
    ">": "<",
    "(": ")",
    ")": "(",
  };

  for (let i = 0; i < s.length + 1; i++) {
    const element = s[i];
    if (lhChars.has(element)) lhs.push(element);
    else if (rhChars.has(element)) {
      if (obj[element] === lhs[lhs.length - 1]) {
        lhs.pop(element);
        result = true;
      } else return false;
    }
  }
  if (lhs.length > 0) result = false;
  return result;
};
