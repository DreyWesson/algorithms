function findLongestSubstrK(str, k) {
  const memo = {};
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    const element = str.charAt(i);
    newString += element;
    if (!memo[element]) memo[element] = 1;
    else memo[element]++;
  }
  console.log(Object.keys(memo).length);
  while (Object.keys(memo).length > k) {
    newString = newString.substr();
  }
}
findLongestSubstrK("araaci", 2);
