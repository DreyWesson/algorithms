/**
 * @param {string} s
 * @return {number}
 */
function char_to_int(c) {
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return dictionary[c];
}
var romanToInt = function (str1) {
  if (!str1) return -1;
  let num = char_to_int(str1.charAt(0));
  let pre, curr;
  for (var i = 1; i < str1.length; i++) {
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i - 1));
    if (curr <= pre) num += curr;
    else num = num - pre * 2 + curr;
  }
  return num;
};
