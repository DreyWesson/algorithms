//AirBNB: Given a list of words, group the words that are anagrams of each other. (An anagram are words made up of the same letters).
// Example:
// Input: ['abc', 'bcd', 'cba', 'cbd', 'efg']
// Output: [['abc', 'cba'], ['bcd', 'cbd'], ['efg']]
function groupAnagrams(strings) {
  let result = {};
  for (let word of strings) {
    let cleansed = [...word].sort().join("");
    console.log({ word, cleansed, result });
    result[cleansed]
      ? result[cleansed].push(word)
      : (result[cleansed] = [word]);
  }
  console.log(Object.values(result));
  return Object.values(result);
}
groupAnagrams(["abc", "bcd", "cba", "cbd", "efg"]);
// groupAnagrams([
//   "CARS",
//   "REPAID",
//   "DUES",
//   "NOSE",
//   "SIGNED",
//   "LANE",
//   "PAIRED",
//   "ARCS",
//   "GRAB",
//   "USED",
//   "ONES",
//   "BRAG",
//   "SUED",
//   "LEAN",
//   "SCAR",
//   "DESIGN",
// ]);
