// ==========================================================
// QUESTION:
// Given two strings, write a function to determine if the second
// string is an anagram of the first.
// ==========================================================

function validAnagram(str1, str2) {
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
    if (memo[str1[j]]) memo[str1[j]] = memo[str1[j]] - 1;
    if (memo[str1[j]] === 0) delete memo[str1[j]];
  }
  return JSON.stringify(memo) === "{}" ? console.log(true) : console.log(false);
}
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
