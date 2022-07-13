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

function hasAlt(obj, property) {
  const path = property.split(".");
  let tmp = null;
  for (let i = 0; i < path.length; i++) {
    const element = path[i];
    i === 0
      ? (tmp = obj[element] || undefined)
      : (tmp = tmp[element] || undefined);
    if (!tmp) break;
  }
  console.log(tmp ? true : false);
  return tmp ? true : false;
}
hasAlt(obj, "a.b.c.f.e");
