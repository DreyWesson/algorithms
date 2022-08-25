// Hi, here's your problem today. This problem was recently asked by Twitter:
// Given an integer, check if that integer is a palindrome. For this problem do not convert the integer to a string to check if it is a palindrome.
// import math
// def is_palindrome(n):
//   # Fill this in.
// print is_palindrome(1234321)
// # True
// print is_palindrome(1234322)
// # False

const intPalindrome = (num) => {
  num = "" + num;
  let i = 0;
  let j = num.length - 1;
  while (i < j) {
    if (num[i] !== num[j]) return false;
    j--;
    i++;
  }
  return true;
};
intPalindrome(123221);
