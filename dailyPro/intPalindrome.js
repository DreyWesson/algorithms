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
