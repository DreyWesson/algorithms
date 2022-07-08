// // You are given a stream of numbers. Compute the median for each new element .
// //  Eg. Given [2, 1, 4, 7, 2, 0, 5], the algorithm should output
// // [2, 1.5, 2, 3.0, 2, 2, 2]
function median(arr) {
  const result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
    const calc = sum / (i + 1);
    console.log({ sum, element, i, calc });
    result.push(calc);
  }
  console.log(result);
}
median([2, 1, 4, 7, 2, 0, 5]);
