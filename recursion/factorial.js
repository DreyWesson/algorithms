function findFactorialRecursive(number) {
  //code here
  let result = 1;
  if (number >= 1) return number * findFactorialRecursive(number - 1);
  return result;
}
console.log(findFactorialRecursive(5));

function findFactorialIterative(number) {
  //code here
  let result = 1;
  for (let i = number; i > 0; i--) result *= i;
  return result;
}
console.log(findFactorialIterative(5));
