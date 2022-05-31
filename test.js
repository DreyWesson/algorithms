function isSubsequence(arg1, arg2) {
  // good luck. Add any arguments you deem necessary.
  if (typeof arg1 !== "string" || typeof arg2 !== "string") return false;
  const memo = {};
  const tmp = {};
  for (let i = 0; i < arg1.length; i++) {
    const element = arg1[i];
    if (memo[element]) memo[element] = [memo[element][0], memo[element][1] + 1];
    else memo[element] = [i + 1, 1];
  }
  let pos = 0;
  for (let j = 0; j < arg2.length; j++) {
    pos++;
    const element = arg2[j];
    if (memo[element] && memo[element][0] > pos) return false;
    if (memo[element]) {
      if (memo[element][1] !== 1)
        memo[element] = [memo[element][0] + 1, memo[element][1] - 1];
      else delete memo[element];
    }
    if (JSON.stringify(memo) === "{}") return true;
  }
}
console.log(isSubsequence("hello ld", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
