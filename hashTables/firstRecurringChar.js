function firstRecurringChar(str) {
  const memo = {};
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    console.log(memo);
    if (memo[element]) return element;
    else memo[element] = 1;
  }
}

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 5, 5, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 3, 4, 5]));
console.log(firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar("google"));

//task: return all duplicates and its respective count
