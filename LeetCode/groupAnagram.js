// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]
// ["eat","tea","tan","ate","nat","bat"] //[["bat"],["nat","tan"],["ate","eat","tea"]]
const groupAnagrams = function (strs) {
  const sort = (str) => [...str].sort().join("");
  const memo = {};
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    const val = sort(strs[i]);
    if (memo[val]) memo[val].push(strs[i]);
    else memo[val] = [strs[i]];
  }

  for (const i in memo) result.push(memo[i]);
  return result;
};
// groupAnagrams(["eat","tea","tan","ate","nat","bat"])
groupAnagrams(["a"]);
