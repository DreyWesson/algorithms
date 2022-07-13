function getVal(obj, key) {
  const path = key.split(".");

  let tmp = [];
  for (let i = 0; i < path.length; i++) {
    const element = path[i];
    if (i === 0) tmp = obj[element] || undefined;
    else tmp = tmp[element] || undefined;
    if (!tmp) break;
  }
  return tmp ? tmp : undefined;
}
getVal({ a: { b: { c: 2 } } }, "a.b");
