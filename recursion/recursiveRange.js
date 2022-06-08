function recursiveRange(num) {
  return num === 1 ? 1 : num + recursiveRange(num - 1);
}
