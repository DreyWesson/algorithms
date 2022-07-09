// Facebook: Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
// Example 1:
// Input: "The cat in the hat"
// Output: "ehT tac ni eht tah"

function reverseSubStr(str) {
  let result = "",
    subStr = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    subStr = element + subStr;
    if (element === " ") {
      result += subStr;
      subStr = "";
    }
    if (i === str.length - 1 && subStr) result += " " + subStr;
  }
  console.log({ result });
  return result;
}
reverseSubStr("The cat in the hat");
