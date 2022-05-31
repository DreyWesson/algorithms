// ==========================================================
// Question:
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// ==========================================================
function anagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (
    str1.length != str2.length ||
    typeof str1 !== "string" ||
    typeof str2 !== "string"
  )
    return false;

  const memo = {};
  for (let i = str2.length - 1; i >= 0; i--)
    memo[str2[i]] = ++memo[str2[i]] || 1;

  for (let j = 0; j < str1.length; j++) {
    if (memo[str1[j]]) memo[str1[j]] -= 1; // Order is important here
    if (memo[str1[j]] === 0) delete memo[str1[j]]; // Order is important here
  }

  if (JSON.stringify(memo) === "{}") return true;
  return false;
}
console.log(anagram("hello", "olleh")); // true
console.log(anagram("", "")); // true
console.log(anagram("aaz", "zza")); // false
console.log(anagram("anagram", "nagaram")); // true
console.log(anagram("rat", "car")); // false
console.log(anagram("awesome", "awesom")); // false
console.log(anagram("qwerty", "qeywrt")); // true
console.log(anagram("texttwisttime", "timetwisttext")); // true
