const arr1 = ["a", "b", "c", "x"];
const arr2 = ["d", "f", "k", "m"];

const arr4 = ["z", "y", "a", "b"];

function commonItems(arr1, arr2) {
  // EDGE CASE:
  // is char a number?
  // is char lowercase?
  // is char uppercase?
  // is char a space?
  // is char a special character?
  // SOLUTION:
  let memo = {};
  arr1.forEach((element) => !memo[element] && (memo[element] = true));
  arr2.forEach((element2) => memo[element2] && console.log(element2));
}

commonItems(arr1, arr2);
commonItems(arr1, arr4);

function commonItm(arr1, arr2) {
  return arr1.some((element) => arr2.includes(element));
}
// console.log(commonItm(arr1, arr2));
// console.log(commonItm(arr1, arr4));
