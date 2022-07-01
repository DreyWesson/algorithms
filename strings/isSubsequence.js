// ==========================================================
// QUESTION:
// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence
// of the characters in the second string. In other words, the function should
// check whether the characters in the first string appear somewhere in the second string,
//  without their order changing.
// ==========================================================

// function isSubsequence(arg1, arg2) {
//   // good luck. Add any arguments you deem necessary.
//   if (typeof arg1 !== "string" || typeof arg2 !== "string") return false;
//   const memo = {};
//   for (let i = 0; i < arg1.length; i++) {
//     const element = arg1[i];
//     if (memo[element]) memo[element] = [memo[element][0], memo[element][1] + 1];
//     else memo[element] = [i + 1, 1];
//   }

//   let pos = 0;
//   for (let j = 0; j < arg2.length; j++) {
//     pos++;
//     const element = arg2[j];
//     if (memo[element]) {
//       if (memo[element][0] > pos) return false;
//       if (memo[element][1] !== 1)
//         memo[element] = [memo[element][0] + 1, memo[element][1] - 1];
//       else delete memo[element];
//     }

//     if (JSON.stringify(memo) === "{}") return true;
//   }
// }

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
console.log(isSubsequence("hello wd", "hello wor ld")); // true
// console.log(isSubsequence("sing", "sting")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false
