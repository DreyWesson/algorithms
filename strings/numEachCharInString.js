import { isAlphaNumericChar } from "../utils/isAlphanumericChar.js";
function numEachCharInStr(params) {
  const memo = {};
  // EDGE CASES
  // change to lowercase? how do you handle numbers?
  // how do you handle spaces?
  // how do you handle special characters?
  if (!params.length) return "Params can't be empty";
  if (!(typeof params === "string" || Array.isArray(params)))
    return "Params must be a string or array";
  else
    for (let i = 0; i < params.length; i++)
      memo[params[i]] = ++memo[params[i]] || 1;
  return memo;
}
console.log(isAlphaNumericChar("w"));
console.log(numEachCharInStr("hello88888"));
console.log(numEachCharInStr(""));
console.log(numEachCharInStr(["hello", "world"]));
