// Hi, here's your problem today. This problem was recently asked by AirBNB:
// Given a non-empty list of words, return the k most frequent words. The output should be sorted from highest to lowest frequency, and if two words have the same frequency, the word with lower alphabetical order comes first. Input will contain only lower-case letters.
// Example:
// Input: ["daily", "interview", "pro", "pro",
// "for", "daily", "pro", "problems"], k = 2
// Output: ["pro", "daily"]

function kFrequency(arr, k) {
  const memo = {};
  let tmp = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (memo[element]) memo[element] += 1;
    else memo[element] = 1;
  }

  Object.entries(memo).forEach(([key, value]) => {
    if (value >= k) tmp[value] ? tmp[value].push(key) : (tmp[value] = [key]);
    delete memo[key];
  });

  Object.entries(tmp).forEach(([key, value]) => {
    if (value.length > 1) tmp[key] = value.sort();
  });

  let newArr = [];

  for (let i = 0; i < tmp.length - 1; i++) {
    newArr.push(tmp.pop());
  }
  newArr = newArr.flat(2);
  console.log(newArr);
}
kFrequency(
  [
    "daily",
    "interview",
    "pro",
    "pro",
    "for",
    "for",
    "daily",
    "pro",
    "problems",
  ],
  2
);
