function isPermutation(a) {
  if (typeof a === "string" || !Array.isArray(a)) return 0;
  if (a.length === 0) return 0;
  a.sort((a, b) => a - b);
  let sum = 0;
  let memo = 0;
  const tmp = {};
  for (let i = 0; i < a.length; i++) {
    if (!tmp[a[i]]) tmp[a[i]] = true;
    else return 0;
    sum = a[i] - memo;
    if (sum > 1) return 0;
    memo = a[i];
  }
  return 1;
}
console.log(isPermutation([4, 1, 2, 3]));
