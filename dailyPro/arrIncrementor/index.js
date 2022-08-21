// Hi, here's your problem today. This problem was recently asked by LinkedIn:
// Given a non-empty array where each element represents a digit of a non-negative integer, add one to the integer. The most significant digit is at the front of the array and each element in the array contains only one digit. Furthermore, the integer does not have leading zeros, except in the case of the number '0'.
// Example:
// Input: [2,3,4]
// num = [2, 9, 9] // [3, 0, 0]
function incrementor(arr) {
  let val = "";
  for (let i = 0; i < arr.length; i++) val += arr[i];

  val = (+val + 1).toString();

  for (let i = 0; i < val.length; i++) arr[i] = +val.charAt(i);

  console.log(arr);
  return arr;
}
incrementor([2, 3, 4]); //[2,3,5]
incrementor([0]); // [1]
incrementor([2, 9, 9]); // [3, 0, 0]
