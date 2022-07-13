function groupBy(collection, property) {
  if (!collection || typeof collection !== "object") return {};
  const memo = {},
    propertyType = typeof property;
  let status = null;

  for (const [key, value] of Object.entries(collection)) {
    let current = null;
    if (propertyType === "function") current = property(value);
    else if (propertyType === "string") {
      const path = property.split(".");
      let currentItem = value;
      for (let i = 0; i < path.length; i++) {
        const currentKey = path[i];
        if (i === 0 && key === path[0]) continue;
        currentItem = currentItem[currentKey] || undefined; //slot in nested value
        if (!currentItem) break;
      }
      current = currentItem;
      status = currentItem ? true : false;
    }
    memo[current] ? memo[current].push(value) : (memo[current] = [value]);
  }
  console.log(propertyType === "function" ? memo : { status, memo });
  return propertyType === "function" ? memo : { status, memo };
}
// console.log(groupBy(1, "length"));
// groupBy(null, "length");
// groupBy([6.1, 2.4, 2.7, 6.8], Math.floor);
// groupBy([{ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }], "a.b.c");
groupBy({ a: { b: { c: 1 } } }, "a.g.c");
// groupBy([{ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }], "a.c.b");
// groupBy(["one", "two", "three"], "length");
