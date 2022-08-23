function longestWord(sen) {
  // code goes here
  const isAlphanumeric = (char) => (char.match(/[a-zA-Z0-9]/) ? true : false);
  const tmp = ["", 0];
  let words = "";
  let counter = 0;

  for (let i = 0; i < sen.length; i++) {
    if (isAlphanumeric(sen[i])) {
      counter++;
      words = words + sen[i];
      if (counter > tmp[1]) {
        tmp[0] = words;
        tmp[1] = counter;
      }
    } else {
      words = "";
      counter = 0;
    }
  }
  return tmp[0];
}
longestWord("funny&!! time");
longestWord("I love dogs");
console.log(longestWord("As your lordship pleases"));
