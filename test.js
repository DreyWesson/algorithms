function power(arg1, arg2) {
  if (arg2 === 0) return 1;
  return arg1 * power(arg1, arg2 - 1);
}
console.log(power(2, 4));
