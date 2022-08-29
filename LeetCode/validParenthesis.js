// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
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
