// ==========================================================
// Question:
// Write a function called sameFrequency. Given two positive integers,
//  find out if the two numbers have the same frequency of digits.
// ==========================================================

function sameFrequency(arg1, arg2) {
  // good luck. Add any arguments you deem necessary.
  arg1 = arg1.toString();
  arg2 = arg2.toString();
  if (arg1.length !== arg2.length) return false;

  const cache = {};

  for (let i = 0; i < arg1.length; i++) {
    cache[arg1[i]] = ++cache[arg1[i]] || 1;
  }
  for (let j = 0; j < arg2.length; j++) {
    if (cache[arg2[j]]) cache[arg2[j]] = --cache[arg2[j]];
    if (cache[arg2[j]] === 0) delete cache[arg2[j]];
  }

  if (JSON.stringify(cache) === "{}") return true;
  return false;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
