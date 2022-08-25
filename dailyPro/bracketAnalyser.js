// Hi, here's your problem today. This problem was recently asked by Twitter:
// Given a string with only ( and ), find the minimum number of characters to add or subtract to fix the string such that the brackets are balanced.
// Example:
// Input: '(()()'
// Output: 1
// Explanation:
// The fixed string could either be ()() by deleting the first bracket, or (()()) by adding a bracket. These are not the only ways of fixing the string, there are many other ways by adding it in different positions!
// Here's some code to start with:
// def fix_brackets(s):
//   # Fill this in.
// print fix_brackets('(()()')

const bracketAnalyser = (brackets) => {
  if (brackets.length % 2 !== 0) return false;
  const lhs = [];
  const lhChars = new Set("{([<");
  const rhChars = new Set("})]>");
  const obj = {
    "{": "}",
    "}": "{",
    "]": "[",
    "[": "]",
    "<": ">",
    ">": "<",
    "(": ")",
    ")": "(",
  };

  for (let i = 0; i < brackets.length + 1; i++) {
    const element = brackets[i];
    if (lhChars.has(element)) lhs.push(element);
    else if (rhChars.has(element)) {
      if (obj[element] === lhs[lhs.length - 1]) lhs.pop(element);
      else return false;
    }
  }
  return true;
};

// bracketAnalyser("(()())");
// bracketAnalyser("<()())");
// bracketAnalyser("(()())");
bracketAnalyser("[()]{}{[()()]()}");
