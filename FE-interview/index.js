function test(a, b) {
  const isArg1NaN = isNaN(a) && typeof a === "number";
  const isArg2NaN = isNaN(b) && typeof b === "number";
  if (isArg1NaN && isArg2NaN) {
    console.log("true");
    return true;
  }
  if (a === b) return true;
  const conditions =
    a &&
    b &&
    typeof a === "object" &&
    typeof b === "object" &&
    Object.keys(a).length === Object.keys(a).length;
  if (conditions) {
    if (Array.isArray(a) === Array.isArray(b)) {
      for (const key in a) {
        console.log(key);
        if (key in b) {
          if (!test(a[key], b[key])) return false;
        } else return false;
      }
      return true;
    }
  }
  return false;
}
const obj1 = {
  name: "John",
  age: 42,
  greatGrandParent: {
    grandparent: { parent: { children: ["Marv", "Israel"] } },
  },
};
const obj2 = {
  name: "John",
  age: 42,
  greatGrandParent: {
    grandparent: { parent: { children: ["Marvelous", "Israel"] } },
  },
};
console.log(test(obj1, obj2));
