function groupBy(collection, property) {
  const memo = {};
  if (!collection || typeof collection !== "object") {
    return memo;
  }
  const isPropertyFunc = typeof property === "function";
  const isPropertyStr = typeof property === "string";
  for (const value of Object.values(collection)) {
    let current = undefined;
    if (isPropertyFunc) current = property(value);
    else if (isPropertyStr) {
      const path = property.split(".");
      let i,
        currentKey,
        currentItem = value;
      //   if (groupBy(value, "length")) {
      //     console.log(value);
      //   }
      //   console.log(value);

      for (let i = 0; i < path.length; i++) {
        currentKey = path[i];
        currentItem = currentItem[currentKey];
      }
    }
    memo[current] ? memo[current].push(value) : (memo[current] = [value]);

    // console.log({ current, value, memo, collection });
  }
  return memo;
}
// groupBy([6.1, 2.4, 2.7, 6.8], Math.floor);
groupBy({ a: { b: { c: 1 } } }, "length");
