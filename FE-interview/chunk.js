function chunks(array, size) {
  let chunk = [];
  const result = [];
  array.forEach((element, i) => {
    if (i % size) chunk.push(element);
    else {
      chunk = [element];
      chunk.length && result.push(chunk);
    }
  });
  console.log(result);
  return result;
}
chunks(["a", "b", "c", "d", "e", "f", "g", "h", "i"], 2);
