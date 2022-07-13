function has(obj, property) {
  const path = property.split(".");

  for (const [key, value] of Object.entries(obj)) {
    let currentItem = value;
    for (let i = 0; i < path.length; i++) {
      const currentKey = path[i];
      if (i === 0 && key === path[0]) continue;
      currentItem = currentItem[currentKey] || undefined; //slot in nested value
      if (!currentItem) break;
    }
    console.log(currentItem ? true : false);
    return currentItem ? true : false;
  }
}
const obj = { a: { b: { c: { d: { e: 15 } } } } };
has(obj, "a.b.c.d.e");
