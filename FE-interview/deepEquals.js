function deepEquals(a, b) {
    const conditions = {
        isArray: Array.isArray(a) === Array.isArray(b),
        isNaN:
            isNaN(a) &&
            isNaN(b) &&
            typeof a === "number" &&
            typeof b === "number",
        isObject:
            a &&
            b &&
            typeof a === "object" &&
            typeof b === "object" &&
            Object.keys(a).length === Object.keys(b).length,
    };

    if (a === b) return true;
    if (conditions.isNaN) return true;
    if (conditions.isObject) {
        if (conditions.isArray) {
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

// console.log(deepEquals(obj1, obj2)); // true
// console.log(deepEquals(1, 1)); // true
// console.log(deepEquals("a", "a")); // true
// console.log(deepEquals(NaN, NaN)); //true
// console.log(deepEquals([], [])); // true
// console.log(deepEquals([1], [1])); // true
// console.log(deepEquals(arr3, arr3)); // true
// console.log(deepEquals(undefined, undefined)); // true
// console.log(deepEquals(null, null)); // true
// console.log(deepEquals(arr, arr)); // true
// console.log("\n");
// console.log(deepEquals(1, 0)); // false
// console.log(deepEquals("a", "b")); // false
// console.log(deepEquals(NaN, 10)); // false
// console.log(deepEquals(NaN, "NaN")); // false
// console.log(deepEquals(arr1, arr2)); // false
// console.log(deepEquals(arr5, arr4)); // false
// console.log(deepEquals(arr3, arr4)); // false
// console.log(deepEquals(obj3, obj4)); // false
