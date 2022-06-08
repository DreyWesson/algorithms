// Question
// find the longest substring with all unique characters

function findLongestSubstring(string) {
  let max = 0,
    current_string = "",
    i,
    char,
    pos;

  for (i = 0; i < string.length; i++) {
    char = string.charAt(i);
    pos = current_string.indexOf(char);
    if (pos !== -1) current_string = current_string.substr(pos + 1);
    current_string += char;
    max = Math.max(max, current_string.length);
  }
  return max;
}
// console.log(findLongestSubstring("abcabcbb"));
// console.log(findLongestSubstring("bbbbb"));
// console.log(findLongestSubstring("pwwkew"));
// console.log(findLongestSubstring("rithmschool")); //7
console.log(findLongestSubstring("thisisawesome")); //6
// console.log(findLongestSubstring("thecatinthehat")); //7
// console.log(findLongestSubstring("thisishowwedoit")); //6
