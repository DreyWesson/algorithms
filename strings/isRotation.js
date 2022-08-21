// Hi, here's your problem today. This problem was recently asked by Apple:

// You are given two strings, A and B. Return whether A can be shifted some number of times to get B.

// Eg. A = abcde, B = cdeab should return true because A can be shifted 3 times to the right to get B. A = abc and B= acb should return false.
// def is_shifted(a, b):
//   # Fill this in.
// print is_shifted('abcde', 'cdeab')
// # True
function isRotation(str1, str2) {
  let rewrite = str1;
  for (let i = 0; i < str1.length; i++) {
    const char = str1.charAt(i);
    rewrite += char;
    let substrOfRewrite = rewrite.slice(i + 1);
    if (substrOfRewrite === str2) return true;
  }
  return false;
}
console.log(isRotation("ABBAB", "BABBA"));
console.log(isRotation("ABBA", "BAAB"));
console.log(isRotation("abcde", "cdeab"));
console.log(isRotation("waterbottle", "lewaterbott")); // true
console.log(isRotation("waterbottle", "bottlewater")); // true
console.log(isRotation("waterbottle", "erbottlewat")); // true
console.log(isRotation("waterbottle", "lewaterbottx")); // false
