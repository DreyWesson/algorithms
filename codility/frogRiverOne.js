function frog(x, a) {
  if (typeof a === "string" || !Array.isArray(a)) return 0;
  if (!x || a.length <= 1 || isNaN(x)) return 0;
  let count = 1;
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (element <= 0) {
      count = 1;
    } else {
      if (count === x) return count + 1;
    }
    count++;
  }
  return -1;
}

// console.log(frog(5, [1, 3, 1, 4, 2, 3, 5, 4]));
// console.log(frog(10, [1, 3, 1, 4, 2, 3, 5, 4, 8, 10]));
console.log(frog(4, [1, 3, 0, 4, 2, 3, 2, 4]));
