function palindrome(str) {
  if (str.length === 0) return true;
  if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
  return palindrome(str.substr(1, str.length - 2));
}
console.log(palindrome("tspracecarpst"));
