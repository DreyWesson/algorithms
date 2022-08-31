/**
 * @param {string} s
 * @return {string}
 */
function palindrome(str) {
  if (str.length === 0) return true;
  if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
  return palindrome(str.substr(1, str.length - 2));
}

function combiner(s) {
  const memo = {};
  let tmp = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    tmp += s[i];
    memo[tmp] = true;
    memo[s.substring(i)] = true;
    memo[tmp.substring(1)] = true;
  }
  return memo;
}

var longestPalindrome = function (s) {
  let tmp = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      // console.log(s[j])
      tmp = s[j] + tmp;
    }
    console.log(tmp, palindrome(tmp));
    tmp = "";
  }
  // return tmp;
};
longestPalindrome("abcdbbfcba");
// palindrome("bab")
