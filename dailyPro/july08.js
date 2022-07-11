// Amazon:
// You are given an array of integers.
// Return an array of the same size where the element at
// each index is the product of all the elements in the
// original array except for the element at that index.
// For example, an input of [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24].
// You cannot use division in this problem.

function productOfArrElements(arr) {
  const arrLength = arr.length;
  if (arrLength == 1) return;
  let temp = 1;

  /* Allocate memory for the product array */
  let prod = Array(arrLength).fill(0);

  /*
In this loop, temp variable contains 
product of elements on left side
excluding arr[i]
*/
  for (let i = 0; i < arrLength; i++) {
    prod[i] = temp;
    temp *= arr[i];
  }
  // console.log(":", { prod, temp });

  /* Initialize temp to 1 for 
product on right side */
  temp = 1;

  /*
In this loop, temp variable contains
product of elements on right side
excluding arr[i]
*/
  console.log(prod);
  for (let i = arrLength - 1; i >= 0; i--) {
    prod[i] *= temp;
    console.log("::", { prod: prod[i], element: arr[i], temp });
    temp *= arr[i];
    console.log("::::", { prod: prod[i], element: arr[i], temp });
  }

  return prod;
}
console.log(productOfArrElements([1, 2, 3, 4, 5]));
