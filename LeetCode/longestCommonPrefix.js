// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
function compareTwoStr(str1, str2) {
  let minLen = Math.min(str1.length, str2.length);
  let tmp = "";
  for (let i = 0; i < minLen; i++) {
    if (str1[i] !== str2[i]) break;
    tmp += str1[i];
  }
  return tmp;
}

var longestCommonPrefix = function (str) {
  if (str.length === 1) return str[0];
  let tail = 0;
  let result = "";
  for (let head = 1; head < str.length; head++) {
    result = compareTwoStr(str[tail], str[head]);
    if (!result) break;
    str[head] = result;
    tail++;
  }
  return result;
};
// longestCommonPrefix(["flower", "flow", "flight"]); // fl
longestCommonPrefix(["acc", "aaa", "aaba"]); // a
