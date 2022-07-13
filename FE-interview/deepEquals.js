function deepEquals(a, b) {
  const isNaNConditions =
    isNaN(a) && isNaN(b) && typeof a === "number" && typeof b === "number";

  if (isNaNConditions) return true;
  if (a === b) return true;
  const conditions =
    a &&
    b &&
    typeof a === "object" &&
    typeof b === "object" &&
    Object.keys(a).length === Object.keys(b).length;
  if (conditions) {
    if (Array.isArray(a) === Array.isArray(b)) {
      for (const key in a)
        if (key in b) {
          if (!deepEquals(a[key], b[key])) return false;
          continue;
        } else return false;
      return true;
    }
  }
  return false;
}
const arr = Array(1000).fill("a"),
  arr1 = [1, 2, 3],
  arr2 = [1, 3, 2],
  arr3 = [
    [1, 2],
    [3, 4],
  ],
  arr4 = [
    [1, 2],
    ["3", 4],
  ],
  arr5 = [
    [1, 2, 3],
    [3, 4],
  ],
  obj1 = {
    hairColor: "brown",
    age: 36,
    greatGrandparent: {
      grandparent: {
        parent: { children: ["John", "Mary", "evans"] },
      },
    },
  },
  obj2 = {
    hairColor: "brown",
    age: 36,
    greatGrandparent: {
      grandparent: {
        parent: { children: ["John", "Mary", "evans"] },
      },
    },
  },
  obj3 = { a: undefined, b: 2 },
  obj4 = { b: 2, c: 3 };

console.log(deepEquals(obj1, obj2));
console.log(deepEquals(1, 1));
console.log(deepEquals("a", "a"));
console.log(deepEquals(NaN, NaN));
console.log(deepEquals([], []));
console.log(deepEquals([1], [1]));
console.log(deepEquals(arr3, arr3));
console.log(deepEquals(undefined, undefined));
console.log(deepEquals(null, null));
console.log(deepEquals(arr, arr));
console.log("\n");
console.log(deepEquals(1, 0));
console.log(deepEquals("a", "b"));
console.log(deepEquals(NaN, 10));
console.log(deepEquals(NaN, "NaN"));
console.log(deepEquals(arr5, arr4));
console.log(deepEquals(arr3, arr4));
console.log(deepEquals(obj3, obj4));
