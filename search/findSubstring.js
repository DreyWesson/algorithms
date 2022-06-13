function findSubString(str, subStr) {
  const k = subStr.length;
  let sub = "";
  let sum = 0;
  for (let head = 0; head < str.length; head++) {
    sub += str[head];
    if (head >= k) {
      sub = sub.substring(1);
      if (sub === subStr) sum += 1;
    }
  }
  return sum;
}
console.log(findSubString("tspracecarpst", "carp"));
console.log(findSubString("lmdbwowldwowjfhwowk", "wow"));
