//Facebook: Given a sorted list of numbers, return a list of strings that represent all of the consecutive numbers.
// Example:
// Input: [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]
// Output: ['0->2', '5->5', '7->11', '15->15']

function consecutiveNum(arr) {
  const result = [];
  let temp = [];
  let prev = 0;
  for (let i = 0; i < arr.length; i++) {
    prev = i === 0 ? arr[i] : arr[i - 1];
    const element = arr[i];
    const diff = element - prev;

    if (diff > 1) {
      result.push(`${temp[0]}->${temp[temp.length - 1]}`);
      temp = [element];
    } else temp.push(element);
  }
  result.push(`${temp[0]}->${temp[temp.length - 1]}`);
  console.log(result);
  return result;
}
consecutiveNum([0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15, 18, 20]);
