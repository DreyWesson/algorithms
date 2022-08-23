// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
const canConstruct = function (ransomNote, magazine) {
  //   if (magazine.length < ransomNote.length) return false;
  //   const memo = {};

  //   for (let i = 0; i < ransomNote.length; i++) {
  //     if (memo[ransomNote[i]]) memo[ransomNote[i]]++;
  //     else memo[ransomNote[i]] = 1;
  //   }
  //   for (let i = 0; i < magazine.length; i++) {
  //     if (memo[magazine[i]] > 1) memo[magazine[i]]--;
  //     else delete memo[magazine[i]];
  //     if (Object.keys(memo).length === 0) return true;
  //   }

  //   return false;

  if (magazine.length < ransomNote.length) return false;
  const memo = {};

  for (let i = 0; i < ransomNote.length; i++) {
    if (memo[ransomNote[i]]) memo[ransomNote[i]]++;
    else memo[ransomNote[i]] = 1;
  }
  for (let i = 0; i < magazine.length; i++) {
    if (memo[magazine[i]] > 1) memo[magazine[i]]--;
    else delete memo[magazine[i]];
    if (JSON.stringify(memo) === JSON.stringify({})) return true;
  }

  return false;
};
console.log(
  canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
);
console.log(canConstruct("aa", "acdba"));
