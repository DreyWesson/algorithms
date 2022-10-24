function deepClone(a) {
    if (typeof a !== "object" || a === null) return a;
    const structure = Array.isArray(a) ? [] : {};
    for (const key in a) structure[key] = deepClone(a[key]);
    return structure;
}

const obj = {
    name: "john",
    age: 92,
    greatGrandParent: {
        grandparent: { parent: { children: ["tope", "shayo"] } },
    },
};

deepClone(obj);
const obj2 = { ...obj };
const obj3 = obj;
console.log(obj3.greatGrandParent.grandparent.parent);
