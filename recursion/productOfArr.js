function productOfArr([front, ...end]) {
  return front === undefined ? 1 : front * productOfArr(end);
}
console.log(productOfArr([1, 2, 3]));
